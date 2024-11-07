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
import type { DiagnosisNodeIdentifier } from './DiagnosisNodeIdentifier';
import {
    DiagnosisNodeIdentifierFromJSON,
    DiagnosisNodeIdentifierFromJSONTyped,
    DiagnosisNodeIdentifierToJSON,
} from './DiagnosisNodeIdentifier';

/**
 * 
 * @export
 * @interface DiagnosisGenerateCloudScannerDiagnosticLogsRequest
 */
export interface DiagnosisGenerateCloudScannerDiagnosticLogsRequest {
    /**
     * 
     * @type {Array<DiagnosisNodeIdentifier>}
     * @memberof DiagnosisGenerateCloudScannerDiagnosticLogsRequest
     */
    node_ids: Array<DiagnosisNodeIdentifier> | null;
    /**
     * 
     * @type {number}
     * @memberof DiagnosisGenerateCloudScannerDiagnosticLogsRequest
     */
    tail: number;
}

/**
 * Check if a given object implements the DiagnosisGenerateCloudScannerDiagnosticLogsRequest interface.
 */
export function instanceOfDiagnosisGenerateCloudScannerDiagnosticLogsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "node_ids" in value;
    isInstance = isInstance && "tail" in value;

    return isInstance;
}

export function DiagnosisGenerateCloudScannerDiagnosticLogsRequestFromJSON(json: any): DiagnosisGenerateCloudScannerDiagnosticLogsRequest {
    return DiagnosisGenerateCloudScannerDiagnosticLogsRequestFromJSONTyped(json, false);
}

export function DiagnosisGenerateCloudScannerDiagnosticLogsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosisGenerateCloudScannerDiagnosticLogsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'node_ids': (json['node_ids'] === null ? null : (json['node_ids'] as Array<any>).map(DiagnosisNodeIdentifierFromJSON)),
        'tail': json['tail'],
    };
}

export function DiagnosisGenerateCloudScannerDiagnosticLogsRequestToJSON(value?: DiagnosisGenerateCloudScannerDiagnosticLogsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'node_ids': (value.node_ids === null ? null : (value.node_ids as Array<any>).map(DiagnosisNodeIdentifierToJSON)),
        'tail': value.tail,
    };
}

