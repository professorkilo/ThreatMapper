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
 * @interface ControlsAgentBeat
 */
export interface ControlsAgentBeat {
    /**
     * 
     * @type {number}
     * @memberof ControlsAgentBeat
     */
    beatrate: number;
}

/**
 * Check if a given object implements the ControlsAgentBeat interface.
 */
export function instanceOfControlsAgentBeat(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "beatrate" in value;

    return isInstance;
}

export function ControlsAgentBeatFromJSON(json: any): ControlsAgentBeat {
    return ControlsAgentBeatFromJSONTyped(json, false);
}

export function ControlsAgentBeatFromJSONTyped(json: any, ignoreDiscriminator: boolean): ControlsAgentBeat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'beatrate': json['beatrate'],
    };
}

export function ControlsAgentBeatToJSON(value?: ControlsAgentBeat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'beatrate': value.beatrate,
    };
}

