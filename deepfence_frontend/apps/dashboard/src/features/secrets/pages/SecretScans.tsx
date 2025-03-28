import { useSuspenseQuery } from '@suspensive/react-query';
import { useIsFetching } from '@tanstack/react-query';
import { capitalize, startCase } from 'lodash-es';
import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import {
  ActionFunctionArgs,
  generatePath,
  useFetcher,
  useSearchParams,
} from 'react-router-dom';
import {
  Badge,
  Breadcrumb,
  BreadcrumbLink,
  Button,
  CircleSpinner,
  Combobox,
  ComboboxOption,
  createColumnHelper,
  Dropdown,
  DropdownItem,
  getRowSelectionColumn,
  Modal,
  RowSelectionState,
  SortingState,
  Table,
  TableSkeleton,
} from 'ui-components';

import { getScanResultsApiClient } from '@/api/api';
import {
  ModelBulkDeleteScansRequestScanTypeEnum,
  ModelScanInfo,
  UtilsReportFiltersNodeTypeEnum,
  UtilsReportFiltersScanTypeEnum,
} from '@/api/generated';
import {
  ConfigureScanModal,
  ConfigureScanModalProps,
} from '@/components/ConfigureScanModal';
import { DFLink } from '@/components/DFLink';
import { FilterBadge } from '@/components/filters/FilterBadge';
import { SearchableClusterList } from '@/components/forms/SearchableClusterList';
import { SearchableContainerList } from '@/components/forms/SearchableContainerList';
import { SearchableHostList } from '@/components/forms/SearchableHostList';
import { SearchableImageList } from '@/components/forms/SearchableImageList';
import { SearchableRegistryAccountList } from '@/components/forms/SearchableRegistryAccountList';
import { EllipsisIcon } from '@/components/icons/common/Ellipsis';
import { ErrorStandardLineIcon } from '@/components/icons/common/ErrorStandardLine';
import { FilterIcon } from '@/components/icons/common/Filter';
import { TimesIcon } from '@/components/icons/common/Times';
import { TrashLineIcon } from '@/components/icons/common/TrashLine';
import { StopScanForm } from '@/components/scan-configure-forms/StopScanForm';
import { ScanStatusBadge } from '@/components/ScanStatusBadge';
import { SeverityBadgeIcon } from '@/components/SeverityBadge';
import { SecretsIcon } from '@/components/sideNavigation/icons/Secrets';
import { TruncatedText } from '@/components/TruncatedText';
import { BreadcrumbWrapper } from '@/features/common/BreadcrumbWrapper';
import { useDownloadScan } from '@/features/common/data-component/downloadScanAction';
import { FilterWrapper } from '@/features/common/FilterWrapper';
import { IconMapForNodeType } from '@/features/onboard/components/IconMapForNodeType';
import { SuccessModalContent } from '@/features/settings/components/SuccessModalContent';
import { invalidateAllQueries, queries } from '@/queries';
import { useTheme } from '@/theme/ThemeContext';
import { ScanTypeEnum } from '@/types/common';
import { get403Message, getResponseErrors } from '@/utils/403';
import { apiWrapper } from '@/utils/api';
import { formatMilliseconds } from '@/utils/date';
import { SeverityEnum } from '@/utils/enum';
import {
  isNeverScanned,
  isScanComplete,
  isScanDeletePending,
  isScanInProgress,
  isScanStopping,
  SCAN_STATUS_FILTER,
  SCAN_STATUS_FILTER_TYPE,
} from '@/utils/scan';
import { getOrderFromSearchParams, useSortingState } from '@/utils/table';

export interface FocusableElement {
  focus(options?: FocusOptions): void;
}

enum ActionEnumType {
  DELETE_SCAN = 'delete_scan',
  CANCEL_SCAN = 'cancel_scan',
  START_SCAN = 'start_scan,',
}

const DEFAULT_PAGE_SIZE = 10;

type ScanResult = ModelScanInfo & {
  total: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
  unknown: number;
};

const action = async ({
  request,
}: ActionFunctionArgs): Promise<
  | {
      url: string;
    }
  | null
  | { success: boolean; message?: string }
> => {
  const formData = await request.formData();
  const actionType = formData.get('actionType');
  const scanIds = formData.getAll('scanId');

  if (!actionType || scanIds.length === 0) {
    throw new Error('Invalid action');
  }

  if (actionType === ActionEnumType.DELETE_SCAN) {
    const resultApi = apiWrapper({
      fn: getScanResultsApiClient().bulkDeleteScans,
    });
    const result = await resultApi({
      modelBulkDeleteScansRequest: {
        filters: {
          compare_filter: null,
          contains_filter: {
            filter_in: {
              node_id: scanIds,
            },
          },
          order_filter: { order_fields: [] },
          match_filter: { filter_in: {} },
        },
        scan_type: ModelBulkDeleteScansRequestScanTypeEnum.Secret,
      },
    });
    if (!result.ok) {
      if (result.error.response.status === 400 || result.error.response.status === 409) {
        const { message } = await getResponseErrors(result.error);
        return {
          success: false,
          message,
        };
      } else if (result.error.response.status === 403) {
        const message = await get403Message(result.error);
        return {
          success: false,
          message,
        };
      }
      throw result.error;
    }
  }
  invalidateAllQueries();
  return {
    success: true,
  };
};

const DeleteConfirmationModal = ({
  showDialog,
  scanIds,
  setShowDialog,
  onDeleteSuccess,
}: {
  showDialog: boolean;
  scanIds: string[];
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  onDeleteSuccess: () => void;
}) => {
  const fetcher = useFetcher();

  const onDeleteAction = useCallback(
    (actionType: string) => {
      const formData = new FormData();
      formData.append('actionType', actionType);
      scanIds.forEach((scanId) => formData.append('scanId', scanId));
      fetcher.submit(formData, {
        method: 'post',
      });
    },
    [scanIds, fetcher],
  );

  useEffect(() => {
    if (
      fetcher.state === 'idle' &&
      fetcher.data?.success &&
      fetcher.data.action === ActionEnumType.DELETE_SCAN
    ) {
      onDeleteSuccess();
    }
  }, [fetcher]);

  return (
    <Modal
      open={showDialog}
      onOpenChange={() => setShowDialog(false)}
      size="s"
      title={
        !fetcher.data?.success ? (
          <div className="flex gap-3 items-center text-status-error">
            <span className="h-6 w-6 shrink-0">
              <ErrorStandardLineIcon />
            </span>
            Delete scan
          </div>
        ) : undefined
      }
      footer={
        !fetcher.data?.success ? (
          <div className={'flex gap-x-3 justify-end'}>
            <Button
              size="md"
              onClick={() => setShowDialog(false)}
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              size="md"
              color="error"
              loading={fetcher.state === 'submitting'}
              disabled={fetcher.state === 'submitting'}
              onClick={(e) => {
                e.preventDefault();
                onDeleteAction(ActionEnumType.DELETE_SCAN);
              }}
            >
              Delete
            </Button>
          </div>
        ) : undefined
      }
    >
      {!fetcher.data?.success ? (
        <div className="grid">
          Selected scan will be deleted.
          <br />
          <span>Are you sure you want to delete?</span>
          {fetcher.data?.message && (
            <p className="mt-2 text-p7 text-status-error">{fetcher.data?.message}</p>
          )}
        </div>
      ) : (
        <SuccessModalContent text="Deleted successfully!" />
      )}
    </Modal>
  );
};

const ActionDropdown = ({
  trigger,
  row,
  onTableAction,
}: {
  trigger: React.ReactNode;
  row: ModelScanInfo;
  onTableAction: (row: ModelScanInfo, actionType: ActionEnumType) => void;
}) => {
  const fetcher = useFetcher();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { downloadScan } = useDownloadScan((state) => {
    setIsSubmitting(state === 'submitting');
  });
  const {
    scan_id: scanId,
    node_id: nodeId,
    node_type: nodeType,
    status: scanStatus,
  } = row;

  const onDownloadAction = useCallback(() => {
    downloadScan({
      scanId,
      nodeType: nodeType as UtilsReportFiltersNodeTypeEnum,
      scanType: UtilsReportFiltersScanTypeEnum.Secret,
    });
  }, [scanId, nodeId, fetcher]);

  useEffect(() => {
    if (fetcher.state === 'idle') setOpen(false);
  }, [fetcher]);

  return (
    <>
      <Dropdown
        triggerAsChild
        align="start"
        open={open}
        onOpenChange={setOpen}
        content={
          <>
            <DropdownItem
              onSelect={(e) => {
                if (!isScanComplete(scanStatus)) return;
                e.preventDefault();
                onDownloadAction();
              }}
              disabled={
                !isScanComplete(scanStatus) ||
                isSubmitting ||
                isScanDeletePending(scanStatus)
              }
            >
              <span className="flex text-center gap-x-2">
                {isSubmitting && <CircleSpinner size="sm" />}Download report
              </span>
            </DropdownItem>
            <DropdownItem
              onSelect={(e) => {
                e.preventDefault();
                onTableAction(row, ActionEnumType.START_SCAN);
              }}
              disabled={
                isScanInProgress(scanStatus) ||
                isScanStopping(scanStatus) ||
                isScanDeletePending(scanStatus)
              }
            >
              <span>Start scan</span>
            </DropdownItem>
            <DropdownItem
              onSelect={(e) => {
                e.preventDefault();
                onTableAction(row, ActionEnumType.CANCEL_SCAN);
              }}
              disabled={!isScanInProgress(scanStatus) || isScanDeletePending(scanStatus)}
            >
              <span className="flex items-center">Cancel scan</span>
            </DropdownItem>
            <DropdownItem
              onSelect={() => {
                if (!scanId || !nodeType) return;
                onTableAction(row, ActionEnumType.DELETE_SCAN);
              }}
              disabled={
                !scanId ||
                !nodeType ||
                isScanInProgress(scanStatus) ||
                isScanDeletePending(scanStatus)
              }
              color="error"
            >
              Delete scan
            </DropdownItem>
          </>
        }
      >
        {trigger}
      </Dropdown>
    </>
  );
};

enum FILTER_SEARCHPARAMS_KEYS_ENUM {
  nodeType = 'nodeType',
  secretScanStatus = 'secretScanStatus',
  containerImages = 'containerImages',
  containers = 'containers',
  hosts = 'hosts',
  clusters = 'clusters',
  registryAccounts = 'registryAccounts',
}

const FILTER_SEARCHPARAMS_DYNAMIC_KEYS = [
  FILTER_SEARCHPARAMS_KEYS_ENUM.hosts,
  FILTER_SEARCHPARAMS_KEYS_ENUM.containerImages,
  FILTER_SEARCHPARAMS_KEYS_ENUM.clusters,
  FILTER_SEARCHPARAMS_KEYS_ENUM.registryAccounts,
  FILTER_SEARCHPARAMS_KEYS_ENUM.containers,
];

const FILTER_SEARCHPARAMS: Record<FILTER_SEARCHPARAMS_KEYS_ENUM, string> = {
  nodeType: 'Node type',
  secretScanStatus: 'Secret scan status',
  containerImages: 'Container image',
  containers: 'Container',
  hosts: 'Host',
  clusters: 'Cluster',
  registryAccounts: 'Registry',
};
const getPrettyNameForAppliedFilters = ({
  key,
  value,
}: {
  key: string;
  value: string;
}) => {
  switch (key) {
    case 'nodeType':
      return startCase(value);

    default:
      return value;
  }
};
const getAppliedFiltersCount = (searchParams: URLSearchParams) => {
  return Object.keys(FILTER_SEARCHPARAMS).reduce((prev, curr) => {
    return prev + searchParams.getAll(curr).length;
  }, 0);
};
const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [nodeType, setNodeType] = useState('');
  const [secretScanStatusSearchText, setSecretScanStatusSearchText] = useState('');

  const onFilterRemove = ({ key, value }: { key: string; value: string }) => {
    return () => {
      setSearchParams((prev) => {
        const existingValues = prev.getAll(key);
        prev.delete(key);
        existingValues.forEach((existingValue) => {
          if (existingValue !== value) prev.append(key, existingValue);
        });
        prev.delete('page');
        return prev;
      });
    };
  };

  const appliedFilterCount = getAppliedFiltersCount(searchParams);
  return (
    <FilterWrapper>
      <div className="flex gap-2">
        <Combobox
          getDisplayValue={() => FILTER_SEARCHPARAMS['nodeType']}
          multiple
          value={searchParams.getAll('nodeType')}
          onChange={(values) => {
            setSearchParams((prev) => {
              prev.delete('nodeType');
              values.forEach((value) => {
                prev.append('nodeType', value);
              });
              prev.delete('page');
              return prev;
            });
          }}
          onQueryChange={(query) => {
            setNodeType(query);
          }}
          clearAllElement="Clear"
          onClearAll={() => {
            setSearchParams((prev) => {
              prev.delete('nodeType');
              prev.delete('page');
              return prev;
            });
          }}
        >
          {['host', 'container', 'container_image']
            .filter((item) => {
              if (!nodeType.length) return true;
              return item.includes(nodeType.toLowerCase());
            })
            .map((item) => {
              return (
                <ComboboxOption key={item} value={item}>
                  {capitalize(item.replace('_', ' '))}
                </ComboboxOption>
              );
            })}
        </Combobox>
        <Combobox
          value={searchParams.get('secretScanStatus')}
          onQueryChange={(query) => {
            setSecretScanStatusSearchText(query);
          }}
          onChange={(value) => {
            setSearchParams((prev) => {
              if (value) {
                prev.set('secretScanStatus', value);
              } else {
                prev.delete('secretScanStatus');
              }
              prev.delete('page');
              return prev;
            });
          }}
          getDisplayValue={() => FILTER_SEARCHPARAMS['secretScanStatus']}
        >
          {Object.keys(SCAN_STATUS_FILTER)
            .filter((item) => {
              if (item === SCAN_STATUS_FILTER['Never scanned']) {
                return false;
              }
              if (!secretScanStatusSearchText.length) return true;
              return item
                .toLowerCase()
                .includes(secretScanStatusSearchText.toLowerCase());
            })
            .map((item) => {
              return (
                <ComboboxOption key={item} value={item}>
                  {item}
                </ComboboxOption>
              );
            })}
        </Combobox>

        <SearchableImageList
          scanType={ScanTypeEnum.SecretScan}
          defaultSelectedImages={searchParams.getAll('containerImages')}
          isScannedForSecrets
          onClearAll={() => {
            setSearchParams((prev) => {
              prev.delete('containerImages');
              prev.delete('page');
              return prev;
            });
          }}
          onChange={(value) => {
            setSearchParams((prev) => {
              prev.delete('containerImages');
              value.forEach((containerImage) => {
                prev.append('containerImages', containerImage);
              });
              prev.delete('page');
              return prev;
            });
          }}
        />
        <SearchableContainerList
          scanType={ScanTypeEnum.SecretScan}
          defaultSelectedContainers={searchParams.getAll('containers')}
          isScannedForSecrets
          onChange={(value) => {
            setSearchParams((prev) => {
              prev.delete('containers');
              value.forEach((container) => {
                prev.append('containers', container);
              });
              prev.delete('page');
              return prev;
            });
          }}
        />
        <SearchableHostList
          scanType={ScanTypeEnum.SecretScan}
          defaultSelectedHosts={searchParams.getAll('hosts')}
          isScannedForSecrets
          onChange={(value) => {
            setSearchParams((prev) => {
              prev.delete('hosts');
              value.forEach((host) => {
                prev.append('hosts', host);
              });
              prev.delete('page');
              return prev;
            });
          }}
        />
        <SearchableClusterList
          defaultSelectedClusters={searchParams.getAll('clusters')}
          onClearAll={() => {
            setSearchParams((prev) => {
              prev.delete('clusters');
              prev.delete('page');
              return prev;
            });
          }}
          onChange={(value) => {
            setSearchParams((prev) => {
              prev.delete('clusters');
              value.forEach((cluster) => {
                prev.append('clusters', cluster);
              });
              prev.delete('page');
              return prev;
            });
          }}
        />
        <SearchableRegistryAccountList
          defaultSelectedRegistryAccounts={searchParams.getAll('registryAccounts')}
          onClearAll={() => {
            setSearchParams((prev) => {
              prev.delete('registryAccounts');
              prev.delete('page');
              return prev;
            });
          }}
          onChange={(value) => {
            setSearchParams((prev) => {
              prev.delete('registryAccounts');
              value.forEach((registryAccount) => {
                prev.append('registryAccounts', registryAccount);
              });
              prev.delete('page');
              return prev;
            });
          }}
        />
      </div>
      {appliedFilterCount > 0 ? (
        <div className="flex gap-2.5 mt-4 flex-wrap items-center">
          {(
            Array.from(searchParams).filter(([key]) => {
              return Object.keys(FILTER_SEARCHPARAMS).includes(key);
            }) as Array<[FILTER_SEARCHPARAMS_KEYS_ENUM, string]>
          ).map(([key, value]) => {
            if (FILTER_SEARCHPARAMS_DYNAMIC_KEYS.includes(key)) {
              return (
                <FilterBadge
                  key={`${key}-${value}`}
                  nodeType={(() => {
                    if (key === FILTER_SEARCHPARAMS_KEYS_ENUM.hosts) {
                      return 'host';
                    } else if (key === FILTER_SEARCHPARAMS_KEYS_ENUM.containerImages) {
                      return 'containerImage';
                    } else if (key === FILTER_SEARCHPARAMS_KEYS_ENUM.clusters) {
                      return 'cluster';
                    } else if (key === FILTER_SEARCHPARAMS_KEYS_ENUM.registryAccounts) {
                      return 'registryAccount';
                    } else if (key === FILTER_SEARCHPARAMS_KEYS_ENUM.containers) {
                      return 'container';
                    }
                    throw new Error('unknown key');
                  })()}
                  onRemove={onFilterRemove({ key, value })}
                  id={value}
                  label={FILTER_SEARCHPARAMS[key]}
                />
              );
            } else {
              return (
                <FilterBadge
                  key={`${key}-${value}`}
                  onRemove={onFilterRemove({ key, value })}
                  text={`${FILTER_SEARCHPARAMS[key]}: ${getPrettyNameForAppliedFilters({
                    key,
                    value,
                  })}`}
                />
              );
            }
          })}
          <Button
            variant="flat"
            color="default"
            startIcon={<TimesIcon />}
            onClick={() => {
              setSearchParams((prev) => {
                Object.keys(FILTER_SEARCHPARAMS).forEach((key) => {
                  prev.delete(key);
                });
                prev.delete('page');
                return prev;
              });
            }}
            size="sm"
          >
            Clear all
          </Button>
        </div>
      ) : null}
    </FilterWrapper>
  );
};

const ScansTable = ({
  rowSelectionState,
  setRowSelectionState,
  onTableAction,
}: {
  rowSelectionState: RowSelectionState;
  setRowSelectionState: React.Dispatch<React.SetStateAction<RowSelectionState>>;
  onTableAction: (row: ModelScanInfo, actionType: ActionEnumType) => void;
}) => {
  const { mode: theme } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useSuspenseQuery({
    ...queries.secret.scanList({
      pageSize: parseInt(searchParams.get('size') ?? String(DEFAULT_PAGE_SIZE)),
      clusters: searchParams.getAll('clusters'),
      registryAccounts: searchParams.getAll('registryAccounts'),
      containers: searchParams.getAll('containers'),
      hosts: searchParams.getAll('hosts'),
      images: searchParams.getAll('containerImages'),
      nodeTypes: searchParams.getAll('nodeType').length
        ? searchParams.getAll('nodeType')
        : ['container_image', 'container', 'host'],
      page: parseInt(searchParams.get('page') ?? '0', 10),
      order: getOrderFromSearchParams(searchParams),
      secretScanStatus: searchParams.get('secretScanStatus') as
        | SCAN_STATUS_FILTER_TYPE
        | undefined,
    }),
    keepPreviousData: true,
  });
  const [sort, setSort] = useSortingState();
  const columnHelper = createColumnHelper<ScanResult>();

  const columns = useMemo(() => {
    const columns = [
      getRowSelectionColumn(columnHelper, {
        size: 35,
        minSize: 35,
        maxSize: 35,
      }),
      columnHelper.display({
        id: 'actions',
        enableSorting: false,
        cell: (cell) => (
          <ActionDropdown
            row={cell.row.original}
            onTableAction={onTableAction}
            trigger={
              <button className="block h-4 w-4 text-text-text-and-icon rotate-90 shrink-0">
                <EllipsisIcon />
              </button>
            }
          />
        ),
        header: () => '',
        size: 35,
        minSize: 35,
        maxSize: 35,
        enableResizing: false,
      }),
      columnHelper.accessor('node_type', {
        enableSorting: false,
        cell: (info) => {
          return (
            <div className="flex items-center gap-x-2 capitalize">
              <div className="rounded-lg w-4 h-4 shrink-0">
                {IconMapForNodeType[info.getValue()]}
              </div>
              <TruncatedText text={info.getValue()?.replaceAll('_', ' ') ?? ''} />
            </div>
          );
        },
        header: () => <TruncatedText text="Type" />,
        minSize: 100,
        size: 120,
        maxSize: 130,
      }),
      columnHelper.accessor('node_name', {
        enableSorting: false,
        cell: (info) => {
          const isNeverScan = isNeverScanned(info.row.original.status);
          if (isNeverScan || isScanDeletePending(info.row.original.status)) {
            return <TruncatedText text={info.getValue()} />;
          }
          return (
            <DFLink
              to={generatePath(`/secret/scan-results/:scanId`, {
                scanId: encodeURIComponent(info.row.original.scan_id),
              })}
            >
              <TruncatedText text={info.getValue()} />
            </DFLink>
          );
        },
        header: () => 'Name',
        minSize: 230,
        size: 240,
        maxSize: 250,
      }),
      columnHelper.accessor('created_at', {
        cell: (info) => <TruncatedText text={formatMilliseconds(info.getValue())} />,
        header: () => <TruncatedText text="Timestamp" />,
        minSize: 140,
        size: 140,
        maxSize: 150,
      }),
      columnHelper.accessor('status', {
        enableSorting: true,
        cell: (info) => <ScanStatusBadge status={info.getValue()} />,
        header: () => <TruncatedText text="Scan status" />,
        minSize: 100,
        size: 110,
        maxSize: 110,
        enableResizing: true,
      }),
      columnHelper.accessor('total', {
        enableSorting: false,
        cell: (info) => (
          <div className="flex items-center justify-end tabular-nums">
            {!isScanComplete(info.row.original.status) ? (
              <div className="ml-[26px] border-b w-[8px] border-text-icon"></div>
            ) : (
              <span className="truncate">{info.getValue()}</span>
            )}
          </div>
        ),
        header: () => (
          <div className="text-right">
            <TruncatedText text="Total" />
          </div>
        ),
        minSize: 80,
        size: 80,
        maxSize: 80,
      }),
      columnHelper.accessor(SeverityEnum.Critical, {
        enableSorting: false,
        cell: (info) => {
          if (!isScanComplete(info.row.original.status)) {
            return <div className="ml-[26px] border-b w-[8px] border-text-icon"></div>;
          }
          const params = new URLSearchParams();
          params.set('severity', SeverityEnum.Critical);
          return (
            <div className="flex items-center gap-x-2 tabular-nums">
              <SeverityBadgeIcon severity={SeverityEnum.Critical} theme={theme} />
              <DFLink
                to={generatePath(`/secret/scan-results/:scanId/?${params.toString()}`, {
                  scanId: encodeURIComponent(info.row.original.scan_id),
                })}
              >
                {info.getValue()}
              </DFLink>
            </div>
          );
        },
        header: () => <TruncatedText text="Critical" />,
        minSize: 80,
        size: 80,
        maxSize: 80,
      }),
      columnHelper.accessor(SeverityEnum.High, {
        enableSorting: false,
        cell: (info) => {
          if (!isScanComplete(info.row.original.status)) {
            return <div className="ml-[26px] border-b w-[8px] border-text-icon"></div>;
          }
          const params = new URLSearchParams();
          params.set('severity', SeverityEnum.High);
          return (
            <div className="flex items-center gap-x-2 tabular-nums">
              <SeverityBadgeIcon severity={SeverityEnum.High} theme={theme} />
              <DFLink
                to={generatePath(`/secret/scan-results/:scanId/?${params.toString()}`, {
                  scanId: encodeURIComponent(info.row.original.scan_id),
                })}
              >
                {info.getValue()}
              </DFLink>
            </div>
          );
        },
        header: () => <TruncatedText text="High" />,
        minSize: 80,
        size: 80,
        maxSize: 80,
      }),
      columnHelper.accessor(SeverityEnum.Medium, {
        enableSorting: false,
        cell: (info) => {
          if (!isScanComplete(info.row.original.status)) {
            return <div className="ml-[26px] border-b w-[8px] border-text-icon"></div>;
          }
          const params = new URLSearchParams();
          params.set('severity', SeverityEnum.Medium);
          return (
            <div className="flex items-center gap-x-2 tabular-nums">
              <SeverityBadgeIcon severity={SeverityEnum.Medium} theme={theme} />
              <DFLink
                to={generatePath(`/secret/scan-results/:scanId/?${params.toString()}`, {
                  scanId: encodeURIComponent(info.row.original.scan_id),
                })}
              >
                {info.getValue()}
              </DFLink>
            </div>
          );
        },
        header: () => <TruncatedText text="Medium" />,
        minSize: 80,
        size: 80,
        maxSize: 80,
      }),
      columnHelper.accessor(SeverityEnum.Low, {
        enableSorting: false,
        cell: (info) => {
          if (!isScanComplete(info.row.original.status)) {
            return <div className="ml-[26px] border-b w-[8px] border-text-icon"></div>;
          }
          const params = new URLSearchParams();
          params.set('severity', SeverityEnum.Low);
          return (
            <div className="flex items-center gap-x-2 tabular-nums">
              <SeverityBadgeIcon severity={SeverityEnum.Low} theme={theme} />
              <DFLink
                to={generatePath(`/secret/scan-results/:scanId/?${params.toString()}`, {
                  scanId: encodeURIComponent(info.row.original.scan_id),
                })}
              >
                {info.getValue()}
              </DFLink>
            </div>
          );
        },
        header: () => <TruncatedText text="Low" />,
        minSize: 80,
        size: 80,
        maxSize: 80,
      }),
      columnHelper.accessor(SeverityEnum.Unknown, {
        enableSorting: false,
        cell: (info) => {
          if (!isScanComplete(info.row.original.status)) {
            return <div className="ml-[26px] border-b w-[8px] border-text-icon"></div>;
          }
          const params = new URLSearchParams();
          params.set('severity', SeverityEnum.Unknown);
          return (
            <div className="flex items-center gap-x-2 tabular-nums">
              <SeverityBadgeIcon severity={SeverityEnum.Unknown} theme={theme} />
              <DFLink
                to={generatePath(`/secret/scan-results/:scanId/?${params.toString()}`, {
                  scanId: encodeURIComponent(info.row.original.scan_id),
                })}
              >
                {info.getValue()}
              </DFLink>
            </div>
          );
        },
        header: () => <TruncatedText text="Unknown" />,
        minSize: 80,
        size: 80,
        maxSize: 80,
      }),
    ];

    return columns;
  }, [theme]);

  return (
    <>
      <Table
        data={data.scans}
        columns={columns}
        enableRowSelection
        rowSelectionState={rowSelectionState}
        onRowSelectionChange={setRowSelectionState}
        getRowId={(row) => {
          return JSON.stringify({
            scanId: row.scan_id,
            nodeId: row.node_id,
            nodeType: row.node_type,
            updatedAt: row.updated_at,
            scanStatus: row.status,
          });
        }}
        enablePagination
        manualPagination
        enableColumnResizing
        approximatePagination
        totalRows={data.totalRows}
        pageSize={parseInt(searchParams.get('size') ?? String(DEFAULT_PAGE_SIZE))}
        pageIndex={data.currentPage}
        onPaginationChange={(updaterOrValue) => {
          let newPageIndex = 0;
          if (typeof updaterOrValue === 'function') {
            newPageIndex = updaterOrValue({
              pageIndex: data.currentPage,
              pageSize: parseInt(searchParams.get('size') ?? String(DEFAULT_PAGE_SIZE)),
            }).pageIndex;
          } else {
            newPageIndex = updaterOrValue.pageIndex;
          }
          setSearchParams((prev) => {
            prev.set('page', String(newPageIndex));
            return prev;
          });
        }}
        enableSorting
        manualSorting
        sortingState={sort}
        onSortingChange={(updaterOrValue) => {
          let newSortState: SortingState = [];
          if (typeof updaterOrValue === 'function') {
            newSortState = updaterOrValue(sort);
          } else {
            newSortState = updaterOrValue;
          }
          setSearchParams((prev) => {
            if (!newSortState.length) {
              prev.delete('sortby');
              prev.delete('desc');
            } else {
              prev.set('sortby', String(newSortState[0].id));
              prev.set('desc', String(newSortState[0].desc));
            }
            return prev;
          });
          setSort(newSortState);
        }}
        enablePageResize
        onPageResize={(newSize) => {
          setSearchParams((prev) => {
            prev.set('size', String(newSize));
            prev.delete('page');
            return prev;
          });
        }}
      />
    </>
  );
};

const BulkActions = ({
  selectedRows,
  onBulkAction,
}: {
  selectedRows: {
    scanId: string;
    nodeId: string;
    nodeType: string;
    scanStatus: string;
  }[];
  onBulkAction: (
    data: {
      scanIdsToCancelScan: string[];
      scanIdsToDeleteScan: string[];
      nodesToStartScan: {
        nodeId: string;
        nodeType: string;
      }[];
    },
    actionType: ActionEnumType,
  ) => void;
}) => {
  const nodesToStartScan = useMemo(() => {
    return selectedRows
      .filter(
        (row) =>
          !isScanInProgress(row.scanStatus) &&
          !isScanStopping(row.scanStatus) &&
          !isScanDeletePending(row.scanStatus),
      )
      .map((row) => {
        return {
          nodeId: row.nodeId,
          nodeType: row.nodeType,
        };
      });
  }, [selectedRows]);

  const scanIdsToCancelScan = useMemo(() => {
    return selectedRows
      .filter(
        (row) => isScanInProgress(row.scanStatus) && !isScanDeletePending(row.scanStatus),
      )
      .map((row) => row.scanId);
  }, [selectedRows]);

  const scanIdsToDeleteScan = useMemo(() => {
    return selectedRows
      .filter(
        (row) => !isNeverScanned(row.scanStatus) && !isScanDeletePending(row.scanStatus),
      )
      .map((row) => row.scanId);
  }, [selectedRows]);

  return (
    <>
      <Button
        color="default"
        variant="flat"
        size="sm"
        disabled={nodesToStartScan.length == 0}
        onClick={() => {
          onBulkAction(
            {
              scanIdsToCancelScan: [],
              scanIdsToDeleteScan: [],
              nodesToStartScan,
            },
            ActionEnumType.START_SCAN,
          );
        }}
      >
        Start Scan
      </Button>
      <Button
        color="default"
        variant="flat"
        size="sm"
        disabled={scanIdsToCancelScan.length === 0}
        onClick={() =>
          onBulkAction(
            {
              scanIdsToCancelScan,
              scanIdsToDeleteScan: [],
              nodesToStartScan: [],
            },
            ActionEnumType.CANCEL_SCAN,
          )
        }
      >
        Cancel Scan
      </Button>
      <Button
        color="error"
        variant="flat"
        startIcon={<TrashLineIcon />}
        size="sm"
        disabled={scanIdsToDeleteScan.length === 0}
        onClick={() => {
          onBulkAction(
            {
              scanIdsToCancelScan: [],
              scanIdsToDeleteScan,
              nodesToStartScan: [],
            },
            ActionEnumType.DELETE_SCAN,
          );
        }}
      >
        Delete Scan
      </Button>
    </>
  );
};

const SecretScans = () => {
  const [searchParams] = useSearchParams();

  const [filtersExpanded, setFiltersExpanded] = useState(true);
  const isFetching = useIsFetching({
    queryKey: queries.secret.scanList._def,
  });

  const [rowSelectionState, setRowSelectionState] = useState<RowSelectionState>({});
  const [openStartScan, setOpenStartScan] = useState<boolean>(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showCancelScanDialog, setShowCancelScanDialog] = useState(false);

  const selectedRows = useMemo<
    {
      scanId: string;
      nodeId: string;
      nodeType: string;
      scanStatus: string;
    }[]
  >(() => {
    return Object.keys(rowSelectionState).map((item) => {
      return JSON.parse(item);
    });
  }, [rowSelectionState]);

  const [rowToAction, setRowToAction] = useState<{
    scanIdsToCancelScan: string[];
    scanIdsToDeleteScan: string[];
    nodesToStartScan: {
      nodeId: string;
      nodeType: string;
    }[];
  }>({
    scanIdsToCancelScan: [],
    scanIdsToDeleteScan: [],
    nodesToStartScan: [],
  });

  const onTableAction = (row: ModelScanInfo, actionType: string) => {
    if (actionType === ActionEnumType.DELETE_SCAN) {
      setRowToAction({
        scanIdsToCancelScan: [],
        scanIdsToDeleteScan: [row.scan_id],
        nodesToStartScan: [],
      });
      setShowDeleteDialog(true);
    } else if (actionType === ActionEnumType.CANCEL_SCAN) {
      setRowToAction({
        scanIdsToCancelScan: [row.scan_id],
        scanIdsToDeleteScan: [],
        nodesToStartScan: [],
      });
      setShowCancelScanDialog(true);
    } else if (actionType === ActionEnumType.START_SCAN) {
      setRowToAction({
        scanIdsToCancelScan: [],
        scanIdsToDeleteScan: [],
        nodesToStartScan: [
          {
            nodeId: row.node_id,
            nodeType: row.node_type,
          },
        ],
      });
      setOpenStartScan(true);
    }
  };

  const onBulkAction = (
    data: {
      scanIdsToCancelScan: string[];
      scanIdsToDeleteScan: string[];
      nodesToStartScan: {
        nodeId: string;
        nodeType: string;
      }[];
    },
    actionType: string,
  ) => {
    setRowToAction({
      scanIdsToCancelScan: data.scanIdsToCancelScan,
      scanIdsToDeleteScan: data.scanIdsToDeleteScan,
      nodesToStartScan: data.nodesToStartScan,
    });
    if (actionType === ActionEnumType.DELETE_SCAN) {
      setShowDeleteDialog(true);
    } else if (actionType === ActionEnumType.CANCEL_SCAN) {
      setShowCancelScanDialog(true);
    } else if (actionType === ActionEnumType.START_SCAN) {
      setOpenStartScan(true);
    }
  };

  return (
    <div>
      <>
        {openStartScan && (
          <ConfigureScanModal
            open={true}
            onOpenChange={() => setOpenStartScan(false)}
            onSuccess={() => setRowSelectionState({})}
            scanOptions={
              {
                showAdvancedOptions: true,
                scanType: ScanTypeEnum.SecretScan,
                data: {
                  nodes: rowToAction?.nodesToStartScan,
                },
              } as ConfigureScanModalProps['scanOptions']
            }
          />
        )}
        {showDeleteDialog && (
          <DeleteConfirmationModal
            showDialog={showDeleteDialog}
            scanIds={rowToAction?.scanIdsToDeleteScan}
            setShowDialog={setShowDeleteDialog}
            onDeleteSuccess={() => {
              setRowSelectionState({});
            }}
          />
        )}
        {showCancelScanDialog ? (
          <StopScanForm
            open={showCancelScanDialog}
            closeModal={setShowCancelScanDialog}
            scanIds={rowToAction?.scanIdsToCancelScan}
            scanType={ScanTypeEnum.SecretScan}
            onCancelScanSuccess={() => {
              setRowSelectionState({});
            }}
          />
        ) : null}
      </>
      <BreadcrumbWrapper>
        <Breadcrumb>
          <BreadcrumbLink asChild icon={<SecretsIcon />} isLink>
            <DFLink to={'/secret'} unstyled>
              Secrets
            </DFLink>
          </BreadcrumbLink>
          <BreadcrumbLink>
            <span className="inherit cursor-auto">Secret Scans</span>
          </BreadcrumbLink>
        </Breadcrumb>

        <div className="ml-2 flex items-center">
          {isFetching ? <CircleSpinner size="sm" /> : null}
        </div>
      </BreadcrumbWrapper>

      <div className="mx-4">
        <div className="h-12 flex items-center">
          <BulkActions onBulkAction={onBulkAction} selectedRows={selectedRows} />
          <Button
            variant="flat"
            className="ml-auto"
            startIcon={<FilterIcon />}
            endIcon={
              getAppliedFiltersCount(searchParams) > 0 ? (
                <Badge
                  label={String(getAppliedFiltersCount(searchParams))}
                  variant="filled"
                  size="small"
                  color="blue"
                />
              ) : null
            }
            size="sm"
            onClick={() => {
              setFiltersExpanded((prev) => !prev);
            }}
            data-testid="filterButtonIdForTable"
          >
            Filter
          </Button>
        </div>

        {filtersExpanded ? <Filters /> : null}
        <Suspense fallback={<TableSkeleton columns={7} rows={15} />}>
          <ScansTable
            rowSelectionState={rowSelectionState}
            setRowSelectionState={setRowSelectionState}
            onTableAction={onTableAction}
          />
        </Suspense>
      </div>
    </div>
  );
};

export const module = {
  action,
  element: <SecretScans />,
};
