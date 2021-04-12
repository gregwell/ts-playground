import { Node } from "./Node";

export interface Tree {
    root: Node | null;
    nodes: Node[];
    addRoot(value: number): void;
    addLeaf(value: number, parentNodeId: number, side: "left" | "right"): void;
    calculateSubtreeAverages(
      id: number
    ): { sum: number; mean: number; median: number };
  }