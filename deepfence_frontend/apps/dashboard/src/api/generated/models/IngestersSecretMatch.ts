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
 * @interface IngestersSecretMatch
 */
export interface IngestersSecretMatch {
    /**
     * 
     * @type {string}
     * @memberof IngestersSecretMatch
     */
    full_filename?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersSecretMatch
     */
    matched_content?: string;
    /**
     * 
     * @type {number}
     * @memberof IngestersSecretMatch
     */
    relative_ending_index?: number;
    /**
     * 
     * @type {number}
     * @memberof IngestersSecretMatch
     */
    relative_starting_index?: number;
    /**
     * 
     * @type {number}
     * @memberof IngestersSecretMatch
     */
    starting_index?: number;
}

/**
 * Check if a given object implements the IngestersSecretMatch interface.
 */
export function instanceOfIngestersSecretMatch(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IngestersSecretMatchFromJSON(json: any): IngestersSecretMatch {
    return IngestersSecretMatchFromJSONTyped(json, false);
}

export function IngestersSecretMatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): IngestersSecretMatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'full_filename': !exists(json, 'full_filename') ? undefined : json['full_filename'],
        'matched_content': !exists(json, 'matched_content') ? undefined : json['matched_content'],
        'relative_ending_index': !exists(json, 'relative_ending_index') ? undefined : json['relative_ending_index'],
        'relative_starting_index': !exists(json, 'relative_starting_index') ? undefined : json['relative_starting_index'],
        'starting_index': !exists(json, 'starting_index') ? undefined : json['starting_index'],
    };
}

export function IngestersSecretMatchToJSON(value?: IngestersSecretMatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'full_filename': value.full_filename,
        'matched_content': value.matched_content,
        'relative_ending_index': value.relative_ending_index,
        'relative_starting_index': value.relative_starting_index,
        'starting_index': value.starting_index,
    };
}

