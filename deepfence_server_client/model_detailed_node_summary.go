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

// checks if the DetailedNodeSummary type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DetailedNodeSummary{}

// DetailedNodeSummary struct for DetailedNodeSummary
type DetailedNodeSummary struct {
	Adjacency []string `json:"adjacency,omitempty"`
	Id *string `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	ImmediateParentId *string `json:"immediate_parent_id,omitempty"`
	Label *string `json:"label,omitempty"`
	LabelMinor *string `json:"labelMinor,omitempty"`
	Metadata []ReportMetadataRow `json:"metadata,omitempty"`
	Metrics []map[string]interface{} `json:"metrics,omitempty"`
	Parents []DetailedParent `json:"parents,omitempty"`
	Pseudo *bool `json:"pseudo,omitempty"`
	Rank *string `json:"rank,omitempty"`
	Shape *string `json:"shape,omitempty"`
	Stack *bool `json:"stack,omitempty"`
	Tables []ReportTable `json:"tables,omitempty"`
	Tag *string `json:"tag,omitempty"`
	Type *string `json:"type,omitempty"`
}

// NewDetailedNodeSummary instantiates a new DetailedNodeSummary object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDetailedNodeSummary() *DetailedNodeSummary {
	this := DetailedNodeSummary{}
	return &this
}

// NewDetailedNodeSummaryWithDefaults instantiates a new DetailedNodeSummary object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDetailedNodeSummaryWithDefaults() *DetailedNodeSummary {
	this := DetailedNodeSummary{}
	return &this
}

// GetAdjacency returns the Adjacency field value if set, zero value otherwise.
func (o *DetailedNodeSummary) GetAdjacency() []string {
	if o == nil || isNil(o.Adjacency) {
		var ret []string
		return ret
	}
	return o.Adjacency
}

// GetAdjacencyOk returns a tuple with the Adjacency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DetailedNodeSummary) GetAdjacencyOk() ([]string, bool) {
	if o == nil || isNil(o.Adjacency) {
		return nil, false
	}
	return o.Adjacency, true
}

// HasAdjacency returns a boolean if a field has been set.
func (o *DetailedNodeSummary) HasAdjacency() bool {
	if o != nil && !isNil(o.Adjacency) {
		return true
	}

	return false
}

// SetAdjacency gets a reference to the given []string and assigns it to the Adjacency field.
func (o *DetailedNodeSummary) SetAdjacency(v []string) {
	o.Adjacency = v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *DetailedNodeSummary) GetId() string {
	if o == nil || isNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DetailedNodeSummary) GetIdOk() (*string, bool) {
	if o == nil || isNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *DetailedNodeSummary) HasId() bool {
	if o != nil && !isNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *DetailedNodeSummary) SetId(v string) {
	o.Id = &v
}

// GetImage returns the Image field value if set, zero value otherwise.
func (o *DetailedNodeSummary) GetImage() string {
	if o == nil || isNil(o.Image) {
		var ret string
		return ret
	}
	return *o.Image
}

// GetImageOk returns a tuple with the Image field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DetailedNodeSummary) GetImageOk() (*string, bool) {
	if o == nil || isNil(o.Image) {
		return nil, false
	}
	return o.Image, true
}

// HasImage returns a boolean if a field has been set.
func (o *DetailedNodeSummary) HasImage() bool {
	if o != nil && !isNil(o.Image) {
		return true
	}

	return false
}

// SetImage gets a reference to the given string and assigns it to the Image field.
func (o *DetailedNodeSummary) SetImage(v string) {
	o.Image = &v
}

// GetImmediateParentId returns the ImmediateParentId field value if set, zero value otherwise.
func (o *DetailedNodeSummary) GetImmediateParentId() string {
	if o == nil || isNil(o.ImmediateParentId) {
		var ret string
		return ret
	}
	return *o.ImmediateParentId
}

// GetImmediateParentIdOk returns a tuple with the ImmediateParentId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DetailedNodeSummary) GetImmediateParentIdOk() (*string, bool) {
	if o == nil || isNil(o.ImmediateParentId) {
		return nil, false
	}
	return o.ImmediateParentId, true
}

// HasImmediateParentId returns a boolean if a field has been set.
func (o *DetailedNodeSummary) HasImmediateParentId() bool {
	if o != nil && !isNil(o.ImmediateParentId) {
		return true
	}

	return false
}

// SetImmediateParentId gets a reference to the given string and assigns it to the ImmediateParentId field.
func (o *DetailedNodeSummary) SetImmediateParentId(v string) {
	o.ImmediateParentId = &v
}

// GetLabel returns the Label field value if set, zero value otherwise.
func (o *DetailedNodeSummary) GetLabel() string {
	if o == nil || isNil(o.Label) {
		var ret string
		return ret
	}
	return *o.Label
}

// GetLabelOk returns a tuple with the Label field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DetailedNodeSummary) GetLabelOk() (*string, bool) {
	if o == nil || isNil(o.Label) {
		return nil, false
	}
	return o.Label, true
}

// HasLabel returns a boolean if a field has been set.
func (o *DetailedNodeSummary) HasLabel() bool {
	if o != nil && !isNil(o.Label) {
		return true
	}

	return false
}

// SetLabel gets a reference to the given string and assigns it to the Label field.
func (o *DetailedNodeSummary) SetLabel(v string) {
	o.Label = &v
}

// GetLabelMinor returns the LabelMinor field value if set, zero value otherwise.
func (o *DetailedNodeSummary) GetLabelMinor() string {
	if o == nil || isNil(o.LabelMinor) {
		var ret string
		return ret
	}
	return *o.LabelMinor
}

// GetLabelMinorOk returns a tuple with the LabelMinor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DetailedNodeSummary) GetLabelMinorOk() (*string, bool) {
	if o == nil || isNil(o.LabelMinor) {
		return nil, false
	}
	return o.LabelMinor, true
}

// HasLabelMinor returns a boolean if a field has been set.
func (o *DetailedNodeSummary) HasLabelMinor() bool {
	if o != nil && !isNil(o.LabelMinor) {
		return true
	}

	return false
}

// SetLabelMinor gets a reference to the given string and assigns it to the LabelMinor field.
func (o *DetailedNodeSummary) SetLabelMinor(v string) {
	o.LabelMinor = &v
}

// GetMetadata returns the Metadata field value if set, zero value otherwise.
func (o *DetailedNodeSummary) GetMetadata() []ReportMetadataRow {
	if o == nil || isNil(o.Metadata) {
		var ret []ReportMetadataRow
		return ret
	}
	return o.Metadata
}

// GetMetadataOk returns a tuple with the Metadata field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DetailedNodeSummary) GetMetadataOk() ([]ReportMetadataRow, bool) {
	if o == nil || isNil(o.Metadata) {
		return nil, false
	}
	return o.Metadata, true
}

// HasMetadata returns a boolean if a field has been set.
func (o *DetailedNodeSummary) HasMetadata() bool {
	if o != nil && !isNil(o.Metadata) {
		return true
	}

	return false
}

// SetMetadata gets a reference to the given []ReportMetadataRow and assigns it to the Metadata field.
func (o *DetailedNodeSummary) SetMetadata(v []ReportMetadataRow) {
	o.Metadata = v
}

// GetMetrics returns the Metrics field value if set, zero value otherwise.
func (o *DetailedNodeSummary) GetMetrics() []map[string]interface{} {
	if o == nil || isNil(o.Metrics) {
		var ret []map[string]interface{}
		return ret
	}
	return o.Metrics
}

// GetMetricsOk returns a tuple with the Metrics field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DetailedNodeSummary) GetMetricsOk() ([]map[string]interface{}, bool) {
	if o == nil || isNil(o.Metrics) {
		return nil, false
	}
	return o.Metrics, true
}

// HasMetrics returns a boolean if a field has been set.
func (o *DetailedNodeSummary) HasMetrics() bool {
	if o != nil && !isNil(o.Metrics) {
		return true
	}

	return false
}

// SetMetrics gets a reference to the given []map[string]interface{} and assigns it to the Metrics field.
func (o *DetailedNodeSummary) SetMetrics(v []map[string]interface{}) {
	o.Metrics = v
}

// GetParents returns the Parents field value if set, zero value otherwise.
func (o *DetailedNodeSummary) GetParents() []DetailedParent {
	if o == nil || isNil(o.Parents) {
		var ret []DetailedParent
		return ret
	}
	return o.Parents
}

// GetParentsOk returns a tuple with the Parents field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DetailedNodeSummary) GetParentsOk() ([]DetailedParent, bool) {
	if o == nil || isNil(o.Parents) {
		return nil, false
	}
	return o.Parents, true
}

// HasParents returns a boolean if a field has been set.
func (o *DetailedNodeSummary) HasParents() bool {
	if o != nil && !isNil(o.Parents) {
		return true
	}

	return false
}

// SetParents gets a reference to the given []DetailedParent and assigns it to the Parents field.
func (o *DetailedNodeSummary) SetParents(v []DetailedParent) {
	o.Parents = v
}

// GetPseudo returns the Pseudo field value if set, zero value otherwise.
func (o *DetailedNodeSummary) GetPseudo() bool {
	if o == nil || isNil(o.Pseudo) {
		var ret bool
		return ret
	}
	return *o.Pseudo
}

// GetPseudoOk returns a tuple with the Pseudo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DetailedNodeSummary) GetPseudoOk() (*bool, bool) {
	if o == nil || isNil(o.Pseudo) {
		return nil, false
	}
	return o.Pseudo, true
}

// HasPseudo returns a boolean if a field has been set.
func (o *DetailedNodeSummary) HasPseudo() bool {
	if o != nil && !isNil(o.Pseudo) {
		return true
	}

	return false
}

// SetPseudo gets a reference to the given bool and assigns it to the Pseudo field.
func (o *DetailedNodeSummary) SetPseudo(v bool) {
	o.Pseudo = &v
}

// GetRank returns the Rank field value if set, zero value otherwise.
func (o *DetailedNodeSummary) GetRank() string {
	if o == nil || isNil(o.Rank) {
		var ret string
		return ret
	}
	return *o.Rank
}

// GetRankOk returns a tuple with the Rank field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DetailedNodeSummary) GetRankOk() (*string, bool) {
	if o == nil || isNil(o.Rank) {
		return nil, false
	}
	return o.Rank, true
}

// HasRank returns a boolean if a field has been set.
func (o *DetailedNodeSummary) HasRank() bool {
	if o != nil && !isNil(o.Rank) {
		return true
	}

	return false
}

// SetRank gets a reference to the given string and assigns it to the Rank field.
func (o *DetailedNodeSummary) SetRank(v string) {
	o.Rank = &v
}

// GetShape returns the Shape field value if set, zero value otherwise.
func (o *DetailedNodeSummary) GetShape() string {
	if o == nil || isNil(o.Shape) {
		var ret string
		return ret
	}
	return *o.Shape
}

// GetShapeOk returns a tuple with the Shape field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DetailedNodeSummary) GetShapeOk() (*string, bool) {
	if o == nil || isNil(o.Shape) {
		return nil, false
	}
	return o.Shape, true
}

// HasShape returns a boolean if a field has been set.
func (o *DetailedNodeSummary) HasShape() bool {
	if o != nil && !isNil(o.Shape) {
		return true
	}

	return false
}

// SetShape gets a reference to the given string and assigns it to the Shape field.
func (o *DetailedNodeSummary) SetShape(v string) {
	o.Shape = &v
}

// GetStack returns the Stack field value if set, zero value otherwise.
func (o *DetailedNodeSummary) GetStack() bool {
	if o == nil || isNil(o.Stack) {
		var ret bool
		return ret
	}
	return *o.Stack
}

// GetStackOk returns a tuple with the Stack field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DetailedNodeSummary) GetStackOk() (*bool, bool) {
	if o == nil || isNil(o.Stack) {
		return nil, false
	}
	return o.Stack, true
}

// HasStack returns a boolean if a field has been set.
func (o *DetailedNodeSummary) HasStack() bool {
	if o != nil && !isNil(o.Stack) {
		return true
	}

	return false
}

// SetStack gets a reference to the given bool and assigns it to the Stack field.
func (o *DetailedNodeSummary) SetStack(v bool) {
	o.Stack = &v
}

// GetTables returns the Tables field value if set, zero value otherwise.
func (o *DetailedNodeSummary) GetTables() []ReportTable {
	if o == nil || isNil(o.Tables) {
		var ret []ReportTable
		return ret
	}
	return o.Tables
}

// GetTablesOk returns a tuple with the Tables field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DetailedNodeSummary) GetTablesOk() ([]ReportTable, bool) {
	if o == nil || isNil(o.Tables) {
		return nil, false
	}
	return o.Tables, true
}

// HasTables returns a boolean if a field has been set.
func (o *DetailedNodeSummary) HasTables() bool {
	if o != nil && !isNil(o.Tables) {
		return true
	}

	return false
}

// SetTables gets a reference to the given []ReportTable and assigns it to the Tables field.
func (o *DetailedNodeSummary) SetTables(v []ReportTable) {
	o.Tables = v
}

// GetTag returns the Tag field value if set, zero value otherwise.
func (o *DetailedNodeSummary) GetTag() string {
	if o == nil || isNil(o.Tag) {
		var ret string
		return ret
	}
	return *o.Tag
}

// GetTagOk returns a tuple with the Tag field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DetailedNodeSummary) GetTagOk() (*string, bool) {
	if o == nil || isNil(o.Tag) {
		return nil, false
	}
	return o.Tag, true
}

// HasTag returns a boolean if a field has been set.
func (o *DetailedNodeSummary) HasTag() bool {
	if o != nil && !isNil(o.Tag) {
		return true
	}

	return false
}

// SetTag gets a reference to the given string and assigns it to the Tag field.
func (o *DetailedNodeSummary) SetTag(v string) {
	o.Tag = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *DetailedNodeSummary) GetType() string {
	if o == nil || isNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DetailedNodeSummary) GetTypeOk() (*string, bool) {
	if o == nil || isNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *DetailedNodeSummary) HasType() bool {
	if o != nil && !isNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *DetailedNodeSummary) SetType(v string) {
	o.Type = &v
}

func (o DetailedNodeSummary) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DetailedNodeSummary) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.Adjacency) {
		toSerialize["adjacency"] = o.Adjacency
	}
	if !isNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !isNil(o.Image) {
		toSerialize["image"] = o.Image
	}
	if !isNil(o.ImmediateParentId) {
		toSerialize["immediate_parent_id"] = o.ImmediateParentId
	}
	if !isNil(o.Label) {
		toSerialize["label"] = o.Label
	}
	if !isNil(o.LabelMinor) {
		toSerialize["labelMinor"] = o.LabelMinor
	}
	if !isNil(o.Metadata) {
		toSerialize["metadata"] = o.Metadata
	}
	if !isNil(o.Metrics) {
		toSerialize["metrics"] = o.Metrics
	}
	if !isNil(o.Parents) {
		toSerialize["parents"] = o.Parents
	}
	if !isNil(o.Pseudo) {
		toSerialize["pseudo"] = o.Pseudo
	}
	if !isNil(o.Rank) {
		toSerialize["rank"] = o.Rank
	}
	if !isNil(o.Shape) {
		toSerialize["shape"] = o.Shape
	}
	if !isNil(o.Stack) {
		toSerialize["stack"] = o.Stack
	}
	if !isNil(o.Tables) {
		toSerialize["tables"] = o.Tables
	}
	if !isNil(o.Tag) {
		toSerialize["tag"] = o.Tag
	}
	if !isNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	return toSerialize, nil
}

type NullableDetailedNodeSummary struct {
	value *DetailedNodeSummary
	isSet bool
}

func (v NullableDetailedNodeSummary) Get() *DetailedNodeSummary {
	return v.value
}

func (v *NullableDetailedNodeSummary) Set(val *DetailedNodeSummary) {
	v.value = val
	v.isSet = true
}

func (v NullableDetailedNodeSummary) IsSet() bool {
	return v.isSet
}

func (v *NullableDetailedNodeSummary) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDetailedNodeSummary(val *DetailedNodeSummary) *NullableDetailedNodeSummary {
	return &NullableDetailedNodeSummary{value: val, isSet: true}
}

func (v NullableDetailedNodeSummary) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDetailedNodeSummary) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


