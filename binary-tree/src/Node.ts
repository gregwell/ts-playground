export interface Node {
    value: number;
    left: Node | null;
    right: Node | null;
    parent: Node | null;
}

export class Node implements Node{
    constructor(value:number) {
     this.value = value;
     this.left = null;
     this.right = null;
     this.parent;
    }
  }