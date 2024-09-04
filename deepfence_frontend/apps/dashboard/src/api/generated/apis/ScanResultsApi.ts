/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: v3.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ApiDocsBadRequestResponse,
  ApiDocsFailureResponse,
  ModelBulkDeleteScansRequest,
  ModelDownloadScanResultsResponse,
  ModelNodesInScanResultRequest,
  ModelScanResultBasicNode,
  ModelScanResultsActionRequest,
  ModelScanResultsMaskRequest,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    ModelBulkDeleteScansRequestFromJSON,
    ModelBulkDeleteScansRequestToJSON,
    ModelDownloadScanResultsResponseFromJSON,
    ModelDownloadScanResultsResponseToJSON,
    ModelNodesInScanResultRequestFromJSON,
    ModelNodesInScanResultRequestToJSON,
    ModelScanResultBasicNodeFromJSON,
    ModelScanResultBasicNodeToJSON,
    ModelScanResultsActionRequestFromJSON,
    ModelScanResultsActionRequestToJSON,
    ModelScanResultsMaskRequestFromJSON,
    ModelScanResultsMaskRequestToJSON,
} from '../models';

export interface BulkDeleteScansRequest {
    modelBulkDeleteScansRequest?: ModelBulkDeleteScansRequest;
}

export interface DeleteScanResultRequest {
    modelScanResultsActionRequest?: ModelScanResultsActionRequest;
}

export interface DeleteScanResultsForScanIDRequest {
    scanId: string;
    scanType: DeleteScanResultsForScanIDScanTypeEnum;
}

export interface DownloadScanResultsRequest {
    scanId: string;
    scanType: DownloadScanResultsScanTypeEnum;
}

export interface GetAllNodesInScanResultsRequest {
    modelNodesInScanResultRequest?: ModelNodesInScanResultRequest;
}

export interface MaskScanResultRequest {
    modelScanResultsMaskRequest?: ModelScanResultsMaskRequest;
}

export interface NotifyScanResultRequest {
    modelScanResultsActionRequest?: ModelScanResultsActionRequest;
}

export interface UnmaskScanResultRequest {
    modelScanResultsMaskRequest?: ModelScanResultsMaskRequest;
}

/**
 * ScanResultsApi - interface
 * 
 * @export
 * @interface ScanResultsApiInterface
 */
export interface ScanResultsApiInterface {
    /**
     * Bulk delete scans along with their results for a particular scan type
     * @summary Bulk Delete Scans
     * @param {ModelBulkDeleteScansRequest} [modelBulkDeleteScansRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScanResultsApiInterface
     */
    bulkDeleteScansRaw(requestParameters: BulkDeleteScansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Bulk delete scans along with their results for a particular scan type
     * Bulk Delete Scans
     */
    bulkDeleteScans(requestParameters: BulkDeleteScansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Delete selected scan results
     * @summary Delete selected scan results
     * @param {ModelScanResultsActionRequest} [modelScanResultsActionRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScanResultsApiInterface
     */
    deleteScanResultRaw(requestParameters: DeleteScanResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete selected scan results
     * Delete selected scan results
     */
    deleteScanResult(requestParameters: DeleteScanResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Delete all scan results for a scan id
     * @summary Delete all scan results for a scan id
     * @param {string} scanId 
     * @param {'SecretScan' | 'VulnerabilityScan' | 'MalwareScan' | 'ComplianceScan' | 'CloudComplianceScan'} scanType 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScanResultsApiInterface
     */
    deleteScanResultsForScanIDRaw(requestParameters: DeleteScanResultsForScanIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete all scan results for a scan id
     * Delete all scan results for a scan id
     */
    deleteScanResultsForScanID(requestParameters: DeleteScanResultsForScanIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Download scan results
     * @summary Download Scans Results
     * @param {string} scanId 
     * @param {'SecretScan' | 'VulnerabilityScan' | 'MalwareScan' | 'ComplianceScan' | 'CloudComplianceScan'} scanType 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScanResultsApiInterface
     */
    downloadScanResultsRaw(requestParameters: DownloadScanResultsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelDownloadScanResultsResponse>>;

    /**
     * Download scan results
     * Download Scans Results
     */
    downloadScanResults(requestParameters: DownloadScanResultsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelDownloadScanResultsResponse>;

    /**
     * Get all nodes in given scan result ids
     * @summary Get all nodes in given scan result ids
     * @param {ModelNodesInScanResultRequest} [modelNodesInScanResultRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScanResultsApiInterface
     */
    getAllNodesInScanResultsRaw(requestParameters: GetAllNodesInScanResultsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelScanResultBasicNode>>>;

    /**
     * Get all nodes in given scan result ids
     * Get all nodes in given scan result ids
     */
    getAllNodesInScanResults(requestParameters: GetAllNodesInScanResultsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelScanResultBasicNode>>;

    /**
     * Mask scan results
     * @summary Mask Scans Results
     * @param {ModelScanResultsMaskRequest} [modelScanResultsMaskRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScanResultsApiInterface
     */
    maskScanResultRaw(requestParameters: MaskScanResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Mask scan results
     * Mask Scans Results
     */
    maskScanResult(requestParameters: MaskScanResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Notify scan results in connected integration channels
     * @summary Notify Scans Results
     * @param {ModelScanResultsActionRequest} [modelScanResultsActionRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScanResultsApiInterface
     */
    notifyScanResultRaw(requestParameters: NotifyScanResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Notify scan results in connected integration channels
     * Notify Scans Results
     */
    notifyScanResult(requestParameters: NotifyScanResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Unmask scan results
     * @summary Unmask Scans Results
     * @param {ModelScanResultsMaskRequest} [modelScanResultsMaskRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScanResultsApiInterface
     */
    unmaskScanResultRaw(requestParameters: UnmaskScanResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Unmask scan results
     * Unmask Scans Results
     */
    unmaskScanResult(requestParameters: UnmaskScanResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class ScanResultsApi extends runtime.BaseAPI implements ScanResultsApiInterface {

    /**
     * Bulk delete scans along with their results for a particular scan type
     * Bulk Delete Scans
     */
    async bulkDeleteScansRaw(requestParameters: BulkDeleteScansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scans/bulk/delete`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelBulkDeleteScansRequestToJSON(requestParameters.modelBulkDeleteScansRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Bulk delete scans along with their results for a particular scan type
     * Bulk Delete Scans
     */
    async bulkDeleteScans(requestParameters: BulkDeleteScansRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.bulkDeleteScansRaw(requestParameters, initOverrides);
    }

    /**
     * Delete selected scan results
     * Delete selected scan results
     */
    async deleteScanResultRaw(requestParameters: DeleteScanResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/results/action/delete`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanResultsActionRequestToJSON(requestParameters.modelScanResultsActionRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete selected scan results
     * Delete selected scan results
     */
    async deleteScanResult(requestParameters: DeleteScanResultRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteScanResultRaw(requestParameters, initOverrides);
    }

    /**
     * Delete all scan results for a scan id
     * Delete all scan results for a scan id
     */
    async deleteScanResultsForScanIDRaw(requestParameters: DeleteScanResultsForScanIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.scanId === null || requestParameters.scanId === undefined) {
            throw new runtime.RequiredError('scanId','Required parameter requestParameters.scanId was null or undefined when calling deleteScanResultsForScanID.');
        }

        if (requestParameters.scanType === null || requestParameters.scanType === undefined) {
            throw new runtime.RequiredError('scanType','Required parameter requestParameters.scanType was null or undefined when calling deleteScanResultsForScanID.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/{scan_type}/{scan_id}`.replace(`{${"scan_id"}}`, encodeURIComponent(String(requestParameters.scanId))).replace(`{${"scan_type"}}`, encodeURIComponent(String(requestParameters.scanType))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete all scan results for a scan id
     * Delete all scan results for a scan id
     */
    async deleteScanResultsForScanID(requestParameters: DeleteScanResultsForScanIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteScanResultsForScanIDRaw(requestParameters, initOverrides);
    }

    /**
     * Download scan results
     * Download Scans Results
     */
    async downloadScanResultsRaw(requestParameters: DownloadScanResultsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelDownloadScanResultsResponse>> {
        if (requestParameters.scanId === null || requestParameters.scanId === undefined) {
            throw new runtime.RequiredError('scanId','Required parameter requestParameters.scanId was null or undefined when calling downloadScanResults.');
        }

        if (requestParameters.scanType === null || requestParameters.scanType === undefined) {
            throw new runtime.RequiredError('scanType','Required parameter requestParameters.scanType was null or undefined when calling downloadScanResults.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/{scan_type}/{scan_id}/download`.replace(`{${"scan_id"}}`, encodeURIComponent(String(requestParameters.scanId))).replace(`{${"scan_type"}}`, encodeURIComponent(String(requestParameters.scanType))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelDownloadScanResultsResponseFromJSON(jsonValue));
    }

    /**
     * Download scan results
     * Download Scans Results
     */
    async downloadScanResults(requestParameters: DownloadScanResultsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelDownloadScanResultsResponse> {
        const response = await this.downloadScanResultsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all nodes in given scan result ids
     * Get all nodes in given scan result ids
     */
    async getAllNodesInScanResultsRaw(requestParameters: GetAllNodesInScanResultsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelScanResultBasicNode>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/nodes-in-result`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelNodesInScanResultRequestToJSON(requestParameters.modelNodesInScanResultRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelScanResultBasicNodeFromJSON));
    }

    /**
     * Get all nodes in given scan result ids
     * Get all nodes in given scan result ids
     */
    async getAllNodesInScanResults(requestParameters: GetAllNodesInScanResultsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelScanResultBasicNode>> {
        const response = await this.getAllNodesInScanResultsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Mask scan results
     * Mask Scans Results
     */
    async maskScanResultRaw(requestParameters: MaskScanResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/results/action/mask`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanResultsMaskRequestToJSON(requestParameters.modelScanResultsMaskRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Mask scan results
     * Mask Scans Results
     */
    async maskScanResult(requestParameters: MaskScanResultRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.maskScanResultRaw(requestParameters, initOverrides);
    }

    /**
     * Notify scan results in connected integration channels
     * Notify Scans Results
     */
    async notifyScanResultRaw(requestParameters: NotifyScanResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/results/action/notify`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanResultsActionRequestToJSON(requestParameters.modelScanResultsActionRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Notify scan results in connected integration channels
     * Notify Scans Results
     */
    async notifyScanResult(requestParameters: NotifyScanResultRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.notifyScanResultRaw(requestParameters, initOverrides);
    }

    /**
     * Unmask scan results
     * Unmask Scans Results
     */
    async unmaskScanResultRaw(requestParameters: UnmaskScanResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/results/action/unmask`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanResultsMaskRequestToJSON(requestParameters.modelScanResultsMaskRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Unmask scan results
     * Unmask Scans Results
     */
    async unmaskScanResult(requestParameters: UnmaskScanResultRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.unmaskScanResultRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const DeleteScanResultsForScanIDScanTypeEnum = {
    SecretScan: 'SecretScan',
    VulnerabilityScan: 'VulnerabilityScan',
    MalwareScan: 'MalwareScan',
    ComplianceScan: 'ComplianceScan',
    CloudComplianceScan: 'CloudComplianceScan'
} as const;
export type DeleteScanResultsForScanIDScanTypeEnum = typeof DeleteScanResultsForScanIDScanTypeEnum[keyof typeof DeleteScanResultsForScanIDScanTypeEnum];
/**
 * @export
 */
export const DownloadScanResultsScanTypeEnum = {
    SecretScan: 'SecretScan',
    VulnerabilityScan: 'VulnerabilityScan',
    MalwareScan: 'MalwareScan',
    ComplianceScan: 'ComplianceScan',
    CloudComplianceScan: 'CloudComplianceScan'
} as const;
export type DownloadScanResultsScanTypeEnum = typeof DownloadScanResultsScanTypeEnum[keyof typeof DownloadScanResultsScanTypeEnum];
