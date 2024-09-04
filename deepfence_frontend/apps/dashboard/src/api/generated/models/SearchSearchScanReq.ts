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

import { exists, mapValues } from '../runtime';
import type { ModelFetchWindow } from './ModelFetchWindow';
import {
    ModelFetchWindowFromJSON,
    ModelFetchWindowFromJSONTyped,
    ModelFetchWindowToJSON,
} from './ModelFetchWindow';
import type { SearchChainedSearchFilter } from './SearchChainedSearchFilter';
import {
    SearchChainedSearchFilterFromJSON,
    SearchChainedSearchFilterFromJSONTyped,
    SearchChainedSearchFilterToJSON,
} from './SearchChainedSearchFilter';
import type { SearchSearchFilter } from './SearchSearchFilter';
import {
    SearchSearchFilterFromJSON,
    SearchSearchFilterFromJSONTyped,
    SearchSearchFilterToJSON,
} from './SearchSearchFilter';

/**
 * 
 * @export
 * @interface SearchSearchScanReq
 */
export interface SearchSearchScanReq {
    /**
     * 
     * @type {SearchSearchFilter}
     * @memberof SearchSearchScanReq
     */
    node_filters: SearchSearchFilter;
    /**
     * 
     * @type {SearchChainedSearchFilter}
     * @memberof SearchSearchScanReq
     */
    related_node_filter?: SearchChainedSearchFilter;
    /**
     * 
     * @type {SearchSearchFilter}
     * @memberof SearchSearchScanReq
     */
    scan_filters: SearchSearchFilter;
    /**
     * 
     * @type {ModelFetchWindow}
     * @memberof SearchSearchScanReq
     */
    window: ModelFetchWindow;
}

/**
 * Check if a given object implements the SearchSearchScanReq interface.
 */
export function instanceOfSearchSearchScanReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "node_filters" in value;
    isInstance = isInstance && "scan_filters" in value;
    isInstance = isInstance && "window" in value;

    return isInstance;
}

export function SearchSearchScanReqFromJSON(json: any): SearchSearchScanReq {
    return SearchSearchScanReqFromJSONTyped(json, false);
}

export function SearchSearchScanReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchSearchScanReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'node_filters': SearchSearchFilterFromJSON(json['node_filters']),
        'related_node_filter': !exists(json, 'related_node_filter') ? undefined : SearchChainedSearchFilterFromJSON(json['related_node_filter']),
        'scan_filters': SearchSearchFilterFromJSON(json['scan_filters']),
        'window': ModelFetchWindowFromJSON(json['window']),
    };
}

export function SearchSearchScanReqToJSON(value?: SearchSearchScanReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'node_filters': SearchSearchFilterToJSON(value.node_filters),
        'related_node_filter': SearchChainedSearchFilterToJSON(value.related_node_filter),
        'scan_filters': SearchSearchFilterToJSON(value.scan_filters),
        'window': ModelFetchWindowToJSON(value.window),
    };
}

