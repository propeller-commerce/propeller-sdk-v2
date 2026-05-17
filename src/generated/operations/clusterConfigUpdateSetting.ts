/* Auto-generated. Do not edit. */
export const document: string = `fragment UpdateClusterConfigSettingResponseFields on UpdateClusterConfigSettingResponse {
  id
  displayType
  priority
}

mutation clusterConfigUpdateSetting(\$clusterConfigId: Int!, \$settingId: Int!, \$input: ClusterConfigSettingUpdateInput!) {
  clusterConfigUpdateSetting(
    clusterConfigId: \$clusterConfigId
    settingId: \$settingId
    input: \$input
  ) {
    ...UpdateClusterConfigSettingResponseFields
  }
}`;
