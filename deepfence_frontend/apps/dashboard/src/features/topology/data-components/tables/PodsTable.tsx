import { useSuspenseQuery } from '@suspensive/react-query';
import { Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Badge,
  Button,
  Combobox,
  ComboboxOption,
  createColumnHelper,
  Dropdown,
  DropdownItem,
  getRowSelectionColumn,
  RowSelectionState,
  SortingState,
  Table,
  TableNoDataElement,
  TableSkeleton,
} from 'ui-components';

import { ModelPod } from '@/api/generated';
import {
  ConfigureScanModal,
  ConfigureScanModalProps,
} from '@/components/ConfigureScanModal';
import { DetailModal, useDetailModalState } from '@/components/detail-modal-stack';
import { DFLink } from '@/components/DFLink';
import { FilterBadge } from '@/components/filters/FilterBadge';
import { SearchableClusterList } from '@/components/forms/SearchableClusterList';
import { SearchableHostList } from '@/components/forms/SearchableHostList';
import { SearchableNamespaceList } from '@/components/forms/SearchableNamespaceList';
import { SearchablePodList } from '@/components/forms/SearchablePodList';
import { SearchableUserDefinedTagList } from '@/components/forms/SearchableUserDefinedTagList';
import { CaretDown } from '@/components/icons/common/CaretDown';
import { FilterIcon } from '@/components/icons/common/Filter';
import { TagOutlineIcon } from '@/components/icons/common/TagOutline';
import { TimesIcon } from '@/components/icons/common/Times';
import { ScanStatusBadge } from '@/components/ScanStatusBadge';
import { MalwareIcon } from '@/components/sideNavigation/icons/Malware';
import { SecretsIcon } from '@/components/sideNavigation/icons/Secrets';
import { VulnerabilityIcon } from '@/components/sideNavigation/icons/Vulnerability';
import { TruncatedText } from '@/components/TruncatedText';
import { FilterWrapper } from '@/features/common/FilterWrapper';
import { queries } from '@/queries';
import {
  MalwareScanNodeTypeEnum,
  ScanTypeEnum,
  SecretScanNodeTypeEnum,
  VulnerabilityScanNodeTypeEnum,
} from '@/types/common';
import {
  getOrderFromSearchParams,
  getPageFromSearchParams,
  useSortingState,
} from '@/utils/table';

const DEFAULT_PAGE_SIZE = 25;

export const PodsTable = () => {
  const [searchParams] = useSearchParams();
  const [filtersExpanded, setFiltersExpanded] = useState(true);
  const [rowSelectionState, setRowSelectionState] = useState<RowSelectionState>({});

  const selectedIds = useMemo(() => {
    return Object.keys(rowSelectionState);
  }, [rowSelectionState]);

  return (
    <div className="px-4 pb-4">
      <div className="h-12 flex items-center">
        <BulkActions nodes={selectedIds} />
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
      <Suspense
        fallback={<TableSkeleton rows={DEFAULT_PAGE_SIZE} columns={4} size="default" />}
      >
        <DataTable
          rowSelectionState={rowSelectionState}
          setRowSelectionState={setRowSelectionState}
        />
      </Suspense>
    </div>
  );
};

enum FILTER_SEARCHPARAMS_KEYS_ENUM {
  hosts = 'hosts',
  clusters = 'clusters',
  kubernetesStatus = 'kubernetesStatus',
  pods = 'pods',
  namespaces = 'namespaces',
  userDefinedTags = 'userDefinedTags',
}

const FILTER_SEARCHPARAMS_DYNAMIC_KEYS = [
  FILTER_SEARCHPARAMS_KEYS_ENUM.hosts,
  FILTER_SEARCHPARAMS_KEYS_ENUM.clusters,
  FILTER_SEARCHPARAMS_KEYS_ENUM.pods,
];

const FILTER_SEARCHPARAMS: Record<FILTER_SEARCHPARAMS_KEYS_ENUM, string> = {
  hosts: 'Host',
  clusters: 'Cluster',
  kubernetesStatus: 'Kubernetes status',
  pods: 'Pod',
  namespaces: 'Namespace',
  userDefinedTags: 'Custom tags',
};

const getAppliedFiltersCount = (searchParams: URLSearchParams) => {
  return Object.keys(FILTER_SEARCHPARAMS).reduce((prev, curr) => {
    return prev + searchParams.getAll(curr).length;
  }, 0);
};

const KUBERNETES_STATUSES = [
  {
    label: 'Running',
    value: 'Running',
  },
  {
    label: 'Not Running',
    value: 'Not Running',
  },
];
function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [kubernetesStatusSearchText, setKubernetesStatusSearchText] = useState('');
  const appliedFilterCount = getAppliedFiltersCount(searchParams);
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

  return (
    <FilterWrapper>
      <div className="flex gap-2">
        <SearchablePodList
          defaultSelectedPods={searchParams.getAll('pods')}
          onClearAll={() => {
            setSearchParams((prev) => {
              prev.delete('pods');
              prev.delete('page');
              return prev;
            });
          }}
          onChange={(value) => {
            setSearchParams((prev) => {
              prev.delete('pods');
              value.forEach((pod) => {
                prev.append('pods', pod);
              });
              prev.delete('page');
              return prev;
            });
          }}
        />
        <Combobox
          value={KUBERNETES_STATUSES.find((status) => {
            return status.value === searchParams.get('kubernetesStatus');
          })}
          onQueryChange={(query) => {
            setKubernetesStatusSearchText(query);
          }}
          onChange={(value) => {
            setSearchParams((prev) => {
              if (value) {
                prev.set('kubernetesStatus', value.value);
              } else {
                prev.delete('kubernetesStatus');
              }
              prev.delete('page');
              return prev;
            });
          }}
          getDisplayValue={() => FILTER_SEARCHPARAMS['kubernetesStatus']}
        >
          {KUBERNETES_STATUSES.filter((item) => {
            if (!kubernetesStatusSearchText.length) return true;
            return item.label
              .toLowerCase()
              .includes(kubernetesStatusSearchText.toLowerCase());
          }).map((item) => {
            return (
              <ComboboxOption key={item.value} value={item}>
                {item.label}
              </ComboboxOption>
            );
          })}
        </Combobox>
        <SearchableHostList
          valueKey="hostName"
          showOnlyKubernetesHosts
          scanType={ScanTypeEnum.VulnerabilityScan}
          defaultSelectedHosts={searchParams.getAll('hosts')}
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
          valueKey="nodeName"
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
        <SearchableNamespaceList
          nodeType="pod"
          defaultSelectedNamespaces={searchParams.getAll('namespaces')}
          onClearAll={() => {
            setSearchParams((prev) => {
              prev.delete('namespaces');
              prev.delete('page');
              return prev;
            });
          }}
          onChange={(value) => {
            setSearchParams((prev) => {
              prev.delete('namespaces');
              value.forEach((pod) => {
                prev.append('namespaces', pod);
              });
              prev.delete('page');
              return prev;
            });
          }}
        />
        <SearchableUserDefinedTagList
          defaultSelectedTags={searchParams.getAll('userDefinedTags')}
          onChange={(value) => {
            setSearchParams((prev) => {
              prev.delete('userDefinedTags');
              value.forEach((tag) => {
                prev.append('userDefinedTags', tag);
              });
              prev.delete('page');
              return prev;
            });
          }}
          resourceType="pod"
          triggerVariant="button"
          onClearAll={() => {
            setSearchParams((prev) => {
              prev.delete('userDefinedTags');
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
                    } else if (key === FILTER_SEARCHPARAMS_KEYS_ENUM.clusters) {
                      return 'cluster';
                    } else if (key === FILTER_SEARCHPARAMS_KEYS_ENUM.pods) {
                      return 'pod';
                    }
                    throw new Error('unknown key');
                  })()}
                  onRemove={onFilterRemove({ key, value })}
                  id={value}
                  label={FILTER_SEARCHPARAMS[key]}
                />
              );
            }
            return (
              <FilterBadge
                key={`${key}-${value}`}
                onRemove={onFilterRemove({ key, value })}
                text={value}
                label={FILTER_SEARCHPARAMS[key]}
              />
            );
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
}

function useSearchPodsWithPagination() {
  const [searchParams] = useSearchParams();
  return useSuspenseQuery({
    ...queries.search.podsWithPagination({
      page: getPageFromSearchParams(searchParams),
      pageSize: parseInt(searchParams.get('size') ?? String(DEFAULT_PAGE_SIZE)),
      order: getOrderFromSearchParams(searchParams),
      hosts: searchParams.getAll('hosts'),
      clusterNames: searchParams.getAll('clusters'),
      pods: searchParams.getAll('pods'),
      kubernetesStatus: searchParams.get('kubernetesStatus') ?? undefined,
      kubernetesNamespace: searchParams.getAll('namespaces'),
      userDefinedTags: searchParams.getAll('userDefinedTags'),
    }),
    keepPreviousData: true,
  });
}

const BulkActions = ({ nodes }: { nodes: string[] }) => {
  const [scanOptions, setScanOptions] =
    useState<ConfigureScanModalProps['scanOptions']>();

  return (
    <>
      <Dropdown
        triggerAsChild
        align={'start'}
        content={
          <>
            <DropdownItem
              onSelect={(e) => {
                e.preventDefault();
                setScanOptions({
                  showAdvancedOptions: nodes.length === 1,
                  scanType: ScanTypeEnum.VulnerabilityScan,
                  data: {
                    nodes: nodes.map((nodeId) => {
                      return {
                        nodeId,
                        nodeType: VulnerabilityScanNodeTypeEnum.pod,
                      };
                    }),
                  },
                });
              }}
              icon={<VulnerabilityIcon />}
            >
              Start Vulnerability Scan
            </DropdownItem>
            <DropdownItem
              onSelect={(e) => {
                e.preventDefault();
                setScanOptions({
                  showAdvancedOptions: nodes.length === 1,
                  scanType: ScanTypeEnum.SecretScan,
                  data: {
                    nodes: nodes.map((nodeId) => {
                      return {
                        nodeId,
                        nodeType: SecretScanNodeTypeEnum.pod,
                      };
                    }),
                  },
                });
              }}
              icon={<SecretsIcon />}
            >
              Start Secret Scan
            </DropdownItem>
            <DropdownItem
              onSelect={(e) => {
                e.preventDefault();
                setScanOptions({
                  showAdvancedOptions: nodes.length === 1,
                  scanType: ScanTypeEnum.MalwareScan,
                  data: {
                    nodes: nodes.map((nodeId) => {
                      return {
                        nodeId,
                        nodeType: MalwareScanNodeTypeEnum.pod,
                      };
                    }),
                  },
                });
              }}
              icon={<MalwareIcon />}
            >
              Start Malware Scan
            </DropdownItem>
          </>
        }
      >
        <Button
          color="default"
          variant="flat"
          size="sm"
          endIcon={<CaretDown />}
          disabled={!nodes.length}
        >
          Actions
        </Button>
      </Dropdown>
      {!!scanOptions && (
        <ConfigureScanModal
          open
          onOpenChange={() => setScanOptions(undefined)}
          scanOptions={scanOptions}
        />
      )}
    </>
  );
};

const DataTable = ({
  rowSelectionState,
  setRowSelectionState,
}: {
  rowSelectionState: RowSelectionState;
  setRowSelectionState: React.Dispatch<React.SetStateAction<RowSelectionState>>;
}) => {
  const { data } = useSearchPodsWithPagination();
  const columnHelper = createColumnHelper<ModelPod>();

  const [sort, setSort] = useSortingState();
  const [searchParams, setSearchParams] = useSearchParams();
  const { detailModalItem, setDetailModalItem } = useDetailModalState();

  const columns = useMemo(
    () => [
      getRowSelectionColumn(columnHelper, {
        minSize: 50,
        size: 50,
        maxSize: 80,
      }),
      columnHelper.accessor('pod_name', {
        cell: (info) => {
          return (
            <div className="flex flex-col gap-1 items-start text-start py-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="truncate w-full"
              >
                <DFLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setDetailModalItem({
                      nodeId: info.row.original.node_id!,
                      kind: 'pod',
                    });
                  }}
                  className="text-left"
                >
                  <TruncatedText text={info.getValue() || '-'} />
                </DFLink>
              </button>
              {info.row.original?.tags?.length ? (
                <div className="flex gap-2 items-center flex-wrap">
                  {info.row.original.tags.map((tag) => {
                    return (
                      <Badge
                        startIcon={<TagOutlineIcon />}
                        key={tag}
                        label={tag}
                        variant="filled"
                        color="info"
                        size="small"
                      />
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        },
        header: () => <TruncatedText text="Pod name" />,
        minSize: 130,
        size: 140,
        maxSize: 145,
      }),
      columnHelper.accessor('kubernetes_cluster_name', {
        cell: (info) => {
          return <TruncatedText text={info.getValue()} />;
        },
        header: () => <TruncatedText text="Cluster name" />,
        minSize: 80,
        size: 80,
        maxSize: 90,
      }),
      columnHelper.accessor('kubernetes_namespace', {
        cell: (info) => {
          return <TruncatedText text={info.getValue()} />;
        },
        header: () => <TruncatedText text="Kubernetes namespace" />,
        minSize: 100,
        size: 105,
        maxSize: 110,
      }),
      columnHelper.accessor('kubernetes_state', {
        cell: (info) => {
          return <TruncatedText text={info.getValue()} />;
        },
        header: () => <TruncatedText text="Kubernetes state" />,
        minSize: 80,
        size: 80,
        maxSize: 90,
      }),
      columnHelper.accessor('vulnerability_scan_status', {
        cell: (info) => {
          return <ScanStatusBadge status={info.getValue() || ''} />;
        },
        header: () => <TruncatedText text="Vulnerability scan status" />,
        minSize: 80,
        size: 80,
        maxSize: 90,
      }),
      columnHelper.accessor('secret_scan_status', {
        cell: (info) => {
          return <ScanStatusBadge status={info.getValue() || ''} />;
        },
        header: () => <TruncatedText text="Secret scan status" />,
        minSize: 80,
        size: 80,
        maxSize: 90,
      }),
      columnHelper.accessor('malware_scan_status', {
        cell: (info) => {
          return <ScanStatusBadge status={info.getValue() || ''} />;
        },
        header: () => <TruncatedText text="Malware scan status" />,
        minSize: 80,
        size: 80,
        maxSize: 90,
      }),
    ],
    [],
  );

  return (
    <>
      <Table
        data={data.pods ?? []}
        columns={columns}
        noDataElement={<TableNoDataElement text="No pods are connected" />}
        size="default"
        enableColumnResizing
        enablePagination
        manualPagination
        enableRowSelection
        rowSelectionState={rowSelectionState}
        onRowSelectionChange={setRowSelectionState}
        approximatePagination
        getRowId={(row) => row.node_id}
        totalRows={data.totalRows}
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
        pageSize={parseInt(searchParams.get('size') ?? String(DEFAULT_PAGE_SIZE))}
        enablePageResize
        onPageResize={(newSize) => {
          setSearchParams((prev) => {
            prev.set('size', String(newSize));
            prev.delete('page');
            return prev;
          });
        }}
      />
      {detailModalItem ? (
        <DetailModal
          itemInfo={detailModalItem}
          onItemClose={() => {
            setDetailModalItem(null);
          }}
        />
      ) : null}
    </>
  );
};
