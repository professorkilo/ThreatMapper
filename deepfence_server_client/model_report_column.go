/*
Deepfence ThreatMapper

Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.

API version: 2.0.0
Contact: community@deepfence.io
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package deepfence_server_client

import (
	"encoding/json"
)

// checks if the ReportColumn type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReportColumn{}

// ReportColumn struct for ReportColumn
type ReportColumn struct {
	DataType *string `json:"dataType,omitempty"`
	Id *string `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
}

// NewReportColumn instantiates a new ReportColumn object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReportColumn() *ReportColumn {
	this := ReportColumn{}
	return &this
}

// NewReportColumnWithDefaults instantiates a new ReportColumn object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReportColumnWithDefaults() *ReportColumn {
	this := ReportColumn{}
	return &this
}

// GetDataType returns the DataType field value if set, zero value otherwise.
func (o *ReportColumn) GetDataType() string {
	if o == nil || isNil(o.DataType) {
		var ret string
		return ret
	}
	return *o.DataType
}

// GetDataTypeOk returns a tuple with the DataType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReportColumn) GetDataTypeOk() (*string, bool) {
	if o == nil || isNil(o.DataType) {
		return nil, false
	}
	return o.DataType, true
}

// HasDataType returns a boolean if a field has been set.
func (o *ReportColumn) HasDataType() bool {
	if o != nil && !isNil(o.DataType) {
		return true
	}

	return false
}

// SetDataType gets a reference to the given string and assigns it to the DataType field.
func (o *ReportColumn) SetDataType(v string) {
	o.DataType = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *ReportColumn) GetId() string {
	if o == nil || isNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReportColumn) GetIdOk() (*string, bool) {
	if o == nil || isNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *ReportColumn) HasId() bool {
	if o != nil && !isNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *ReportColumn) SetId(v string) {
	o.Id = &v
}

// GetLabel returns the Label field value if set, zero value otherwise.
func (o *ReportColumn) GetLabel() string {
	if o == nil || isNil(o.Label) {
		var ret string
		return ret
	}
	return *o.Label
}

// GetLabelOk returns a tuple with the Label field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReportColumn) GetLabelOk() (*string, bool) {
	if o == nil || isNil(o.Label) {
		return nil, false
	}
	return o.Label, true
}

// HasLabel returns a boolean if a field has been set.
func (o *ReportColumn) HasLabel() bool {
	if o != nil && !isNil(o.Label) {
		return true
	}

	return false
}

// SetLabel gets a reference to the given string and assigns it to the Label field.
func (o *ReportColumn) SetLabel(v string) {
	o.Label = &v
}

func (o ReportColumn) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReportColumn) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.DataType) {
		toSerialize["dataType"] = o.DataType
	}
	if !isNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !isNil(o.Label) {
		toSerialize["label"] = o.Label
	}
	return toSerialize, nil
}

type NullableReportColumn struct {
	value *ReportColumn
	isSet bool
}

func (v NullableReportColumn) Get() *ReportColumn {
	return v.value
}

func (v *NullableReportColumn) Set(val *ReportColumn) {
	v.value = val
	v.isSet = true
}

func (v NullableReportColumn) IsSet() bool {
	return v.isSet
}

func (v *NullableReportColumn) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReportColumn(val *ReportColumn) *NullableReportColumn {
	return &NullableReportColumn{value: val, isSet: true}
}

func (v NullableReportColumn) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReportColumn) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


