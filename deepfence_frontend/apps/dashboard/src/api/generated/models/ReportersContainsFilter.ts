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
 * @interface ReportersContainsFilter
 */
export interface ReportersContainsFilter {
    /**
     * 
     * @type {{ [key: string]: Array<any>; }}
     * @memberof ReportersContainsFilter
     */
    filter_in: { [key: string]: Array<any>; } | null;
}

/**
 * Check if a given object implements the ReportersContainsFilter interface.
 */
export function instanceOfReportersContainsFilter(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "filter_in" in value;

    return isInstance;
}

export function ReportersContainsFilterFromJSON(json: any): ReportersContainsFilter {
    return ReportersContainsFilterFromJSONTyped(json, false);
}

export function ReportersContainsFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportersContainsFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'filter_in': json['filter_in'],
    };
}

export function ReportersContainsFilterToJSON(value?: ReportersContainsFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'filter_in': value.filter_in,
    };
}

