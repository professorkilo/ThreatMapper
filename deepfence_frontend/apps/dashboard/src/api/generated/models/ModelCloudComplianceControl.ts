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
 * @interface ModelCloudComplianceControl
 */
export interface ModelCloudComplianceControl {
    /**
     * 
     * @type {boolean}
     * @memberof ModelCloudComplianceControl
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceControl
     */
    category?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelCloudComplianceControl
     */
    category_hierarchy?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceControl
     */
    category_hierarchy_short?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceControl
     */
    cloud_provider?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceControl
     */
    compliance_type?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceControl
     */
    control_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceControl
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelCloudComplianceControl
     */
    disabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceControl
     */
    documentation?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelCloudComplianceControl
     */
    executable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceControl
     */
    node_id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelCloudComplianceControl
     */
    parent_control_hierarchy?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceControl
     */
    service?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceControl
     */
    title?: string;
}

/**
 * Check if a given object implements the ModelCloudComplianceControl interface.
 */
export function instanceOfModelCloudComplianceControl(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelCloudComplianceControlFromJSON(json: any): ModelCloudComplianceControl {
    return ModelCloudComplianceControlFromJSONTyped(json, false);
}

export function ModelCloudComplianceControlFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelCloudComplianceControl {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'category_hierarchy': !exists(json, 'category_hierarchy') ? undefined : json['category_hierarchy'],
        'category_hierarchy_short': !exists(json, 'category_hierarchy_short') ? undefined : json['category_hierarchy_short'],
        'cloud_provider': !exists(json, 'cloud_provider') ? undefined : json['cloud_provider'],
        'compliance_type': !exists(json, 'compliance_type') ? undefined : json['compliance_type'],
        'control_id': !exists(json, 'control_id') ? undefined : json['control_id'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
        'documentation': !exists(json, 'documentation') ? undefined : json['documentation'],
        'executable': !exists(json, 'executable') ? undefined : json['executable'],
        'node_id': !exists(json, 'node_id') ? undefined : json['node_id'],
        'parent_control_hierarchy': !exists(json, 'parent_control_hierarchy') ? undefined : json['parent_control_hierarchy'],
        'service': !exists(json, 'service') ? undefined : json['service'],
        'title': !exists(json, 'title') ? undefined : json['title'],
    };
}

export function ModelCloudComplianceControlToJSON(value?: ModelCloudComplianceControl | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'category': value.category,
        'category_hierarchy': value.category_hierarchy,
        'category_hierarchy_short': value.category_hierarchy_short,
        'cloud_provider': value.cloud_provider,
        'compliance_type': value.compliance_type,
        'control_id': value.control_id,
        'description': value.description,
        'disabled': value.disabled,
        'documentation': value.documentation,
        'executable': value.executable,
        'node_id': value.node_id,
        'parent_control_hierarchy': value.parent_control_hierarchy,
        'service': value.service,
        'title': value.title,
    };
}

