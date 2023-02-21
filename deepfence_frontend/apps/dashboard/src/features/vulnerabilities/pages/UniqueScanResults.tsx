import cx from 'classnames';
import { capitalize, truncate } from 'lodash-es';
import { Suspense, useMemo, useRef, useState } from 'react';
import { RefObject } from 'react';
import { FaHistory } from 'react-icons/fa';
import { FiFilter } from 'react-icons/fi';
import { HiArrowSmLeft, HiDotsVertical, HiExternalLink } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
import {
  Await,
  LoaderFunctionArgs,
  useLoaderData,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Form } from 'react-router-dom';
import {
  Badge,
  Button,
  Card,
  createColumnHelper,
  getRowSelectionColumn,
  Table,
  TableSkeleton,
} from 'ui-components';
import { Checkbox, ModalHeader, SlidingModal } from 'ui-components';

import { getVulnerabilityApiClient } from '@/api/api';
import { ApiDocsBadRequestResponse } from '@/api/generated';
import { DFLink } from '@/components/DFLink';
import { VulnerabilityIcon } from '@/components/sideNavigation/icons/Vulnerability';
import { MostExploitableChart } from '@/features/vulnerabilities/components/landing/MostExploitableChart';
import { VulnerabilityDetails } from '@/features/vulnerabilities/components/unique-vulnerabilities/VulnerabilityDetails';
import { Mode, useTheme } from '@/theme/ThemeContext';
import { ApiError, makeRequest } from '@/utils/api';
import { formatMilliseconds } from '@/utils/date';
import { typedDefer, TypedDeferredData } from '@/utils/router';

export interface FocusableElement {
  focus(options?: FocusOptions): void;
}

type ScanResult = {
  id: string;
  package: string;
  severity: string;
  description: string;
  link: string;
  action?: null;
};

export type LoaderDataType = {
  error?: string;
  message?: string;
  data?: ScanResult[];
};

async function getScans(scanId: string): Promise<ScanResult[]> {
  const result = await makeRequest({
    apiFunction: getVulnerabilityApiClient().resultVulnerabilityScan,
    apiArgs: [
      {
        modelScanResultsReq: {
          fields_filter: {
            contains_filter: { filter_in: {} },
            match_filter: { filter_in: {} },
            order_filter: { order_field: '' },
          },
          scan_id: scanId,
          window: {
            offset: 0,
            size: 1000000,
          },
        },
      },
    ],
    errorHandler: async (r) => {
      const error = new ApiError<LoaderDataType>({});
      if (r.status === 400) {
        const modelResponse: ApiDocsBadRequestResponse = await r.json();
        return error.set({
          message: modelResponse.message,
        });
      }
    },
  });

  if (ApiError.isApiError(result)) {
    throw result.value();
  }

  if (result === null) {
    return [];
  }
  return (
    result?.vulnerabilities?.map((res) => {
      return {
        id: res.cve_id,
        package: res.cve_caused_by_package,
        severity: res.cve_severity,
        description: res.cve_description,
        link: res.cve_link,
      };
    }) ?? []
  );
}

const loader = async ({
  params,
}: LoaderFunctionArgs): Promise<TypedDeferredData<LoaderDataType>> => {
  const nodeType = params?.scanId ?? '';

  return typedDefer({
    data: getScans(nodeType),
  });
};

const FilterHeader = () => {
  return (
    <ModalHeader>
      <div className="flex gap-x-2 items-center p-4">
        <span className="font-medium text-lg">Filters</span>
      </div>
    </ModalHeader>
  );
};

const ScanResultFilterModal = ({
  showFilter,
  elementToFocusOnClose,
  setShowFilter,
}: {
  elementToFocusOnClose: RefObject<FocusableElement> | null;
  showFilter: boolean;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <SlidingModal
      header={<FilterHeader />}
      open={showFilter}
      onOpenChange={() => setShowFilter(false)}
      elementToFocusOnCloseRef={elementToFocusOnClose}
      width={'w-[350px]'}
    >
      <div className="dark:text-white p-4">
        <Form className="flex flex-col gap-y-6">
          <fieldset>
            <legend className="text-sm font-medium">Severity</legend>
            <div className="flex gap-x-4">
              <Checkbox name="critical" label="Critical" />
              <Checkbox name="high" label="High" />
              <Checkbox name="medium" label="Medium" />
              <Checkbox name="low" label="Low" />
            </div>
          </fieldset>
        </Form>
      </div>
    </SlidingModal>
  );
};

const CVETable = ({ data }: { data?: any[] }) => {
  useLoaderData();
  const [showDetails, setShowDetails] = useState(false);
  const columnHelper = createColumnHelper<ScanResult>();
  const elementToFocusOnClose = useRef(null);

  const columns = useMemo(() => {
    const columns = [
      getRowSelectionColumn(columnHelper, {
        size: 0,
        minSize: 0,
        maxSize: 0,
      }),

      columnHelper.accessor('id', {
        enableSorting: false,
        cell: (info) => (
          <DFLink
            to="#"
            onClick={() => {
              setShowDetails(true);
            }}
            className="flex items-center gap-x-2"
          >
            <div className="p-2 bg-gray-100 dark:bg-gray-500/10 rounded-lg">
              <div className="w-5 h-5">
                <VulnerabilityIcon />
              </div>
            </div>
            {info.getValue()}
          </DFLink>
        ),
        header: () => 'CVE ID',
        minSize: 200,
        size: 200,
        maxSize: 250,
      }),
      columnHelper.accessor('package', {
        enableSorting: true,
        cell: (info) => info.getValue(),
        header: () => 'Package',
        minSize: 100,
        size: 250,
        maxSize: 250,
      }),
      columnHelper.accessor('severity', {
        enableSorting: false,
        cell: (info) => (
          <Badge
            label={info.getValue()}
            className={cx({
              'bg-red-100 dark:bg-red-600/10 text-red-600 dark:text-red-400':
                info.getValue().toLowerCase() === 'critical',
              'bg-pink-100 dark:bg-pink-600/10 text-pink-600 dark:text-pink-400':
                info.getValue().toLowerCase() === 'high',
              'bg-blue-100 dark:bg-blue-600/10 text-blue-600 dark:text-blue-400':
                info.getValue().toLowerCase() === 'medium',
              'bg-yellow-300/20 dark:bg-yellow-400/10 text-yellow-500 dark:text-yellow-400':
                info.getValue().toLowerCase() === 'low',
            })}
            size="sm"
          />
        ),
        header: () => 'Severity',
        minSize: 60,
        size: 80,
        maxSize: 80,
      }),
      columnHelper.accessor('description', {
        enableSorting: false,
        cell: (info) => truncate(info.getValue(), { length: 40 }) || 'N/A',
        header: () => 'Description',
        minSize: 300,
        size: 400,
        maxSize: 400,
      }),
      columnHelper.accessor('link', {
        enableSorting: false,
        cell: () => (
          <DFLink to="#">
            <IconContext.Provider
              value={{
                className: 'w-4 h-4',
              }}
            >
              <HiExternalLink />
            </IconContext.Provider>
          </DFLink>
        ),
        header: () => 'Link',
        minSize: 30,
        size: 50,
        maxSize: 50,
      }),
      columnHelper.accessor('action', {
        enableSorting: false,
        cell: () => (
          <IconContext.Provider value={{ className: 'text-gray-700 dark:text-gray-400' }}>
            <HiDotsVertical />
          </IconContext.Provider>
        ),
        header: () => '',
        minSize: 10,
        size: 10,
        maxSize: 10,
      }),
    ];

    return columns;
  }, []);

  return (
    <>
      <VulnerabilityDetails
        showDetails={showDetails}
        setShowFilter={setShowDetails}
        elementToFocusOnClose={elementToFocusOnClose.current}
      />
      <Suspense
        fallback={
          <div className="mt-16">
            <TableSkeleton columns={10} rows={10} size={'md'} />
          </div>
        }
      >
        <Await resolve={data ?? []}>
          {(resolvedData: ScanResult[]) => {
            return (
              <Table
                size="sm"
                data={resolvedData ?? []}
                columns={columns}
                enableRowSelection
                enableSorting
                enablePagination
                manualPagination
                // totalRows={totalRows}
                // pageSize={pageSize}
                // pageIndex={pageIndex}
                // onPaginationChange={setPagination}
              />
            );
          }}
        </Await>
      </Suspense>
    </>
  );
};

const HeaderComponent = ({
  scanId,
  nodeType,
  timestamp,
  elementToFocusOnClose,
  setShowFilter,
}: {
  scanId: string;
  nodeType: string;
  timestamp: number;
  elementToFocusOnClose: React.MutableRefObject<null>;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex p-2 pl-2 w-full items-center shadow bg-white dark:bg-gray-800">
      <DFLink
        to={`/vulnerability/scan-results?nodeType=${nodeType}`}
        className="flex hover:no-underline items-center justify-center  mr-2"
      >
        <IconContext.Provider
          value={{
            className: 'w-5 h-5 text-blue-600 dark:text-blue-500 ',
          }}
        >
          <HiArrowSmLeft />
        </IconContext.Provider>
      </DFLink>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
        VULNERABILITY SCAN RESULTS - {nodeType.toUpperCase()} / {scanId}
      </span>
      <div className="ml-auto flex items-center gap-x-4">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 dark:text-gray-200">
            {formatMilliseconds(timestamp)}
          </span>
          <span className="text-gray-400 text-[10px]">Last scan</span>
        </div>
        <Button
          className="ml-auto bg-blue-100 dark:bg-blue-500/10"
          size="xs"
          color="normal"
          onClick={() => {
            setShowFilter(true);
          }}
        >
          <IconContext.Provider
            value={{
              className: 'w-4 h-4',
            }}
          >
            <FaHistory />
          </IconContext.Provider>
        </Button>

        <div className="relative">
          <span className="absolute left-0 top-0 inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
          <Button
            className="ml-auto bg-blue-100 dark:bg-blue-500/10"
            size="xs"
            color="normal"
            ref={elementToFocusOnClose}
            onClick={() => {
              setShowFilter(true);
            }}
          >
            <IconContext.Provider
              value={{
                className: 'w-4 h-4',
              }}
            >
              <FiFilter />
            </IconContext.Provider>
          </Button>
        </div>
      </div>
    </div>
  );
};
const SeverityCountComponent = ({
  theme,
  data,
}: {
  theme: Mode;
  data: {
    total: number;
    severityCounts: Record<string, number>;
  };
}) => {
  return (
    <Card className="p-4 grid grid-flow-row-dense gap-y-8">
      <div className="grid grid-flow-col-dense gap-x-4">
        <div className="bg-red-100 dark:bg-red-500/10 rounded-lg flex items-center justify-center">
          <div className="w-14 h-14 text-red-500 dark:text-red-400">
            <VulnerabilityIcon />
          </div>
        </div>
        <div>
          <h4 className="text-md font-semibold text-gray-900 dark:text-gray-200 tracking-wider">
            Total vulnerabilities
          </h4>
          <div className="mt-2">
            <span className="text-2xl text-gray-900 dark:text-gray-200">
              {data.total}
            </span>
            <h5 className="text-xs text-gray-500 dark:text-gray-200 mb-2">Total count</h5>
            <div>
              <span className="text-sm text-gray-900 dark:text-gray-200">{0}</span>
              <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                Active containers
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[220px]">
        <MostExploitableChart theme={theme} />
      </div>
      <div>
        {Object.keys(data.severityCounts).map((key: string) => {
          return (
            <div key={key} className="flex items-center gap-2 p-1">
              <div
                className={cx('h-3 w-3 rounded-full', {
                  'bg-red-400 dark:bg-red-500': key.toLowerCase() === 'critical',
                  'bg-pink-400 dark:bg-pink-500': key.toLowerCase() === 'high',
                  'bg-blue-400 dark:bg-blue-500': key.toLowerCase() === 'medium',
                  'bg-yellow-400 dark:bg-yellow-500': key.toLowerCase() === 'low',
                })}
              />
              <span className="text-sm text-gray-500 dark:text-gray-200">
                {capitalize(key)}
              </span>
              <span className={cx('text-sm text-gray-900 dark:text-gray-200 ml-auto')}>
                {data.severityCounts[key]}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
const UniqueScanResults = () => {
  const loaderData = useLoaderData() as LoaderDataType;
  const params = useParams() as {
    scanId: string;
    nodeType: string;
  };
  const elementToFocusOnClose = useRef(null);
  const [showFilter, setShowFilter] = useState(false);
  const { mode } = useTheme();
  const location = useLocation();

  return (
    <>
      <ScanResultFilterModal
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        elementToFocusOnClose={elementToFocusOnClose.current}
      />
      <HeaderComponent
        scanId={params.scanId}
        nodeType={params.nodeType}
        elementToFocusOnClose={elementToFocusOnClose}
        setShowFilter={setShowFilter}
        timestamp={location.state.updatedAt}
      />
      <div className="grid grid-cols-[400px_1fr] p-2 gap-x-2">
        <div className="self-start grid gap-y-2">
          <SeverityCountComponent
            theme={mode}
            data={{
              total: location.state.severityCounts.total,
              severityCounts: {
                critical: location.state.severityCounts.critical,
                medium: location.state.severityCounts.medium,
                high: location.state.severityCounts.high,
                low: location.state.severityCounts.low,
              },
            }}
          />
        </div>
        <div>
          <CVETable data={loaderData.data} />
        </div>
      </div>
    </>
  );
};

export const module = {
  loader,
  element: <UniqueScanResults />,
};
