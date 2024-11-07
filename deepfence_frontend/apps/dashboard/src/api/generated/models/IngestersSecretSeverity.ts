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
 * @interface IngestersSecretSeverity
 */
export interface IngestersSecretSeverity {
    /**
     * 
     * @type {string}
     * @memberof IngestersSecretSeverity
     */
    level?: string;
    /**
     * 
     * @type {number}
     * @memberof IngestersSecretSeverity
     */
    score?: number;
}

/**
 * Check if a given object implements the IngestersSecretSeverity interface.
 */
export function instanceOfIngestersSecretSeverity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IngestersSecretSeverityFromJSON(json: any): IngestersSecretSeverity {
    return IngestersSecretSeverityFromJSONTyped(json, false);
}

export function IngestersSecretSeverityFromJSONTyped(json: any, ignoreDiscriminator: boolean): IngestersSecretSeverity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'level': !exists(json, 'level') ? undefined : json['level'],
        'score': !exists(json, 'score') ? undefined : json['score'],
    };
}

export function IngestersSecretSeverityToJSON(value?: IngestersSecretSeverity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'level': value.level,
        'score': value.score,
    };
}

