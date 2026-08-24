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

mutation clusterConfigSettingCreate(\$configUuid: String!, \$input: ClusterConfigSettingCreateInput!) {
  clusterConfigSettingCreate(configUuid: \$configUuid, input: \$input) {
    ...ClusterConfigSettingFields
  }
}`;
