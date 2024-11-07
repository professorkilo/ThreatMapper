/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: v2.5.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ReportersContainsFilter } from './ReportersContainsFilter';
import {
    ReportersContainsFilterFromJSON,
    ReportersContainsFilterFromJSONTyped,
    ReportersContainsFilterToJSON,
} from './ReportersContainsFilter';

/**
 * 
 * @export
 * @interface ModelScanFilter
 */
export interface ModelScanFilter {
    /**
     * 
     * @type {ReportersContainsFilter}
     * @memberof ModelScanFilter
     */
    cloud_account_scan_filter: ReportersContainsFilter;
    /**
     * 
     * @type {ReportersContainsFilter}
     * @memberof ModelScanFilter
     */
    container_scan_filter: ReportersContainsFilter;
    /**
     * 
     * @type {ReportersContainsFilter}
     * @memberof ModelScanFilter
     */
    host_scan_filter: ReportersContainsFilter;
    /**
     * 
     * @type {ReportersContainsFilter}
     * @memberof ModelScanFilter
     */
    image_scan_filter: ReportersContainsFilter;
    /**
     * 
     * @type {ReportersContainsFilter}
     * @memberof ModelScanFilter
     */
    kubernetes_cluster_scan_filter: ReportersContainsFilter;
}

/**
 * Check if a given object implements the ModelScanFilter interface.
 */
export function instanceOfModelScanFilter(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cloud_account_scan_filter" in value;
    isInstance = isInstance && "container_scan_filter" in value;
    isInstance = isInstance && "host_scan_filter" in value;
    isInstance = isInstance && "image_scan_filter" in value;
    isInstance = isInstance && "kubernetes_cluster_scan_filter" in value;

    return isInstance;
}

export function ModelScanFilterFromJSON(json: any): ModelScanFilter {
    return ModelScanFilterFromJSONTyped(json, false);
}

export function ModelScanFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelScanFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cloud_account_scan_filter': ReportersContainsFilterFromJSON(json['cloud_account_scan_filter']),
        'container_scan_filter': ReportersContainsFilterFromJSON(json['container_scan_filter']),
        'host_scan_filter': ReportersContainsFilterFromJSON(json['host_scan_filter']),
        'image_scan_filter': ReportersContainsFilterFromJSON(json['image_scan_filter']),
        'kubernetes_cluster_scan_filter': ReportersContainsFilterFromJSON(json['kubernetes_cluster_scan_filter']),
    };
}

export function ModelScanFilterToJSON(value?: ModelScanFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cloud_account_scan_filter': ReportersContainsFilterToJSON(value.cloud_account_scan_filter),
        'container_scan_filter': ReportersContainsFilterToJSON(value.container_scan_filter),
        'host_scan_filter': ReportersContainsFilterToJSON(value.host_scan_filter),
        'image_scan_filter': ReportersContainsFilterToJSON(value.image_scan_filter),
        'kubernetes_cluster_scan_filter': ReportersContainsFilterToJSON(value.kubernetes_cluster_scan_filter),
    };
}

