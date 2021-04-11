import { Node } from "./Node";
import { LEFT, RIGHT } from "./constants";

export interface Tree {
  root: Node | null;
  nodes: Node[];
  addRoot(value: number): void;
  add(value: number, parentNodeId: number, side: "left" | "right"): void;
  findNodeById(id: number): Node;
  getSumOfSubtreeValues(node: Node): number;
  getNumberOfNodesInSubtree(node: Node): number;
  printTree(): void;
  printNodeValueAndIndex(node: Node, comment: string): void;
  printSubtreeValuesSum(id: number): void;
  printNumberOfNodesInSubtree(id: number): void;
  printSubtreeAverageValue(id: number): void;
}

export class Tree {
  constructor() {
    this.root = null;
    this.nodes = [];
  }

  addRoot = (value: number): void => {
    if (this.root !== null) {
      console.log("You can only have one root in your tree!");
      return;
    }

    this.root = new Node(value, null);
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
    const newNode = new Node(value, parentNode);
    parentNode.setChild(newNode, side);
    this.nodes.push(newNode);
  };

  findNodeById = (id: number): Node => {
    return this.nodes.find((node) => node.id === id);
  };

  getSumOfSubtreeValues = (node: Node): number => {
    if (node === null) {
      return 0;
    }

    return (
      node.value +
      this.getSumOfSubtreeValues(node.left) +
      this.getSumOfSubtreeValues(node.right)
    );
  };

  getNumberOfNodesInSubtree = (node: Node): number => {
    if (node === null) {
      return 0;
    }
    return (
      this.getNumberOfNodesInSubtree(node.left) +
      this.getNumberOfNodesInSubtree(node.right) +
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

  printSubtreeValuesSum = (id: number): void => {
    let node = this.findNodeById(id);
    console.log(this.getSumOfSubtreeValues(node));
  };

  printNumberOfNodesInSubtree = (id: number): void => {
    let node = this.findNodeById(id);
    console.log(this.getNumberOfNodesInSubtree(node));
  };

  printSubtreeAverageValue = (id: number): void => {
    let node = this.findNodeById(id);
    let sum = this.getSumOfSubtreeValues(node);
    let numberOfNodes = this.getNumberOfNodesInSubtree(node);
    console.log(sum / numberOfNodes);
  };
}
