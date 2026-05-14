import { BaseService } from './BaseService';
import { TrackAndTrace } from '../type/TrackAndTrace';
import { TrackAndTraceResponse } from '../type/TrackAndTraceResponse';
import { TrackAndTraceSearchInput } from '../type/TrackAndTraceSearchInput';
import { TrackAndTraceCreateInput } from '../type/TrackAndTraceCreateInput';
import { TrackAndTraceUpdateInput } from '../type/TrackAndTraceUpdateInput';
/**
 Service for managing track and trace operations
 * @extends BaseService
 */
export class TrackAndTraceService extends BaseService {
  /**
   Retrieves a specific track and trace record
   * @param id Track and trace ID
   * @returns Promise<TrackAndTrace> Track and trace data
   */
  async getTrackAndTrace(id: number): Promise<TrackAndTrace> {
    const variables = { id };
    const result = await this.executeQuery('trackAndTrace', variables);
    return result.data.trackAndTrace as TrackAndTrace;
  }
  /**
   Retrieves track and trace records with search
   * @param input Search input parameters
   * @returns Promise<TrackAndTraceResponse> Track and trace response
   */
  async getTrackAndTraces(input?: TrackAndTraceSearchInput): Promise<TrackAndTraceResponse> {
    const variables = { input };
    const result = await this.executeQuery('trackAndTraces', variables);
    return result.data.trackAndTraces as TrackAndTraceResponse;
  }
  /**
   Creates a new track and trace record
   * @param input Track and trace creation input
   * @returns Promise<TrackAndTrace> The created track and trace record
   */
  async createTrackAndTrace(input: TrackAndTraceCreateInput): Promise<TrackAndTrace> {
    const variables = { input };
    const result = await this.executeMutation('trackAndTraceCreate', variables);
    return result.data.trackAndTraceCreate as TrackAndTrace;
  }
  /**
   Updates an existing track and trace record
   * @param input Track and trace update input
   * @returns Promise<TrackAndTrace> The updated track and trace record
   */
  async updateTrackAndTrace(input: TrackAndTraceUpdateInput): Promise<TrackAndTrace> {
    const variables = { input };
    const result = await this.executeMutation('trackAndTraceUpdate', variables);
    return result.data.trackAndTraceUpdate as TrackAndTrace;
  }
}