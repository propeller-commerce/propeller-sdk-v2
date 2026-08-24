/* Auto-generated. Do not edit. */
export const document: string = `fragment ClusterConfigSettingFields on ClusterConfigSetting {
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

query clusterConfigSetting(\$uuid: String!) {
  clusterConfigSetting(uuid: \$uuid) {
    ...ClusterConfigSettingFields
  }
}`;
