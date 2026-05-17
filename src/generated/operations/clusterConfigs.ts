/* Auto-generated. Do not edit. */
export const document: string = `fragment ClusterConfigResponseFields on ClusterConfigResponse {
  id
  name
  settings {
    ...ClusterConfigSettingResponseFields
  }
}

fragment ClusterConfigSettingResponseFields on ClusterConfigSettingResponse {
  id
  attributeName
  displayType
  priority
  clusterConfigId
}

query clusterConfigs {
  clusterConfigs {
    ...ClusterConfigResponseFields
  }
}`;
