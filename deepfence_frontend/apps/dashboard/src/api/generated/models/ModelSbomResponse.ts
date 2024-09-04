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
 * @interface ModelSbomResponse
 */
export interface ModelSbomResponse {
    /**
     * 
     * @type {string}
     * @memberof ModelSbomResponse
     */
    cve_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelSbomResponse
     */
    cve_node_id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelSbomResponse
     */
    licenses?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelSbomResponse
     */
    locations?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ModelSbomResponse
     */
    package_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelSbomResponse
     */
    severity?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelSbomResponse
     */
    version?: string;
}

/**
 * Check if a given object implements the ModelSbomResponse interface.
 */
export function instanceOfModelSbomResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelSbomResponseFromJSON(json: any): ModelSbomResponse {
    return ModelSbomResponseFromJSONTyped(json, false);
}

export function ModelSbomResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelSbomResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cve_id': !exists(json, 'cve_id') ? undefined : json['cve_id'],
        'cve_node_id': !exists(json, 'cve_node_id') ? undefined : json['cve_node_id'],
        'licenses': !exists(json, 'licenses') ? undefined : json['licenses'],
        'locations': !exists(json, 'locations') ? undefined : json['locations'],
        'package_name': !exists(json, 'package_name') ? undefined : json['package_name'],
        'severity': !exists(json, 'severity') ? undefined : json['severity'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function ModelSbomResponseToJSON(value?: ModelSbomResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cve_id': value.cve_id,
        'cve_node_id': value.cve_node_id,
        'licenses': value.licenses,
        'locations': value.locations,
        'package_name': value.package_name,
        'severity': value.severity,
        'version': value.version,
    };
}

