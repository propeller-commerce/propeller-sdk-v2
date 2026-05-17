/* Auto-generated. Do not edit. */
export const document: string = `fragment ClusterConfigFields on ClusterConfig {
  id
  name
  settings {
    ...ClusterConfigSettingFields
  }
}

fragment ClusterConfigSettingFields on ClusterConfigSetting {
  id
  name
  type
  displayType
  priority
}

query cluster(\$clusterId: Int!) {
  cluster(clusterId: \$clusterId) {
    config {
      ...ClusterConfigFields
    }
  }
}`;
