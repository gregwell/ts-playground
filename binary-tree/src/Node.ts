export interface Node {
  id: number;
  value: number;
  left: Node | null;
  right: Node | null;
  parent: Node | null;
  setChild(child: Node, side: "left" | "right"): void;
}

export class Node implements Node {
  static _id: number = 0;

  constructor(value: number, parentNode: Node) {
    this.id = Node._id++;
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parentNode;
  }

  setChild = (child: Node, side: "left" | "right"): void => {
    this[side] = child;
  };
}
