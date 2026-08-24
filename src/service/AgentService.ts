import { Agent } from '../type/Agent';
import { AgentConversation } from '../type/AgentConversation';
import { AgentMessage } from '../type/AgentMessage';
import { AgentResponse } from '../type/AgentResponse';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as agentDoc } from '../generated/operations/agent';
import { document as agentConversationCreateDoc } from '../generated/operations/agentConversationCreate';
import { document as agentCreateDoc } from '../generated/operations/agentCreate';
import { document as agentDeleteDoc } from '../generated/operations/agentDelete';
import { document as agentMessageCreateDoc } from '../generated/operations/agentMessageCreate';
import { document as agentUpdateDoc } from '../generated/operations/agentUpdate';
import { document as agentsDoc } from '../generated/operations/agents';
import type { AgentConversationCreateVariables, AgentCreateVariables, AgentDeleteVariables, AgentMessageCreateVariables, AgentUpdateVariables, AgentVariables, AgentsVariables } from '../generated/operationVariables';
/**
 Service for Agent-related GraphQL operations
 */
export function agentService(client: GraphQLClient) {
  return {
    /**
       Retrieve a single agent by its unique identifier.
       */
    async getAgent(variables: AgentVariables): Promise<Agent> {
      const result = await runOperation<{ agent: Agent }>(client, agentDoc, 'agent', { ...variables });
      return result.data.agent as Agent;
    },
    /**
       Start a new conversation with an agent.
       */
    async agentConversationCreate(variables: AgentConversationCreateVariables): Promise<AgentConversation> {
      const result = await runOperation<{ agentConversationCreate: AgentConversation }>(client, agentConversationCreateDoc, 'agentConversationCreate', { ...variables });
      return result.data.agentConversationCreate as AgentConversation;
    },
    /**
       Create a new agent with the specified configuration.
       */
    async agentCreate(variables: AgentCreateVariables): Promise<Agent> {
      const result = await runOperation<{ agentCreate: Agent }>(client, agentCreateDoc, 'agentCreate', { ...variables });
      return result.data.agentCreate as Agent;
    },
    /**
       Delete an agent by its unique identifier.
       */
    async agentDelete(variables: AgentDeleteVariables): Promise<boolean> {
      const result = await runOperation<{ agentDelete: boolean }>(client, agentDeleteDoc, 'agentDelete', { ...variables });
      return result.data.agentDelete as boolean;
    },
    /**
       Send a message to an agent.
       */
    async agentMessageCreate(variables: AgentMessageCreateVariables): Promise<AgentMessage> {
      const result = await runOperation<{ agentMessageCreate: AgentMessage }>(client, agentMessageCreateDoc, 'agentMessageCreate', { ...variables });
      return result.data.agentMessageCreate as AgentMessage;
    },
    /**
       Update an existing agent's configuration.
       */
    async agentUpdate(variables: AgentUpdateVariables): Promise<Agent> {
      const result = await runOperation<{ agentUpdate: Agent }>(client, agentUpdateDoc, 'agentUpdate', { ...variables });
      return result.data.agentUpdate as Agent;
    },
    /**
       Search and retrieve agents with filtering and pagination. 
       */
    async getAgents(variables: AgentsVariables): Promise<AgentResponse> {
      const result = await runOperation<{ agents: AgentResponse }>(client, agentsDoc, 'agents', { ...variables });
      return result.data.agents as AgentResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `agentService(client)`.
 */
export class AgentService {
  private readonly _svc: ReturnType<typeof agentService>;
  constructor(client: GraphQLClient) { this._svc = agentService(client); }
  getAgent(variables: AgentVariables): Promise<Agent> { return this._svc.getAgent(variables); }
  agentConversationCreate(variables: AgentConversationCreateVariables): Promise<AgentConversation> { return this._svc.agentConversationCreate(variables); }
  agentCreate(variables: AgentCreateVariables): Promise<Agent> { return this._svc.agentCreate(variables); }
  agentDelete(variables: AgentDeleteVariables): Promise<boolean> { return this._svc.agentDelete(variables); }
  agentMessageCreate(variables: AgentMessageCreateVariables): Promise<AgentMessage> { return this._svc.agentMessageCreate(variables); }
  agentUpdate(variables: AgentUpdateVariables): Promise<Agent> { return this._svc.agentUpdate(variables); }
  getAgents(variables: AgentsVariables): Promise<AgentResponse> { return this._svc.getAgents(variables); }
}
