module github.com/deepfence/ThreatMapper/deepfence_agent/tools/apache/deepfence/df-utils/get_cloud_instance_id

go 1.20

replace github.com/deepfence/df-utils => ../../df-utils/

replace github.com/deepfence/df-utils/cloud_metadata => ../cloud_metadata

require github.com/deepfence/df-utils/cloud_metadata v0.0.0-00010101000000-000000000000

replace github.com/deepfence/ThreatMapper/deepfence_utils => ../../../../../../deepfence_utils

require (
	github.com/deepfence/ThreatMapper/deepfence_utils v0.0.0-00010101000000-000000000000 // indirect
	github.com/deepfence/df-utils v0.0.0-00010101000000-000000000000 // indirect
	github.com/mattn/go-colorable v0.1.12 // indirect
	github.com/mattn/go-isatty v0.0.14 // indirect
	github.com/rs/zerolog v1.30.0 // indirect
	github.com/weaveworks/scope v1.13.2 // indirect
	golang.org/x/sys v0.12.0 // indirect
)
