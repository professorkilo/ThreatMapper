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
import type { ModelCloudCompliance } from './ModelCloudCompliance';
import {
    ModelCloudComplianceFromJSON,
    ModelCloudComplianceFromJSONTyped,
    ModelCloudComplianceToJSON,
} from './ModelCloudCompliance';

/**
 * 
 * @export
 * @interface ModelCloudComplianceScanResult
 */
export interface ModelCloudComplianceScanResult {
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelCloudComplianceScanResult
     */
    benchmark_type: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceScanResult
     */
    cloud_account_id: string;
    /**
     * 
     * @type {number}
     * @memberof ModelCloudComplianceScanResult
     */
    compliance_percentage: number;
    /**
     * 
     * @type {Array<ModelCloudCompliance>}
     * @memberof ModelCloudComplianceScanResult
     */
    compliances: Array<ModelCloudCompliance> | null;
    /**
     * 
     * @type {number}
     * @memberof ModelCloudComplianceScanResult
     */
    created_at: number;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceScanResult
     */
    docker_container_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceScanResult
     */
    docker_image_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceScanResult
     */
    host_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceScanResult
     */
    kubernetes_cluster_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceScanResult
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceScanResult
     */
    node_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceScanResult
     */
    node_type: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceScanResult
     */
    scan_id: string;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof ModelCloudComplianceScanResult
     */
    status_counts: { [key: string]: number; } | null;
    /**
     * 
     * @type {number}
     * @memberof ModelCloudComplianceScanResult
     */
    updated_at: number;
}

/**
 * Check if a given object implements the ModelCloudComplianceScanResult interface.
 */
export function instanceOfModelCloudComplianceScanResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "benchmark_type" in value;
    isInstance = isInstance && "cloud_account_id" in value;
    isInstance = isInstance && "compliance_percentage" in value;
    isInstance = isInstance && "compliances" in value;
    isInstance = isInstance && "created_at" in value;
    isInstance = isInstance && "docker_container_name" in value;
    isInstance = isInstance && "docker_image_name" in value;
    isInstance = isInstance && "host_name" in value;
    isInstance = isInstance && "kubernetes_cluster_name" in value;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "node_name" in value;
    isInstance = isInstance && "node_type" in value;
    isInstance = isInstance && "scan_id" in value;
    isInstance = isInstance && "status_counts" in value;
    isInstance = isInstance && "updated_at" in value;

    return isInstance;
}

export function ModelCloudComplianceScanResultFromJSON(json: any): ModelCloudComplianceScanResult {
    return ModelCloudComplianceScanResultFromJSONTyped(json, false);
}

export function ModelCloudComplianceScanResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelCloudComplianceScanResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'benchmark_type': json['benchmark_type'],
        'cloud_account_id': json['cloud_account_id'],
        'compliance_percentage': json['compliance_percentage'],
        'compliances': (json['compliances'] === null ? null : (json['compliances'] as Array<any>).map(ModelCloudComplianceFromJSON)),
        'created_at': json['created_at'],
        'docker_container_name': json['docker_container_name'],
        'docker_image_name': json['docker_image_name'],
        'host_name': json['host_name'],
        'kubernetes_cluster_name': json['kubernetes_cluster_name'],
        'node_id': json['node_id'],
        'node_name': json['node_name'],
        'node_type': json['node_type'],
        'scan_id': json['scan_id'],
        'status_counts': json['status_counts'],
        'updated_at': json['updated_at'],
    };
}

export function ModelCloudComplianceScanResultToJSON(value?: ModelCloudComplianceScanResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'benchmark_type': value.benchmark_type,
        'cloud_account_id': value.cloud_account_id,
        'compliance_percentage': value.compliance_percentage,
        'compliances': (value.compliances === null ? null : (value.compliances as Array<any>).map(ModelCloudComplianceToJSON)),
        'created_at': value.created_at,
        'docker_container_name': value.docker_container_name,
        'docker_image_name': value.docker_image_name,
        'host_name': value.host_name,
        'kubernetes_cluster_name': value.kubernetes_cluster_name,
        'node_id': value.node_id,
        'node_name': value.node_name,
        'node_type': value.node_type,
        'scan_id': value.scan_id,
        'status_counts': value.status_counts,
        'updated_at': value.updated_at,
    };
}

