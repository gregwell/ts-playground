import { Node } from "./Node";
import { LEFT, RIGHT } from "./constants";
import { Tree } from "./Tree";
import { MyNode } from "./MyNode";

export class MyTree implements Tree {
  root: Node | null;
  nodes: Node[];
  subtreeNodes: Node[];

  constructor() {
    this.root = null;
    this.nodes = [];
    this.subtreeNodes = [];
  }

  addRoot = (value: number): void => {
    if (this.root !== null) {
      console.log("You can only have one root in your tree!");
      return;
    }

    this.root = new MyNode(value, null);
    this.nodes.push(this.root);
  };

  add = (value: number, parentNodeId: number, side: "left" | "right"): void => {
    if (this.root === null) {
      console.log("Add root node before adding other nodes!");
      return;
    }

    if (parentNodeId === null) return;
    if (!this.findNodeById(parentNodeId)) return;

    const parentNode = this.findNodeById(parentNodeId);
    const newNode = new MyNode(value, parentNode);
    parentNode.setChild(newNode, side);
    this.nodes.push(newNode);
  };

  findNodeById = (id: number): Node => {
    return this.nodes.find((node) => node.id === id);
  };

  pushSubtreeNodesAndGetCount = (node: Node): number => {
    if (node === null) {
      return 0;
    }
    this.subtreeNodes.push(node);
    return (
      this.pushSubtreeNodesAndGetCount(node.left) +
      this.pushSubtreeNodesAndGetCount(node.right) +
      1
    );
  };

  printTree = (): void => {
    this.nodes.map((node) => {
      this.printNodeIdAndValue(node, "");
      this.printNodeIdAndValue(node?.left, LEFT);
      this.printNodeIdAndValue(node?.right, RIGHT);
      console.log("...");
    });
  };

  printNodeIdAndValue = (node: Node, comment: string): void => {
    console.log(comment + ": [" + node?.id + "](" + node?.value + ")");
  };

  calculateSubtreeAverages = (
    id: number
  ): { sum: number; mean: number; median: number } => {
    this.subtreeNodes = [];
    const root = this.findNodeById(id);
    const count = this.pushSubtreeNodesAndGetCount(root);

    const values = this.subtreeNodes.map((node) => node.value);
    const sum = values.reduce((sum, value) => (sum += value));
    const mean = sum / count;

    const sortedValues = values.sort();
    const mid = Math.ceil(count / 2);
    const median =
      count % 2 == 0
        ? (sortedValues[mid] + sortedValues[mid - 1]) / 2
        : sortedValues[mid - 1];
    return { sum, mean, median };
  };
}