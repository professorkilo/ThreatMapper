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
import type { GraphNodeInfo } from './GraphNodeInfo';
import {
    GraphNodeInfoFromJSON,
    GraphNodeInfoFromJSONTyped,
    GraphNodeInfoToJSON,
} from './GraphNodeInfo';

/**
 * 
 * @export
 * @interface GraphThreatNodeInfo
 */
export interface GraphThreatNodeInfo {
    /**
     * 
     * @type {Array<Array<string>>}
     * @memberof GraphThreatNodeInfo
     */
    attack_path: Array<Array<string>> | null;
    /**
     * 
     * @type {number}
     * @memberof GraphThreatNodeInfo
     */
    cloud_compliance_count: number;
    /**
     * 
     * @type {number}
     * @memberof GraphThreatNodeInfo
     */
    cloud_warn_alarm_count: number;
    /**
     * 
     * @type {number}
     * @memberof GraphThreatNodeInfo
     */
    compliance_count: number;
    /**
     * 
     * @type {number}
     * @memberof GraphThreatNodeInfo
     */
    count: number;
    /**
     * 
     * @type {number}
     * @memberof GraphThreatNodeInfo
     */
    exploitable_secrets_count: number;
    /**
     * 
     * @type {number}
     * @memberof GraphThreatNodeInfo
     */
    exploitable_vulnerabilities_count: number;
    /**
     * 
     * @type {string}
     * @memberof GraphThreatNodeInfo
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof GraphThreatNodeInfo
     */
    label: string;
    /**
     * 
     * @type {string}
     * @memberof GraphThreatNodeInfo
     */
    node_type: string;
    /**
     * 
     * @type {{ [key: string]: GraphNodeInfo; }}
     * @memberof GraphThreatNodeInfo
     */
    nodes: { [key: string]: GraphNodeInfo; } | null;
    /**
     * 
     * @type {number}
     * @memberof GraphThreatNodeInfo
     */
    secrets_count: number;
    /**
     * 
     * @type {number}
     * @memberof GraphThreatNodeInfo
     */
    vulnerability_count: number;
    /**
     * 
     * @type {number}
     * @memberof GraphThreatNodeInfo
     */
    warn_alarm_count: number;
}

/**
 * Check if a given object implements the GraphThreatNodeInfo interface.
 */
export function instanceOfGraphThreatNodeInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "attack_path" in value;
    isInstance = isInstance && "cloud_compliance_count" in value;
    isInstance = isInstance && "cloud_warn_alarm_count" in value;
    isInstance = isInstance && "compliance_count" in value;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "exploitable_secrets_count" in value;
    isInstance = isInstance && "exploitable_vulnerabilities_count" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "label" in value;
    isInstance = isInstance && "node_type" in value;
    isInstance = isInstance && "nodes" in value;
    isInstance = isInstance && "secrets_count" in value;
    isInstance = isInstance && "vulnerability_count" in value;
    isInstance = isInstance && "warn_alarm_count" in value;

    return isInstance;
}

export function GraphThreatNodeInfoFromJSON(json: any): GraphThreatNodeInfo {
    return GraphThreatNodeInfoFromJSONTyped(json, false);
}

export function GraphThreatNodeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphThreatNodeInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attack_path': json['attack_path'],
        'cloud_compliance_count': json['cloud_compliance_count'],
        'cloud_warn_alarm_count': json['cloud_warn_alarm_count'],
        'compliance_count': json['compliance_count'],
        'count': json['count'],
        'exploitable_secrets_count': json['exploitable_secrets_count'],
        'exploitable_vulnerabilities_count': json['exploitable_vulnerabilities_count'],
        'id': json['id'],
        'label': json['label'],
        'node_type': json['node_type'],
        'nodes': (json['nodes'] === null ? null : mapValues(json['nodes'], GraphNodeInfoFromJSON)),
        'secrets_count': json['secrets_count'],
        'vulnerability_count': json['vulnerability_count'],
        'warn_alarm_count': json['warn_alarm_count'],
    };
}

export function GraphThreatNodeInfoToJSON(value?: GraphThreatNodeInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attack_path': value.attack_path,
        'cloud_compliance_count': value.cloud_compliance_count,
        'cloud_warn_alarm_count': value.cloud_warn_alarm_count,
        'compliance_count': value.compliance_count,
        'count': value.count,
        'exploitable_secrets_count': value.exploitable_secrets_count,
        'exploitable_vulnerabilities_count': value.exploitable_vulnerabilities_count,
        'id': value.id,
        'label': value.label,
        'node_type': value.node_type,
        'nodes': (value.nodes === null ? null : mapValues(value.nodes, GraphNodeInfoToJSON)),
        'secrets_count': value.secrets_count,
        'vulnerability_count': value.vulnerability_count,
        'warn_alarm_count': value.warn_alarm_count,
    };
}

