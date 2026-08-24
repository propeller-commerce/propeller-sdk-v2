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

mutation clusterConfigSettingUpdate(\$uuid: String!, \$input: ClusterConfigSettingUpdateInput!) {
  clusterConfigSettingUpdate(uuid: \$uuid, input: \$input) {
    ...ClusterConfigSettingFields
  }
}`;
