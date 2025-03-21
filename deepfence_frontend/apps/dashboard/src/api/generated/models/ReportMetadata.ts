/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: v2.5.3
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
 * @interface ReportMetadata
 */
export interface ReportMetadata {
    /**
     * 
     * @type {boolean}
     * @memberof ReportMetadata
     */
    agent_running?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    availability_zone?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    cloud_account_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    cloud_provider?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    cloud_region?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    cmdline?: string;
    /**
     * 
     * @type {number}
     * @memberof ReportMetadata
     */
    connection_count?: number;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    copy_of?: string;
    /**
     * 
     * @type {number}
     * @memberof ReportMetadata
     */
    cpu_max?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportMetadata
     */
    cpu_usage?: number;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_container_command?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_container_created?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReportMetadata
     */
    docker_container_ips?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_container_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_container_network_mode?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_container_networks?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_container_ports?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_container_state?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_container_state_human?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_env?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_image_created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_image_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_image_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_image_name_with_tag?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_image_size?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_image_tag?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_image_virtual_size?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    docker_label?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    host_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    instance_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    instance_type?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    interface_ip_map?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReportMetadata
     */
    interface_ips?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReportMetadata
     */
    interface_names?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof ReportMetadata
     */
    is_console_vm?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReportMetadata
     */
    is_deepfence_system?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    kernel_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    kernel_version?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    kubernetes_cluster_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    kubernetes_cluster_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    kubernetes_created?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReportMetadata
     */
    kubernetes_ingress_ip?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    kubernetes_ip?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReportMetadata
     */
    kubernetes_is_in_host_network?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    kubernetes_labels?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    kubernetes_namespace?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReportMetadata
     */
    kubernetes_ports?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    kubernetes_public_ip?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    kubernetes_state?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    kubernetes_type?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReportMetadata
     */
    local_cidr?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReportMetadata
     */
    local_networks?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ReportMetadata
     */
    memory_max?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportMetadata
     */
    memory_usage?: number;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    node_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    node_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    node_type?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReportMetadata
     */
    open_files?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ReportMetadata
     */
    open_files_count?: number;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    os?: string;
    /**
     * 
     * @type {number}
     * @memberof ReportMetadata
     */
    pid?: number;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    pod_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    pod_name?: string;
    /**
     * 
     * @type {number}
     * @memberof ReportMetadata
     */
    ppid?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReportMetadata
     */
    private_ip?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof ReportMetadata
     */
    pseudo?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReportMetadata
     */
    public_ip?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    resource_group?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    short_name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReportMetadata
     */
    tags?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ReportMetadata
     */
    threads?: number;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    timestamp?: string;
    /**
     * 
     * @type {number}
     * @memberof ReportMetadata
     */
    uptime?: number;
    /**
     * 
     * @type {string}
     * @memberof ReportMetadata
     */
    version?: string;
}

/**
 * Check if a given object implements the ReportMetadata interface.
 */
export function instanceOfReportMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReportMetadataFromJSON(json: any): ReportMetadata {
    return ReportMetadataFromJSONTyped(json, false);
}

export function ReportMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'agent_running': !exists(json, 'agent_running') ? undefined : json['agent_running'],
        'availability_zone': !exists(json, 'availability_zone') ? undefined : json['availability_zone'],
        'cloud_account_id': !exists(json, 'cloud_account_id') ? undefined : json['cloud_account_id'],
        'cloud_provider': !exists(json, 'cloud_provider') ? undefined : json['cloud_provider'],
        'cloud_region': !exists(json, 'cloud_region') ? undefined : json['cloud_region'],
        'cmdline': !exists(json, 'cmdline') ? undefined : json['cmdline'],
        'connection_count': !exists(json, 'connection_count') ? undefined : json['connection_count'],
        'copy_of': !exists(json, 'copy_of') ? undefined : json['copy_of'],
        'cpu_max': !exists(json, 'cpu_max') ? undefined : json['cpu_max'],
        'cpu_usage': !exists(json, 'cpu_usage') ? undefined : json['cpu_usage'],
        'docker_container_command': !exists(json, 'docker_container_command') ? undefined : json['docker_container_command'],
        'docker_container_created': !exists(json, 'docker_container_created') ? undefined : json['docker_container_created'],
        'docker_container_ips': !exists(json, 'docker_container_ips') ? undefined : json['docker_container_ips'],
        'docker_container_name': !exists(json, 'docker_container_name') ? undefined : json['docker_container_name'],
        'docker_container_network_mode': !exists(json, 'docker_container_network_mode') ? undefined : json['docker_container_network_mode'],
        'docker_container_networks': !exists(json, 'docker_container_networks') ? undefined : json['docker_container_networks'],
        'docker_container_ports': !exists(json, 'docker_container_ports') ? undefined : json['docker_container_ports'],
        'docker_container_state': !exists(json, 'docker_container_state') ? undefined : json['docker_container_state'],
        'docker_container_state_human': !exists(json, 'docker_container_state_human') ? undefined : json['docker_container_state_human'],
        'docker_env': !exists(json, 'docker_env') ? undefined : json['docker_env'],
        'docker_image_created_at': !exists(json, 'docker_image_created_at') ? undefined : json['docker_image_created_at'],
        'docker_image_id': !exists(json, 'docker_image_id') ? undefined : json['docker_image_id'],
        'docker_image_name': !exists(json, 'docker_image_name') ? undefined : json['docker_image_name'],
        'docker_image_name_with_tag': !exists(json, 'docker_image_name_with_tag') ? undefined : json['docker_image_name_with_tag'],
        'docker_image_size': !exists(json, 'docker_image_size') ? undefined : json['docker_image_size'],
        'docker_image_tag': !exists(json, 'docker_image_tag') ? undefined : json['docker_image_tag'],
        'docker_image_virtual_size': !exists(json, 'docker_image_virtual_size') ? undefined : json['docker_image_virtual_size'],
        'docker_label': !exists(json, 'docker_label') ? undefined : json['docker_label'],
        'host_name': !exists(json, 'host_name') ? undefined : json['host_name'],
        'instance_id': !exists(json, 'instance_id') ? undefined : json['instance_id'],
        'instance_type': !exists(json, 'instance_type') ? undefined : json['instance_type'],
        'interface_ip_map': !exists(json, 'interface_ip_map') ? undefined : json['interface_ip_map'],
        'interface_ips': !exists(json, 'interface_ips') ? undefined : json['interface_ips'],
        'interface_names': !exists(json, 'interface_names') ? undefined : json['interface_names'],
        'is_console_vm': !exists(json, 'is_console_vm') ? undefined : json['is_console_vm'],
        'is_deepfence_system': !exists(json, 'is_deepfence_system') ? undefined : json['is_deepfence_system'],
        'kernel_id': !exists(json, 'kernel_id') ? undefined : json['kernel_id'],
        'kernel_version': !exists(json, 'kernel_version') ? undefined : json['kernel_version'],
        'kubernetes_cluster_id': !exists(json, 'kubernetes_cluster_id') ? undefined : json['kubernetes_cluster_id'],
        'kubernetes_cluster_name': !exists(json, 'kubernetes_cluster_name') ? undefined : json['kubernetes_cluster_name'],
        'kubernetes_created': !exists(json, 'kubernetes_created') ? undefined : json['kubernetes_created'],
        'kubernetes_ingress_ip': !exists(json, 'kubernetes_ingress_ip') ? undefined : json['kubernetes_ingress_ip'],
        'kubernetes_ip': !exists(json, 'kubernetes_ip') ? undefined : json['kubernetes_ip'],
        'kubernetes_is_in_host_network': !exists(json, 'kubernetes_is_in_host_network') ? undefined : json['kubernetes_is_in_host_network'],
        'kubernetes_labels': !exists(json, 'kubernetes_labels') ? undefined : json['kubernetes_labels'],
        'kubernetes_namespace': !exists(json, 'kubernetes_namespace') ? undefined : json['kubernetes_namespace'],
        'kubernetes_ports': !exists(json, 'kubernetes_ports') ? undefined : json['kubernetes_ports'],
        'kubernetes_public_ip': !exists(json, 'kubernetes_public_ip') ? undefined : json['kubernetes_public_ip'],
        'kubernetes_state': !exists(json, 'kubernetes_state') ? undefined : json['kubernetes_state'],
        'kubernetes_type': !exists(json, 'kubernetes_type') ? undefined : json['kubernetes_type'],
        'local_cidr': !exists(json, 'local_cidr') ? undefined : json['local_cidr'],
        'local_networks': !exists(json, 'local_networks') ? undefined : json['local_networks'],
        'memory_max': !exists(json, 'memory_max') ? undefined : json['memory_max'],
        'memory_usage': !exists(json, 'memory_usage') ? undefined : json['memory_usage'],
        'node_id': !exists(json, 'node_id') ? undefined : json['node_id'],
        'node_name': !exists(json, 'node_name') ? undefined : json['node_name'],
        'node_type': !exists(json, 'node_type') ? undefined : json['node_type'],
        'open_files': !exists(json, 'open_files') ? undefined : json['open_files'],
        'open_files_count': !exists(json, 'open_files_count') ? undefined : json['open_files_count'],
        'os': !exists(json, 'os') ? undefined : json['os'],
        'pid': !exists(json, 'pid') ? undefined : json['pid'],
        'pod_id': !exists(json, 'pod_id') ? undefined : json['pod_id'],
        'pod_name': !exists(json, 'pod_name') ? undefined : json['pod_name'],
        'ppid': !exists(json, 'ppid') ? undefined : json['ppid'],
        'private_ip': !exists(json, 'private_ip') ? undefined : json['private_ip'],
        'pseudo': !exists(json, 'pseudo') ? undefined : json['pseudo'],
        'public_ip': !exists(json, 'public_ip') ? undefined : json['public_ip'],
        'resource_group': !exists(json, 'resource_group') ? undefined : json['resource_group'],
        'short_name': !exists(json, 'short_name') ? undefined : json['short_name'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'threads': !exists(json, 'threads') ? undefined : json['threads'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'uptime': !exists(json, 'uptime') ? undefined : json['uptime'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function ReportMetadataToJSON(value?: ReportMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'agent_running': value.agent_running,
        'availability_zone': value.availability_zone,
        'cloud_account_id': value.cloud_account_id,
        'cloud_provider': value.cloud_provider,
        'cloud_region': value.cloud_region,
        'cmdline': value.cmdline,
        'connection_count': value.connection_count,
        'copy_of': value.copy_of,
        'cpu_max': value.cpu_max,
        'cpu_usage': value.cpu_usage,
        'docker_container_command': value.docker_container_command,
        'docker_container_created': value.docker_container_created,
        'docker_container_ips': value.docker_container_ips,
        'docker_container_name': value.docker_container_name,
        'docker_container_network_mode': value.docker_container_network_mode,
        'docker_container_networks': value.docker_container_networks,
        'docker_container_ports': value.docker_container_ports,
        'docker_container_state': value.docker_container_state,
        'docker_container_state_human': value.docker_container_state_human,
        'docker_env': value.docker_env,
        'docker_image_created_at': value.docker_image_created_at,
        'docker_image_id': value.docker_image_id,
        'docker_image_name': value.docker_image_name,
        'docker_image_name_with_tag': value.docker_image_name_with_tag,
        'docker_image_size': value.docker_image_size,
        'docker_image_tag': value.docker_image_tag,
        'docker_image_virtual_size': value.docker_image_virtual_size,
        'docker_label': value.docker_label,
        'host_name': value.host_name,
        'instance_id': value.instance_id,
        'instance_type': value.instance_type,
        'interface_ip_map': value.interface_ip_map,
        'interface_ips': value.interface_ips,
        'interface_names': value.interface_names,
        'is_console_vm': value.is_console_vm,
        'is_deepfence_system': value.is_deepfence_system,
        'kernel_id': value.kernel_id,
        'kernel_version': value.kernel_version,
        'kubernetes_cluster_id': value.kubernetes_cluster_id,
        'kubernetes_cluster_name': value.kubernetes_cluster_name,
        'kubernetes_created': value.kubernetes_created,
        'kubernetes_ingress_ip': value.kubernetes_ingress_ip,
        'kubernetes_ip': value.kubernetes_ip,
        'kubernetes_is_in_host_network': value.kubernetes_is_in_host_network,
        'kubernetes_labels': value.kubernetes_labels,
        'kubernetes_namespace': value.kubernetes_namespace,
        'kubernetes_ports': value.kubernetes_ports,
        'kubernetes_public_ip': value.kubernetes_public_ip,
        'kubernetes_state': value.kubernetes_state,
        'kubernetes_type': value.kubernetes_type,
        'local_cidr': value.local_cidr,
        'local_networks': value.local_networks,
        'memory_max': value.memory_max,
        'memory_usage': value.memory_usage,
        'node_id': value.node_id,
        'node_name': value.node_name,
        'node_type': value.node_type,
        'open_files': value.open_files,
        'open_files_count': value.open_files_count,
        'os': value.os,
        'pid': value.pid,
        'pod_id': value.pod_id,
        'pod_name': value.pod_name,
        'ppid': value.ppid,
        'private_ip': value.private_ip,
        'pseudo': value.pseudo,
        'public_ip': value.public_ip,
        'resource_group': value.resource_group,
        'short_name': value.short_name,
        'tags': value.tags,
        'threads': value.threads,
        'timestamp': value.timestamp,
        'uptime': value.uptime,
        'version': value.version,
    };
}

