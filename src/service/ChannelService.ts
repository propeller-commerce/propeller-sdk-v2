import { BaseService } from './BaseService';
import { Channel } from '../type/Channel';
/**
 Service class for Channel-related GraphQL operations
 */
export class ChannelService extends BaseService {
  /**
   Fetches a single channel by ID
   * @param id Channel ID to fetch
   * @returns Promise<Channel> The channel data
   */
  async getChannel(id: number): Promise<Channel> {
    const variables = { id };
    const result = await this.executeQuery('channel', variables);
    return result.data.channel as Channel;
  }
  /**
   Fetches a list of channels
   * @returns Promise<Channel[]> The channels data array
   */
  async getChannels(): Promise<Channel[]> {
    const variables = {};
    const result = await this.executeQuery('channels', variables);
    return result.data.channels as Channel[];
  }
}