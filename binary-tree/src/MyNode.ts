import { Node } from "./Node";

export class MyNode implements Node {
    static _id: number = 0;
    id: number;
    value: number;
    left: Node | null;
    right: Node | null;
    parent: Node | null;
  
    constructor(value: number, parentNode: Node) {
      this.id = MyNode._id++;
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = parentNode;
    }
  
    setChild = (child: Node, side: "left" | "right"): void => {
      this[side] = child;
    };
  }