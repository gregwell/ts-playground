import { Node } from "./Node";
import { LEFT, RIGHT, errors } from "./constants";
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
      throw new Error(errors.rootAlreadyExists);
    }
    this.validateValue(value);

    this.root = new MyNode(value, null);
    this.nodes.push(this.root);
  };

  addLeaf = (
    value: number,
    parentNodeId: number,
    side: "left" | "right"
  ): void => {
    if (this.root === null) {
      throw new Error(errors.noRoot);
    }
    const parentNode = this.findNodeById(parentNodeId);
    if (parentNode[side] !== null) {
      throw new Error(errors.childAlreadyExists);
    }

    this.validateValue(value);

    const newNode = new MyNode(value, parentNode);
    parentNode.setChild(newNode, side);
    this.nodes.push(newNode);
  };

  findNodeById = (id: number): Node => {
    const node = this.nodes.find((node) => node.id === id);

    if (!node) {
      throw new Error(errors.invalidId);
    }

    return node;
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

  validateValue = (value: number): void => {
    if (!Number.isInteger(value)) {
      throw new Error(errors.invalidValue);
    }
  };
}
