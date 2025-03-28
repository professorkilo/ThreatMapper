/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: v2.5.3
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
 * @interface ModelFiltersReq
 */
export interface ModelFiltersReq {
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelFiltersReq
     */
    filters: Array<string> | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ModelFiltersReq
     */
    having?: { [key: string]: any; } | null;
}

/**
 * Check if a given object implements the ModelFiltersReq interface.
 */
export function instanceOfModelFiltersReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "filters" in value;

    return isInstance;
}

export function ModelFiltersReqFromJSON(json: any): ModelFiltersReq {
    return ModelFiltersReqFromJSONTyped(json, false);
}

export function ModelFiltersReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelFiltersReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'filters': json['filters'],
        'having': !exists(json, 'having') ? undefined : json['having'],
    };
}

export function ModelFiltersReqToJSON(value?: ModelFiltersReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'filters': value.filters,
        'having': value.having,
    };
}

