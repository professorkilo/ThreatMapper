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
/**
 * 
 * @export
 * @interface ModelAgentID
 */
export interface ModelAgentID {
    /**
     * 
     * @type {number}
     * @memberof ModelAgentID
     */
    available_workload: number;
    /**
     * 
     * @type {string}
     * @memberof ModelAgentID
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelAgentID
     */
    node_type?: string;
}

/**
 * Check if a given object implements the ModelAgentID interface.
 */
export function instanceOfModelAgentID(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "available_workload" in value;
    isInstance = isInstance && "node_id" in value;

    return isInstance;
}

export function ModelAgentIDFromJSON(json: any): ModelAgentID {
    return ModelAgentIDFromJSONTyped(json, false);
}

export function ModelAgentIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelAgentID {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'available_workload': json['available_workload'],
        'node_id': json['node_id'],
        'node_type': !exists(json, 'node_type') ? undefined : json['node_type'],
    };
}

export function ModelAgentIDToJSON(value?: ModelAgentID | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'available_workload': value.available_workload,
        'node_id': value.node_id,
        'node_type': value.node_type,
    };
}

