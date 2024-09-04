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
 * @interface ModelAPITokenResponse
 */
export interface ModelAPITokenResponse {
    /**
     * 
     * @type {string}
     * @memberof ModelAPITokenResponse
     */
    api_token?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelAPITokenResponse
     */
    company_id?: number;
    /**
     * 
     * @type {Date}
     * @memberof ModelAPITokenResponse
     */
    created_at?: Date;
    /**
     * 
     * @type {number}
     * @memberof ModelAPITokenResponse
     */
    created_by_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelAPITokenResponse
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelAPITokenResponse
     */
    name?: string;
}

/**
 * Check if a given object implements the ModelAPITokenResponse interface.
 */
export function instanceOfModelAPITokenResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelAPITokenResponseFromJSON(json: any): ModelAPITokenResponse {
    return ModelAPITokenResponseFromJSONTyped(json, false);
}

export function ModelAPITokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelAPITokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'api_token': !exists(json, 'api_token') ? undefined : json['api_token'],
        'company_id': !exists(json, 'company_id') ? undefined : json['company_id'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'created_by_user_id': !exists(json, 'created_by_user_id') ? undefined : json['created_by_user_id'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function ModelAPITokenResponseToJSON(value?: ModelAPITokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'api_token': value.api_token,
        'company_id': value.company_id,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'created_by_user_id': value.created_by_user_id,
        'id': value.id,
        'name': value.name,
    };
}

