/**
 Edges link nodes in a grapgh together,
    most commonly a graph contains an inputNode with an edge between a decisionTableNode
    and the decisionTableNode has an edge with the outputNode
 */
export class BusinessRuleEdge {
  /** The generated ID of the business rule edge */
  id!: string | number;
  /** The ID of source Node of the business rule egde */
  sourceId!: string | number;
  /** The ID of target Node of the business rule egde */
  targetId!: string | number;
  /** The type of the business rule egde, only posible value now being 'edge' */
  type!: string;
  constructor(data: Partial<BusinessRuleEdge> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `sourceId`. */
  getSourceId(): string | number {
    return this.sourceId;
  }
  /** Returns `targetId`. */
  getTargetId(): string | number {
    return this.targetId;
  }
  /** Returns `type`. */
  getType(): string {
    return this.type;
  }
}