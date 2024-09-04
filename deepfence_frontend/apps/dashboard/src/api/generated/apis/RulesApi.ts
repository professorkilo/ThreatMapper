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


import * as runtime from '../runtime';
import type {
  ApiDocsBadRequestResponse,
  ApiDocsFailureResponse,
  ModelRulesActionRequest,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    ModelRulesActionRequestFromJSON,
    ModelRulesActionRequestToJSON,
} from '../models';

export interface MaskRulesRequest {
    modelRulesActionRequest?: ModelRulesActionRequest;
}

export interface UnmaskRulesRequest {
    modelRulesActionRequest?: ModelRulesActionRequest;
}

/**
 * RulesApi - interface
 * 
 * @export
 * @interface RulesApiInterface
 */
export interface RulesApiInterface {
    /**
     * mask rules
     * @summary mask Rules
     * @param {ModelRulesActionRequest} [modelRulesActionRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    maskRulesRaw(requestParameters: MaskRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * mask rules
     * mask Rules
     */
    maskRules(requestParameters: MaskRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Unmask rules
     * @summary Unmask Rules
     * @param {ModelRulesActionRequest} [modelRulesActionRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    unmaskRulesRaw(requestParameters: UnmaskRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Unmask rules
     * Unmask Rules
     */
    unmaskRules(requestParameters: UnmaskRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class RulesApi extends runtime.BaseAPI implements RulesApiInterface {

    /**
     * mask rules
     * mask Rules
     */
    async maskRulesRaw(requestParameters: MaskRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/rules/action/mask`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelRulesActionRequestToJSON(requestParameters.modelRulesActionRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * mask rules
     * mask Rules
     */
    async maskRules(requestParameters: MaskRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.maskRulesRaw(requestParameters, initOverrides);
    }

    /**
     * Unmask rules
     * Unmask Rules
     */
    async unmaskRulesRaw(requestParameters: UnmaskRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/rules/action/unmask`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelRulesActionRequestToJSON(requestParameters.modelRulesActionRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Unmask rules
     * Unmask Rules
     */
    async unmaskRules(requestParameters: UnmaskRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.unmaskRulesRaw(requestParameters, initOverrides);
    }

}
