import { Node } from "./Node";

export interface Tree {
  root: Node | null;
  add(value: number): void;
}

export class Tree {
  constructor() {
    this.root = null;
  }

  add = (value: number): void => {
    console.log("number added:" + value);
  };
}
