/*
Deepfence ThreatMapper

Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.

API version: 2.0.0
Contact: community@deepfence.io
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// ControlsAction struct for ControlsAction
type ControlsAction struct {
	Id *int32 `json:"id,omitempty"`
	RequestPayload []byte `json:"request_payload,omitempty"`
}

// NewControlsAction instantiates a new ControlsAction object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewControlsAction() *ControlsAction {
	this := ControlsAction{}
	return &this
}

// NewControlsActionWithDefaults instantiates a new ControlsAction object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewControlsActionWithDefaults() *ControlsAction {
	this := ControlsAction{}
	return &this
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *ControlsAction) GetId() int32 {
	if o == nil || isNil(o.Id) {
		var ret int32
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ControlsAction) GetIdOk() (*int32, bool) {
	if o == nil || isNil(o.Id) {
    return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *ControlsAction) HasId() bool {
	if o != nil && !isNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given int32 and assigns it to the Id field.
func (o *ControlsAction) SetId(v int32) {
	o.Id = &v
}

// GetRequestPayload returns the RequestPayload field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *ControlsAction) GetRequestPayload() []byte {
	if o == nil {
		var ret []byte
		return ret
	}
	return o.RequestPayload
}

// GetRequestPayloadOk returns a tuple with the RequestPayload field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ControlsAction) GetRequestPayloadOk() ([]byte, bool) {
	if o == nil || isNil(o.RequestPayload) {
    return nil, false
	}
	return o.RequestPayload, true
}

// HasRequestPayload returns a boolean if a field has been set.
func (o *ControlsAction) HasRequestPayload() bool {
	if o != nil && isNil(o.RequestPayload) {
		return true
	}

	return false
}

// SetRequestPayload gets a reference to the given []byte and assigns it to the RequestPayload field.
func (o *ControlsAction) SetRequestPayload(v []byte) {
	o.RequestPayload = v
}

func (o ControlsAction) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if o.RequestPayload != nil {
		toSerialize["request_payload"] = o.RequestPayload
	}
	return json.Marshal(toSerialize)
}

type NullableControlsAction struct {
	value *ControlsAction
	isSet bool
}

func (v NullableControlsAction) Get() *ControlsAction {
	return v.value
}

func (v *NullableControlsAction) Set(val *ControlsAction) {
	v.value = val
	v.isSet = true
}

func (v NullableControlsAction) IsSet() bool {
	return v.isSet
}

func (v *NullableControlsAction) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableControlsAction(val *ControlsAction) *NullableControlsAction {
	return &NullableControlsAction{value: val, isSet: true}
}

func (v NullableControlsAction) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableControlsAction) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


