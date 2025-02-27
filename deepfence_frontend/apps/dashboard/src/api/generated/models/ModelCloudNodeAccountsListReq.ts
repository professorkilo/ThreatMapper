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
import type { ModelFetchWindow } from './ModelFetchWindow';
import {
    ModelFetchWindowFromJSON,
    ModelFetchWindowFromJSONTyped,
    ModelFetchWindowToJSON,
} from './ModelFetchWindow';

/**
 * 
 * @export
 * @interface ModelCloudNodeAccountsListReq
 */
export interface ModelCloudNodeAccountsListReq {
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeAccountsListReq
     */
    cloud_provider: ModelCloudNodeAccountsListReqCloudProviderEnum;
    /**
     * 
     * @type {ModelFetchWindow}
     * @memberof ModelCloudNodeAccountsListReq
     */
    window: ModelFetchWindow;
}


/**
 * @export
 */
export const ModelCloudNodeAccountsListReqCloudProviderEnum = {
    Aws: 'aws',
    Gcp: 'gcp',
    Azure: 'azure',
    Linux: 'linux',
    Kubernetes: 'kubernetes',
    AwsOrg: 'aws_org',
    GcpOrg: 'gcp_org',
    AzureOrg: 'azure_org'
} as const;
export type ModelCloudNodeAccountsListReqCloudProviderEnum = typeof ModelCloudNodeAccountsListReqCloudProviderEnum[keyof typeof ModelCloudNodeAccountsListReqCloudProviderEnum];


/**
 * Check if a given object implements the ModelCloudNodeAccountsListReq interface.
 */
export function instanceOfModelCloudNodeAccountsListReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cloud_provider" in value;
    isInstance = isInstance && "window" in value;

    return isInstance;
}

export function ModelCloudNodeAccountsListReqFromJSON(json: any): ModelCloudNodeAccountsListReq {
    return ModelCloudNodeAccountsListReqFromJSONTyped(json, false);
}

export function ModelCloudNodeAccountsListReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelCloudNodeAccountsListReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cloud_provider': json['cloud_provider'],
        'window': ModelFetchWindowFromJSON(json['window']),
    };
}

export function ModelCloudNodeAccountsListReqToJSON(value?: ModelCloudNodeAccountsListReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cloud_provider': value.cloud_provider,
        'window': ModelFetchWindowToJSON(value.window),
    };
}

