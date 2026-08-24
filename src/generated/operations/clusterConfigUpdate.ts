/* Auto-generated. Do not edit. */
export const document: string = `fragment ClusterConfigFields on ClusterConfig {
  id
  name
  settings {
    ...ClusterConfigSettingFields
  }
}

fragment ClusterConfigSettingFields on ClusterConfigSetting {
  uuid
  attributeName
  configUuid
  clusterConfigId
  createdAt
  lastModifiedAt
  type
  displayType
  priority
}

mutation clusterConfigUpdate(\$input: ClusterConfigUpdateInput!, \$clusterConfigId: Int) {
  clusterConfigUpdate(input: \$input, clusterConfigId: \$clusterConfigId) {
    ...ClusterConfigFields
  }
}`;
