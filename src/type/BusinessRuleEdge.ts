/**
 Edges link nodes in a grapgh together,
    most commonly a graph contains an inputNode with an edge between a decisionTableNode
    and the decisionTableNode has an edge with the outputNode
 */
export class BusinessRuleEdge {
  /** The generated ID of the business rule edge */
  private _id: string | number;
  /** The ID of source Node of the business rule egde */
  private _sourceId: string | number;
  /** The ID of target Node of the business rule egde */
  private _targetId: string | number;
  /** The type of the business rule egde, only posible value now being 'edge' */
  private _type: string;
  /**
   Creates a new instance of BusinessRuleEdge
   */
  constructor(data: Partial<BusinessRuleEdge> = {}) {
    this._id = data.id!;
    this._sourceId = data.sourceId!;
    this._targetId = data.targetId!;
    this._type = data.type!;
  }
  /**
   The generated ID of the business rule edge
   */
  get id(): string | number {
    return this._id;
  }
  /**
   The generated ID of the business rule edge
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   The ID of source Node of the business rule egde
   */
  get sourceId(): string | number {
    return this._sourceId;
  }
  /**
   The ID of source Node of the business rule egde
   */
  set sourceId(value: string | number) {
    this._sourceId = value;
  }
  /**
   The ID of target Node of the business rule egde
   */
  get targetId(): string | number {
    return this._targetId;
  }
  /**
   The ID of target Node of the business rule egde
   */
  set targetId(value: string | number) {
    this._targetId = value;
  }
  /**
   The type of the business rule egde, only posible value now being 'edge'
   */
  get type(): string {
    return this._type;
  }
  /**
   The type of the business rule egde, only posible value now being 'edge'
   */
  set type(value: string) {
    this._type = value;
  }
}