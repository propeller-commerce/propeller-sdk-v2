import { BusinessRuleType } from '../enum/BusinessRuleType';
import { LocalizedString } from './LocalizedString';
import { BusinessRuleEdge } from './BusinessRuleEdge';
import { IBusinessRuleNode } from './IBusinessRuleNode';
/**
 Represents a BusinessRule Graph or Set, each business rule set consist of at least one inputNode,
  decisionTableNode and outputNode witn edges between them.
  A decisionTable can have mutiple rows, each row representing a single rule that gets executed.
 */
export class BusinessRule {
  /** BusinessRule identifier */
  id!: string | number;
  /** type field */
  type!: BusinessRuleType;
  /** name field */
  name!: LocalizedString[];
  /** edges field */
  edges!: BusinessRuleEdge[];
  /** nodes field */
  nodes!: IBusinessRuleNode[];
  /** BusinessRule date created */
  createdAt!: string;
  /** BusinessRule List date modified */
  updatedAt!: string;
  /** jdm field */
  jdm!: any;
  constructor(data: Partial<BusinessRule> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `type`. */
  getType(): BusinessRuleType {
    return this.type;
  }
  /** Returns the name for the given language, falling back to NL. */
  getName(language: string = 'NL'): string | undefined {
    const arr = this.name;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `edges` as BusinessRuleEdge instances (coerced on first access). */
  getEdges(): BusinessRuleEdge[] {
    if (!this.edges) return [];
    this.edges = this.edges.map((x: any) => x instanceof BusinessRuleEdge ? x : new BusinessRuleEdge(x));
    return this.edges;
  }
  /** Returns `nodes`. */
  getNodes(): IBusinessRuleNode[] {
    return this.nodes;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `updatedAt`. */
  getUpdatedAt(): string {
    return this.updatedAt;
  }
  /** Returns `jdm`. */
  getJdm(): any {
    return this.jdm;
  }
}