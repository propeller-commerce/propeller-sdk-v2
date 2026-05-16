/* Auto-generated. Do not edit. */
export const document = `fragment ClusterConfigSettingResponseFields on ClusterConfigSettingResponse {
  id
  attributeName
  displayType
  priority
  clusterConfigId
}

mutation clusterConfigAddSetting(\$clusterConfigId: Int!, \$input: ClusterConfigSettingInput!) {
  clusterConfigAddSetting(clusterConfigId: \$clusterConfigId, input: \$input) {
    ...ClusterConfigSettingResponseFields
  }
}`;
