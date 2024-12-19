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
import type { ModelContainer } from './ModelContainer';
import {
    ModelContainerFromJSON,
    ModelContainerFromJSONTyped,
    ModelContainerToJSON,
} from './ModelContainer';
import type { ModelProcess } from './ModelProcess';
import {
    ModelProcessFromJSON,
    ModelProcessFromJSONTyped,
    ModelProcessToJSON,
} from './ModelProcess';

/**
 * 
 * @export
 * @interface ModelPod
 */
export interface ModelPod {
    /**
     * 
     * @type {Array<ModelContainer>}
     * @memberof ModelPod
     */
    containers: Array<ModelContainer> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelPod
     */
    host_name: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelPod
     */
    is_deepfence_system: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelPod
     */
    kubernetes_cluster_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelPod
     */
    kubernetes_cluster_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelPod
     */
    kubernetes_created: string;
    /**
     * 
     * @type {string}
     * @memberof ModelPod
     */
    kubernetes_ip: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelPod
     */
    kubernetes_is_in_host_network: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ModelPod
     */
    kubernetes_labels: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof ModelPod
     */
    kubernetes_namespace: string;
    /**
     * 
     * @type {string}
     * @memberof ModelPod
     */
    kubernetes_state: string;
    /**
     * 
     * @type {string}
     * @memberof ModelPod
     */
    malware_scan_status: string;
    /**
     * 
     * @type {string}
     * @memberof ModelPod
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelPod
     */
    node_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelPod
     */
    pod_name: string;
    /**
     * 
     * @type {Array<ModelProcess>}
     * @memberof ModelPod
     */
    processes: Array<ModelProcess> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelPod
     */
    secret_scan_status: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelPod
     */
    tags: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelPod
     */
    vulnerability_scan_status: string;
}

/**
 * Check if a given object implements the ModelPod interface.
 */
export function instanceOfModelPod(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "containers" in value;
    isInstance = isInstance && "host_name" in value;
    isInstance = isInstance && "is_deepfence_system" in value;
    isInstance = isInstance && "kubernetes_cluster_id" in value;
    isInstance = isInstance && "kubernetes_cluster_name" in value;
    isInstance = isInstance && "kubernetes_created" in value;
    isInstance = isInstance && "kubernetes_ip" in value;
    isInstance = isInstance && "kubernetes_is_in_host_network" in value;
    isInstance = isInstance && "kubernetes_labels" in value;
    isInstance = isInstance && "kubernetes_namespace" in value;
    isInstance = isInstance && "kubernetes_state" in value;
    isInstance = isInstance && "malware_scan_status" in value;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "node_name" in value;
    isInstance = isInstance && "pod_name" in value;
    isInstance = isInstance && "processes" in value;
    isInstance = isInstance && "secret_scan_status" in value;
    isInstance = isInstance && "tags" in value;
    isInstance = isInstance && "vulnerability_scan_status" in value;

    return isInstance;
}

export function ModelPodFromJSON(json: any): ModelPod {
    return ModelPodFromJSONTyped(json, false);
}

export function ModelPodFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelPod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'containers': (json['containers'] === null ? null : (json['containers'] as Array<any>).map(ModelContainerFromJSON)),
        'host_name': json['host_name'],
        'is_deepfence_system': json['is_deepfence_system'],
        'kubernetes_cluster_id': json['kubernetes_cluster_id'],
        'kubernetes_cluster_name': json['kubernetes_cluster_name'],
        'kubernetes_created': json['kubernetes_created'],
        'kubernetes_ip': json['kubernetes_ip'],
        'kubernetes_is_in_host_network': json['kubernetes_is_in_host_network'],
        'kubernetes_labels': json['kubernetes_labels'],
        'kubernetes_namespace': json['kubernetes_namespace'],
        'kubernetes_state': json['kubernetes_state'],
        'malware_scan_status': json['malware_scan_status'],
        'node_id': json['node_id'],
        'node_name': json['node_name'],
        'pod_name': json['pod_name'],
        'processes': (json['processes'] === null ? null : (json['processes'] as Array<any>).map(ModelProcessFromJSON)),
        'secret_scan_status': json['secret_scan_status'],
        'tags': json['tags'],
        'vulnerability_scan_status': json['vulnerability_scan_status'],
    };
}

export function ModelPodToJSON(value?: ModelPod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'containers': (value.containers === null ? null : (value.containers as Array<any>).map(ModelContainerToJSON)),
        'host_name': value.host_name,
        'is_deepfence_system': value.is_deepfence_system,
        'kubernetes_cluster_id': value.kubernetes_cluster_id,
        'kubernetes_cluster_name': value.kubernetes_cluster_name,
        'kubernetes_created': value.kubernetes_created,
        'kubernetes_ip': value.kubernetes_ip,
        'kubernetes_is_in_host_network': value.kubernetes_is_in_host_network,
        'kubernetes_labels': value.kubernetes_labels,
        'kubernetes_namespace': value.kubernetes_namespace,
        'kubernetes_state': value.kubernetes_state,
        'malware_scan_status': value.malware_scan_status,
        'node_id': value.node_id,
        'node_name': value.node_name,
        'pod_name': value.pod_name,
        'processes': (value.processes === null ? null : (value.processes as Array<any>).map(ModelProcessToJSON)),
        'secret_scan_status': value.secret_scan_status,
        'tags': value.tags,
        'vulnerability_scan_status': value.vulnerability_scan_status,
    };
}

