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
import type { ModelBasicNode } from './ModelBasicNode';
import {
    ModelBasicNodeFromJSON,
    ModelBasicNodeFromJSONTyped,
    ModelBasicNodeToJSON,
} from './ModelBasicNode';

/**
 * 
 * @export
 * @interface ModelCloudCompliance
 */
export interface ModelCloudCompliance {
    /**
     * 
     * @type {string}
     * @memberof ModelCloudCompliance
     */
    account_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudCompliance
     */
    cloud_provider: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudCompliance
     */
    compliance_check_type: ModelCloudComplianceComplianceCheckTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudCompliance
     */
    control_id: string;
    /**
     * 
     * @type {number}
     * @memberof ModelCloudCompliance
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudCompliance
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudCompliance
     */
    group: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelCloudCompliance
     */
    masked: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudCompliance
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudCompliance
     */
    node_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudCompliance
     */
    reason: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudCompliance
     */
    region: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudCompliance
     */
    resource: string;
    /**
     * 
     * @type {Array<ModelBasicNode>}
     * @memberof ModelCloudCompliance
     */
    resources?: Array<ModelBasicNode> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudCompliance
     */
    service: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudCompliance
     */
    severity: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudCompliance
     */
    status: ModelCloudComplianceStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudCompliance
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudCompliance
     */
    type: string;
    /**
     * 
     * @type {number}
     * @memberof ModelCloudCompliance
     */
    updated_at: number;
}


/**
 * @export
 */
export const ModelCloudComplianceComplianceCheckTypeEnum = {
    Hipaa: 'hipaa',
    Gdpr: 'gdpr',
    Pci: 'pci',
    Nist: 'nist',
    Cis: 'cis',
    Soc2: 'soc_2',
    NsaCisa: 'nsa-cisa',
    AwsFoundationalSecurity: 'aws_foundational_security'
} as const;
export type ModelCloudComplianceComplianceCheckTypeEnum = typeof ModelCloudComplianceComplianceCheckTypeEnum[keyof typeof ModelCloudComplianceComplianceCheckTypeEnum];

/**
 * @export
 */
export const ModelCloudComplianceStatusEnum = {
    Alarm: 'alarm',
    Info: 'info',
    Ok: 'ok',
    Skip: 'skip',
    Delete: 'delete'
} as const;
export type ModelCloudComplianceStatusEnum = typeof ModelCloudComplianceStatusEnum[keyof typeof ModelCloudComplianceStatusEnum];


/**
 * Check if a given object implements the ModelCloudCompliance interface.
 */
export function instanceOfModelCloudCompliance(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "account_id" in value;
    isInstance = isInstance && "cloud_provider" in value;
    isInstance = isInstance && "compliance_check_type" in value;
    isInstance = isInstance && "control_id" in value;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "group" in value;
    isInstance = isInstance && "masked" in value;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "node_name" in value;
    isInstance = isInstance && "reason" in value;
    isInstance = isInstance && "region" in value;
    isInstance = isInstance && "resource" in value;
    isInstance = isInstance && "service" in value;
    isInstance = isInstance && "severity" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "updated_at" in value;

    return isInstance;
}

export function ModelCloudComplianceFromJSON(json: any): ModelCloudCompliance {
    return ModelCloudComplianceFromJSONTyped(json, false);
}

export function ModelCloudComplianceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelCloudCompliance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account_id': json['account_id'],
        'cloud_provider': json['cloud_provider'],
        'compliance_check_type': json['compliance_check_type'],
        'control_id': json['control_id'],
        'count': json['count'],
        'description': json['description'],
        'group': json['group'],
        'masked': json['masked'],
        'node_id': json['node_id'],
        'node_name': json['node_name'],
        'reason': json['reason'],
        'region': json['region'],
        'resource': json['resource'],
        'resources': !exists(json, 'resources') ? undefined : (json['resources'] === null ? null : (json['resources'] as Array<any>).map(ModelBasicNodeFromJSON)),
        'service': json['service'],
        'severity': json['severity'],
        'status': json['status'],
        'title': json['title'],
        'type': json['type'],
        'updated_at': json['updated_at'],
    };
}

export function ModelCloudComplianceToJSON(value?: ModelCloudCompliance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.account_id,
        'cloud_provider': value.cloud_provider,
        'compliance_check_type': value.compliance_check_type,
        'control_id': value.control_id,
        'count': value.count,
        'description': value.description,
        'group': value.group,
        'masked': value.masked,
        'node_id': value.node_id,
        'node_name': value.node_name,
        'reason': value.reason,
        'region': value.region,
        'resource': value.resource,
        'resources': value.resources === undefined ? undefined : (value.resources === null ? null : (value.resources as Array<any>).map(ModelBasicNodeToJSON)),
        'service': value.service,
        'severity': value.severity,
        'status': value.status,
        'title': value.title,
        'type': value.type,
        'updated_at': value.updated_at,
    };
}

