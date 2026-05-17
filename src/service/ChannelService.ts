import { Channel } from '../type/Channel';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as channelDoc } from '../generated/operations/channel';
import { document as channelsDoc } from '../generated/operations/channels';
import type { ChannelVariables } from '../generated/operationVariables';
/**
 Service class for Channel-related GraphQL operations
 */
export function channelService(client: GraphQLClient) {
  return {
    /**
       Fetches a single channel by ID
       * @param id Channel ID to fetch
       * @returns Promise<Channel> The channel data
       */
    async getChannel(variables: ChannelVariables): Promise<Channel> {
      const result = await runOperation(client, channelDoc, 'channel', variables);
      return result.data.channel as Channel;
    },
    /**
       Fetches a list of channels
       * @returns Promise<Channel[]> The channels data array
       */
    async getChannels(): Promise<Channel[]> {
      const result = await runOperation(client, channelsDoc, 'channels');
      return result.data.channels as Channel[];
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `channelService(client)`.
 */
export class ChannelService {
  private readonly _svc: ReturnType<typeof channelService>;
  constructor(client: GraphQLClient) { this._svc = channelService(client); }
  /**
   * Fetches a single channel by ID
   * @param id Channel ID to fetch
   */
  getChannel(variables: ChannelVariables): Promise<Channel> { return this._svc.getChannel(variables); }
  /**
   * Fetches a list of channels
   */
  getChannels(): Promise<Channel[]> { return this._svc.getChannels(); }
}
