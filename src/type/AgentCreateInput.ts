import { AgentInteractionMode } from '../enum/AgentInteractionMode';
import { AgentTrigger } from '../enum/AgentTrigger';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for AgentCreateInput
 */
export interface AgentCreateInput {
  /** Localized display names for the agent.

Validation: Array must not be empty, must contain unique language entries. */
  names: LocalizedStringInput[];
  /** Localized descriptions for the agent.

Validation: Array must not be empty, must contain unique language entries. */
  descriptions?: LocalizedStringInput[];
  /** Localized welcome messages displayed when the agent is activated.

Validation: Array must not be empty, must contain unique language entries. */
  welcomeMessages?: LocalizedStringInput[];
  /** Localized button labels for the agent.

Validation: Array must not be empty, must contain unique language entries. */
  buttonLabels?: LocalizedStringInput[];
  /** Whether the agent should be active upon creation. */
  active: boolean;
  /** Classification types for the agent.

Validation: Must be in SCREAMING_SNAKE_CASE format (e.g., ORDER_SUPPORT, PRODUCT_INFO). */
  types: string[];
  /** Trigger mechanism that activates the agent interaction. */
  trigger: AgentTrigger;
  /** Interaction mode defining the conversational pattern. */
  interactionMode: AgentInteractionMode;
  /** URL of the external webhook that processes agent requests. Maximum length of 2048 characters. */
  webhookUrl: string;
  /** Timeout in milliseconds for webhook requests. */
  webhookTimeoutMs: number;
  /** The salt used to generate HMAC-SHA256 signature for webhook authentication.

When configured, the webhook will include an 'X-Propeller-Signature' header with format 'sha256=<hex_signature>'.

To verify the signature:
1) JSON stringify the payload
2) Generate HMAC-SHA256 using this salt and the stringified payload
3) Compare with the received signature using crypto.timingSafeEqual() to prevent timing attacks

Example (Node.js):
const expectedSig = crypto.createHmac('sha256', salt).update(JSON.stringify(payload), 'utf8').digest('hex');
const receivedSig = signature.replace('sha256=', '');
return crypto.timingSafeEqual(Buffer.from(expectedSig, 'hex'), Buffer.from(receivedSig, 'hex')); */
  webhookSignatureSalt?: string;
  /** Username for HTTP Basic Authentication.

Used together with basicAuthPassword to provide authentication credentials for webhook requests. Both username and password must be provided or both omitted. */
  webhookBasicAuthUsername?: string;
  /** Password for HTTP Basic Authentication.

Used together with basicAuthUsername to provide authentication credentials for webhook requests. Both username and password must be provided or both omitted. */
  webhookBasicAuthPassword?: string;
}
