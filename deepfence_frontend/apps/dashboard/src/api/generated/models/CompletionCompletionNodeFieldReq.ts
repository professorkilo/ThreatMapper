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
import type { ReportersFieldsFilters } from './ReportersFieldsFilters';
import {
    ReportersFieldsFiltersFromJSON,
    ReportersFieldsFiltersFromJSONTyped,
    ReportersFieldsFiltersToJSON,
} from './ReportersFieldsFilters';

/**
 * 
 * @export
 * @interface CompletionCompletionNodeFieldReq
 */
export interface CompletionCompletionNodeFieldReq {
    /**
     * 
     * @type {string}
     * @memberof CompletionCompletionNodeFieldReq
     */
    completion: string;
    /**
     * 
     * @type {string}
     * @memberof CompletionCompletionNodeFieldReq
     */
    field_name: string;
    /**
     * 
     * @type {ReportersFieldsFilters}
     * @memberof CompletionCompletionNodeFieldReq
     */
    filters?: ReportersFieldsFilters;
    /**
     * 
     * @type {string}
     * @memberof CompletionCompletionNodeFieldReq
     */
    scan_id?: string;
    /**
     * 
     * @type {ModelFetchWindow}
     * @memberof CompletionCompletionNodeFieldReq
     */
    window: ModelFetchWindow;
}

/**
 * Check if a given object implements the CompletionCompletionNodeFieldReq interface.
 */
export function instanceOfCompletionCompletionNodeFieldReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "completion" in value;
    isInstance = isInstance && "field_name" in value;
    isInstance = isInstance && "window" in value;

    return isInstance;
}

export function CompletionCompletionNodeFieldReqFromJSON(json: any): CompletionCompletionNodeFieldReq {
    return CompletionCompletionNodeFieldReqFromJSONTyped(json, false);
}

export function CompletionCompletionNodeFieldReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompletionCompletionNodeFieldReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'completion': json['completion'],
        'field_name': json['field_name'],
        'filters': !exists(json, 'filters') ? undefined : ReportersFieldsFiltersFromJSON(json['filters']),
        'scan_id': !exists(json, 'scan_id') ? undefined : json['scan_id'],
        'window': ModelFetchWindowFromJSON(json['window']),
    };
}

export function CompletionCompletionNodeFieldReqToJSON(value?: CompletionCompletionNodeFieldReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'completion': value.completion,
        'field_name': value.field_name,
        'filters': ReportersFieldsFiltersToJSON(value.filters),
        'scan_id': value.scan_id,
        'window': ModelFetchWindowToJSON(value.window),
    };
}

