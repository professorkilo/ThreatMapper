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
  ModelAPITokenResponse,
  ModelInviteUserRequest,
  ModelInviteUserResponse,
  ModelLoginResponse,
  ModelMessageResponse,
  ModelPasswordResetRequest,
  ModelPasswordResetVerifyRequest,
  ModelRegisterInvitedUserRequest,
  ModelUpdateUserIDRequest,
  ModelUpdateUserPasswordRequest,
  ModelUpdateUserRequest,
  ModelUser,
  ModelUserRegisterRequest,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    ModelAPITokenResponseFromJSON,
    ModelAPITokenResponseToJSON,
    ModelInviteUserRequestFromJSON,
    ModelInviteUserRequestToJSON,
    ModelInviteUserResponseFromJSON,
    ModelInviteUserResponseToJSON,
    ModelLoginResponseFromJSON,
    ModelLoginResponseToJSON,
    ModelMessageResponseFromJSON,
    ModelMessageResponseToJSON,
    ModelPasswordResetRequestFromJSON,
    ModelPasswordResetRequestToJSON,
    ModelPasswordResetVerifyRequestFromJSON,
    ModelPasswordResetVerifyRequestToJSON,
    ModelRegisterInvitedUserRequestFromJSON,
    ModelRegisterInvitedUserRequestToJSON,
    ModelUpdateUserIDRequestFromJSON,
    ModelUpdateUserIDRequestToJSON,
    ModelUpdateUserPasswordRequestFromJSON,
    ModelUpdateUserPasswordRequestToJSON,
    ModelUpdateUserRequestFromJSON,
    ModelUpdateUserRequestToJSON,
    ModelUserFromJSON,
    ModelUserToJSON,
    ModelUserRegisterRequestFromJSON,
    ModelUserRegisterRequestToJSON,
} from '../models';

export interface DeleteUserRequest {
    id: number;
}

export interface GetUserRequest {
    id: number;
}

export interface InviteUserRequest {
    modelInviteUserRequest?: ModelInviteUserRequest;
}

export interface RegisterInvitedUserRequest {
    modelRegisterInvitedUserRequest?: ModelRegisterInvitedUserRequest;
}

export interface RegisterUserRequest {
    modelUserRegisterRequest?: ModelUserRegisterRequest;
}

export interface ResetPasswordRequestRequest {
    modelPasswordResetRequest?: ModelPasswordResetRequest;
}

export interface UpdateCurrentUserRequest {
    modelUpdateUserRequest?: ModelUpdateUserRequest;
}

export interface UpdatePasswordRequest {
    modelUpdateUserPasswordRequest?: ModelUpdateUserPasswordRequest;
}

export interface UpdateUserRequest {
    id: number;
    modelUpdateUserIDRequest?: ModelUpdateUserIDRequest;
}

export interface VerifyResetPasswordRequestRequest {
    modelPasswordResetVerifyRequest?: ModelPasswordResetVerifyRequest;
}

/**
 * UserApi - interface
 * 
 * @export
 * @interface UserApiInterface
 */
export interface UserApiInterface {
    /**
     * Delete logged in user
     * @summary Delete Current User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    deleteCurrentUserRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete logged in user
     * Delete Current User
     */
    deleteCurrentUser(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Delete User by User ID
     * @summary Delete User by User ID
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete User by User ID
     * Delete User by User ID
     */
    deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Get logged in user\'s API Tokens
     * @summary Get User\'s API Tokens
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getApiTokensRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelAPITokenResponse>>>;

    /**
     * Get logged in user\'s API Tokens
     * Get User\'s API Tokens
     */
    getApiTokens(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelAPITokenResponse>>;

    /**
     * Get logged in user information
     * @summary Get Current User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getCurrentUserRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelUser>>;

    /**
     * Get logged in user information
     * Get Current User
     */
    getCurrentUser(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelUser>;

    /**
     * Get User by User ID
     * @summary Get User by User ID
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getUserRaw(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelUser>>;

    /**
     * Get User by User ID
     * Get User by User ID
     */
    getUser(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelUser>;

    /**
     * Get all users
     * @summary Get all users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getUsersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelUser>>>;

    /**
     * Get all users
     * Get all users
     */
    getUsers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelUser>>;

    /**
     * Invite a user
     * @summary Invite User
     * @param {ModelInviteUserRequest} [modelInviteUserRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    inviteUserRaw(requestParameters: InviteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelInviteUserResponse>>;

    /**
     * Invite a user
     * Invite User
     */
    inviteUser(requestParameters: InviteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelInviteUserResponse>;

    /**
     * Register invited user
     * @summary Register Invited User
     * @param {ModelRegisterInvitedUserRequest} [modelRegisterInvitedUserRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    registerInvitedUserRaw(requestParameters: RegisterInvitedUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelLoginResponse>>;

    /**
     * Register invited user
     * Register Invited User
     */
    registerInvitedUser(requestParameters: RegisterInvitedUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelLoginResponse>;

    /**
     * First user registration. Further users needs to be invited.
     * @summary Register User
     * @param {ModelUserRegisterRequest} [modelUserRegisterRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    registerUserRaw(requestParameters: RegisterUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelLoginResponse>>;

    /**
     * First user registration. Further users needs to be invited.
     * Register User
     */
    registerUser(requestParameters: RegisterUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelLoginResponse>;

    /**
     * Reset user\'s API Tokens
     * @summary Reset User\'s API Tokens
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    resetApiTokensRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelAPITokenResponse>>>;

    /**
     * Reset user\'s API Tokens
     * Reset User\'s API Tokens
     */
    resetApiTokens(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelAPITokenResponse>>;

    /**
     * Request for resetting the password
     * @summary Reset Password Request
     * @param {ModelPasswordResetRequest} [modelPasswordResetRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    resetPasswordRequestRaw(requestParameters: ResetPasswordRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>>;

    /**
     * Request for resetting the password
     * Reset Password Request
     */
    resetPasswordRequest(requestParameters: ResetPasswordRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse>;

    /**
     * Update logged in user information
     * @summary Update Current User
     * @param {ModelUpdateUserRequest} [modelUpdateUserRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    updateCurrentUserRaw(requestParameters: UpdateCurrentUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelUser>>;

    /**
     * Update logged in user information
     * Update Current User
     */
    updateCurrentUser(requestParameters: UpdateCurrentUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelUser>;

    /**
     * Update current user\'s password
     * @summary Update Password
     * @param {ModelUpdateUserPasswordRequest} [modelUpdateUserPasswordRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    updatePasswordRaw(requestParameters: UpdatePasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Update current user\'s password
     * Update Password
     */
    updatePassword(requestParameters: UpdatePasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Update User by User ID
     * @summary Update User by User ID
     * @param {number} id 
     * @param {ModelUpdateUserIDRequest} [modelUpdateUserIDRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelUser>>;

    /**
     * Update User by User ID
     * Update User by User ID
     */
    updateUser(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelUser>;

    /**
     * Verify code and reset the password
     * @summary Verify and Reset Password
     * @param {ModelPasswordResetVerifyRequest} [modelPasswordResetVerifyRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    verifyResetPasswordRequestRaw(requestParameters: VerifyResetPasswordRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Verify code and reset the password
     * Verify and Reset Password
     */
    verifyResetPasswordRequest(requestParameters: VerifyResetPasswordRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI implements UserApiInterface {

    /**
     * Delete logged in user
     * Delete Current User
     */
    async deleteCurrentUserRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/user`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete logged in user
     * Delete Current User
     */
    async deleteCurrentUser(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCurrentUserRaw(initOverrides);
    }

    /**
     * Delete User by User ID
     * Delete User by User ID
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete User by User ID
     * Delete User by User ID
     */
    async deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteUserRaw(requestParameters, initOverrides);
    }

    /**
     * Get logged in user\'s API Tokens
     * Get User\'s API Tokens
     */
    async getApiTokensRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelAPITokenResponse>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/api-token`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelAPITokenResponseFromJSON));
    }

    /**
     * Get logged in user\'s API Tokens
     * Get User\'s API Tokens
     */
    async getApiTokens(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelAPITokenResponse>> {
        const response = await this.getApiTokensRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get logged in user information
     * Get Current User
     */
    async getCurrentUserRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelUser>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelUserFromJSON(jsonValue));
    }

    /**
     * Get logged in user information
     * Get Current User
     */
    async getCurrentUser(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelUser> {
        const response = await this.getCurrentUserRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get User by User ID
     * Get User by User ID
     */
    async getUserRaw(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelUser>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelUserFromJSON(jsonValue));
    }

    /**
     * Get User by User ID
     * Get User by User ID
     */
    async getUser(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelUser> {
        const response = await this.getUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all users
     * Get all users
     */
    async getUsersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelUser>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelUserFromJSON));
    }

    /**
     * Get all users
     * Get all users
     */
    async getUsers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelUser>> {
        const response = await this.getUsersRaw(initOverrides);
        return await response.value();
    }

    /**
     * Invite a user
     * Invite User
     */
    async inviteUserRaw(requestParameters: InviteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelInviteUserResponse>> {
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
            path: `/deepfence/user/invite`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelInviteUserRequestToJSON(requestParameters.modelInviteUserRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelInviteUserResponseFromJSON(jsonValue));
    }

    /**
     * Invite a user
     * Invite User
     */
    async inviteUser(requestParameters: InviteUserRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelInviteUserResponse> {
        const response = await this.inviteUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Register invited user
     * Register Invited User
     */
    async registerInvitedUserRaw(requestParameters: RegisterInvitedUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelLoginResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/deepfence/user/invite/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelRegisterInvitedUserRequestToJSON(requestParameters.modelRegisterInvitedUserRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelLoginResponseFromJSON(jsonValue));
    }

    /**
     * Register invited user
     * Register Invited User
     */
    async registerInvitedUser(requestParameters: RegisterInvitedUserRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelLoginResponse> {
        const response = await this.registerInvitedUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * First user registration. Further users needs to be invited.
     * Register User
     */
    async registerUserRaw(requestParameters: RegisterUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelLoginResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/deepfence/user/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelUserRegisterRequestToJSON(requestParameters.modelUserRegisterRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelLoginResponseFromJSON(jsonValue));
    }

    /**
     * First user registration. Further users needs to be invited.
     * Register User
     */
    async registerUser(requestParameters: RegisterUserRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelLoginResponse> {
        const response = await this.registerUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Reset user\'s API Tokens
     * Reset User\'s API Tokens
     */
    async resetApiTokensRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelAPITokenResponse>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/api-token/reset`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelAPITokenResponseFromJSON));
    }

    /**
     * Reset user\'s API Tokens
     * Reset User\'s API Tokens
     */
    async resetApiTokens(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelAPITokenResponse>> {
        const response = await this.resetApiTokensRaw(initOverrides);
        return await response.value();
    }

    /**
     * Request for resetting the password
     * Reset Password Request
     */
    async resetPasswordRequestRaw(requestParameters: ResetPasswordRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/deepfence/user/reset-password/request`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelPasswordResetRequestToJSON(requestParameters.modelPasswordResetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelMessageResponseFromJSON(jsonValue));
    }

    /**
     * Request for resetting the password
     * Reset Password Request
     */
    async resetPasswordRequest(requestParameters: ResetPasswordRequestRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse> {
        const response = await this.resetPasswordRequestRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update logged in user information
     * Update Current User
     */
    async updateCurrentUserRaw(requestParameters: UpdateCurrentUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelUser>> {
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
            path: `/deepfence/user`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ModelUpdateUserRequestToJSON(requestParameters.modelUpdateUserRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelUserFromJSON(jsonValue));
    }

    /**
     * Update logged in user information
     * Update Current User
     */
    async updateCurrentUser(requestParameters: UpdateCurrentUserRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelUser> {
        const response = await this.updateCurrentUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update current user\'s password
     * Update Password
     */
    async updatePasswordRaw(requestParameters: UpdatePasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/deepfence/user/password`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ModelUpdateUserPasswordRequestToJSON(requestParameters.modelUpdateUserPasswordRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update current user\'s password
     * Update Password
     */
    async updatePassword(requestParameters: UpdatePasswordRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updatePasswordRaw(requestParameters, initOverrides);
    }

    /**
     * Update User by User ID
     * Update User by User ID
     */
    async updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelUser>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateUser.');
        }

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
            path: `/deepfence/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ModelUpdateUserIDRequestToJSON(requestParameters.modelUpdateUserIDRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelUserFromJSON(jsonValue));
    }

    /**
     * Update User by User ID
     * Update User by User ID
     */
    async updateUser(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelUser> {
        const response = await this.updateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify code and reset the password
     * Verify and Reset Password
     */
    async verifyResetPasswordRequestRaw(requestParameters: VerifyResetPasswordRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/deepfence/user/reset-password/verify`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelPasswordResetVerifyRequestToJSON(requestParameters.modelPasswordResetVerifyRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Verify code and reset the password
     * Verify and Reset Password
     */
    async verifyResetPasswordRequest(requestParameters: VerifyResetPasswordRequestRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.verifyResetPasswordRequestRaw(requestParameters, initOverrides);
    }

}
