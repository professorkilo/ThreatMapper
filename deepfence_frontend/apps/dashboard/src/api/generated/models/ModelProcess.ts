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
/**
 * 
 * @export
 * @interface ModelProcess
 */
export interface ModelProcess {
    /**
     * 
     * @type {string}
     * @memberof ModelProcess
     */
    cmdline: string;
    /**
     * 
     * @type {number}
     * @memberof ModelProcess
     */
    cpu_max: number;
    /**
     * 
     * @type {number}
     * @memberof ModelProcess
     */
    cpu_usage: number;
    /**
     * 
     * @type {number}
     * @memberof ModelProcess
     */
    memory_max: number;
    /**
     * 
     * @type {number}
     * @memberof ModelProcess
     */
    memory_usage: number;
    /**
     * 
     * @type {string}
     * @memberof ModelProcess
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelProcess
     */
    node_name: string;
    /**
     * 
     * @type {number}
     * @memberof ModelProcess
     */
    open_files_count: number;
    /**
     * 
     * @type {number}
     * @memberof ModelProcess
     */
    pid: number;
    /**
     * 
     * @type {number}
     * @memberof ModelProcess
     */
    ppid: number;
    /**
     * 
     * @type {string}
     * @memberof ModelProcess
     */
    short_name: string;
    /**
     * 
     * @type {number}
     * @memberof ModelProcess
     */
    threads: number;
}

/**
 * Check if a given object implements the ModelProcess interface.
 */
export function instanceOfModelProcess(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cmdline" in value;
    isInstance = isInstance && "cpu_max" in value;
    isInstance = isInstance && "cpu_usage" in value;
    isInstance = isInstance && "memory_max" in value;
    isInstance = isInstance && "memory_usage" in value;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "node_name" in value;
    isInstance = isInstance && "open_files_count" in value;
    isInstance = isInstance && "pid" in value;
    isInstance = isInstance && "ppid" in value;
    isInstance = isInstance && "short_name" in value;
    isInstance = isInstance && "threads" in value;

    return isInstance;
}

export function ModelProcessFromJSON(json: any): ModelProcess {
    return ModelProcessFromJSONTyped(json, false);
}

export function ModelProcessFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelProcess {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cmdline': json['cmdline'],
        'cpu_max': json['cpu_max'],
        'cpu_usage': json['cpu_usage'],
        'memory_max': json['memory_max'],
        'memory_usage': json['memory_usage'],
        'node_id': json['node_id'],
        'node_name': json['node_name'],
        'open_files_count': json['open_files_count'],
        'pid': json['pid'],
        'ppid': json['ppid'],
        'short_name': json['short_name'],
        'threads': json['threads'],
    };
}

export function ModelProcessToJSON(value?: ModelProcess | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cmdline': value.cmdline,
        'cpu_max': value.cpu_max,
        'cpu_usage': value.cpu_usage,
        'memory_max': value.memory_max,
        'memory_usage': value.memory_usage,
        'node_id': value.node_id,
        'node_name': value.node_name,
        'open_files_count': value.open_files_count,
        'pid': value.pid,
        'ppid': value.ppid,
        'short_name': value.short_name,
        'threads': value.threads,
    };
}

