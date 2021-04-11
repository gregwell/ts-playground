import { MyTree } from "./MyTree";
import { LEFT, RIGHT } from "./constants";
import { Tree } from "./Tree";

let tree : Tree;

tree = new MyTree();

tree.addRoot(5);

tree.add(3, 0, LEFT);
tree.add(7, 0, RIGHT);

tree.add(2, 1, LEFT);
tree.add(5, 1, RIGHT);
tree.add(1, 2, LEFT);
tree.add(0, 2, RIGHT);

tree.add(2, 6, LEFT);
tree.add(8, 6, RIGHT);

tree.add(5, 8, RIGHT);

const subtree = tree.calculateSubtreeAverages(6);
console.log(subtree.mean);
console.log(subtree.median);
console.log(subtree.sum);