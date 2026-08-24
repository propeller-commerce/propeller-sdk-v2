/* Auto-generated. Do not edit. */
export const document: string = `fragment BatchMetricsQueueStatusResponseFields on BatchMetricsQueueStatusResponse {
  intake {
    ...BatchMetricsQueueSummaryFields
  }
  processor {
    ...BatchMetricsQueueSummaryFields
  }
  retry {
    ...BatchMetricsQueueSummaryFields
  }
  categoryFanout {
    ...BatchMetricsQueueSummaryFields
  }
}

fragment BatchMetricsQueueSummaryFields on BatchMetricsQueueSummary {
  total
  active
  waiting
  delayed
  failed
}

query productSearchBatchMetricsQueueStatus {
  productSearchBatchMetricsQueueStatus {
    ...BatchMetricsQueueStatusResponseFields
  }
}`;
