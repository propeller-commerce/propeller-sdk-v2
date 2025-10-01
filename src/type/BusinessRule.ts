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
  private _id: string | number;
  /** type field */
  private _type: BusinessRuleType;
  /** name field */
  private _name: LocalizedString[];
  /** edges field */
  private _edges: BusinessRuleEdge[];
  /** nodes field */
  private _nodes: IBusinessRuleNode[];
  /** BusinessRule date created */
  private _createdAt: string;
  /** BusinessRule List date modified */
  private _updatedAt: string;
  /** jdm field */
  private _jdm: any;
  /**
   Creates a new instance of BusinessRule
   */
  constructor(data: Partial<BusinessRule> = {}) {
    this._id = data.id!;
    this._type = data.type!;
    this._name = data.name!;
    this._edges = data.edges!;
    this._nodes = data.nodes!;
    this._createdAt = data.createdAt!;
    this._updatedAt = data.updatedAt!;
    this._jdm = data.jdm!;
  }
  /**
   BusinessRule identifier
   */
  get id(): string | number {
    return this._id;
  }
  /**
   BusinessRule identifier
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   type field
   */
  get type(): BusinessRuleType {
    return this._type;
  }
  /**
   type field
   */
  set type(value: BusinessRuleType) {
    this._type = value;
  }
  /**
   name field
   */
  get name(): LocalizedString[] {
    return this._name;
  }
  /**
   name field
   */
  set name(value: LocalizedString[]) {
    this._name = value;
  }
  /**
   edges field
   */
  get edges(): BusinessRuleEdge[] {
    return this._edges;
  }
  /**
   edges field
   */
  set edges(value: BusinessRuleEdge[]) {
    this._edges = value;
  }
  /**
   nodes field
   */
  get nodes(): IBusinessRuleNode[] {
    return this._nodes;
  }
  /**
   nodes field
   */
  set nodes(value: IBusinessRuleNode[]) {
    this._nodes = value;
  }
  /**
   BusinessRule date created
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   BusinessRule date created
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   BusinessRule List date modified
   */
  get updatedAt(): string {
    return this._updatedAt;
  }
  /**
   BusinessRule List date modified
   */
  set updatedAt(value: string) {
    this._updatedAt = value;
  }
  /**
   jdm field
   */
  get jdm(): any {
    return this._jdm;
  }
  /**
   jdm field
   */
  set jdm(value: any) {
    this._jdm = value;
  }
}