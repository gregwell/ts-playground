import { Node } from "./Node";

export interface Tree {
    root: Node | null;
    nodes: Node[];
    subtreeNodes: Node[];
    addRoot(value: number): void;
    add(value: number, parentNodeId: number, side: "left" | "right"): void;
    findNodeById(id: number): Node;
    pushSubtreeNodesAndGetCount(node: Node): number;
    printTree(): void;
    printNodeIdAndValue(node: Node, comment: string): void;
    calculateSubtreeAverages(
      id: number
    ): { sum: number; mean: number; median: number };
  }