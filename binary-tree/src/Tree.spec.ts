import { MyTree } from "./MyTree";
import { Tree } from "./Tree";
import { LEFT, RIGHT } from "./constants";

describe("Testing the correctness of calculations based on data from the task", () => {
  let tree: Tree;
  let usedNodeIds = 0;

  beforeEach(() => {
    tree = new MyTree();
    tree.addRoot(5);

    tree.add(3, 0 + usedNodeIds, LEFT);
    tree.add(7, 0 + usedNodeIds, RIGHT);

    tree.add(2, 1 + usedNodeIds, LEFT);
    tree.add(5, 1 + usedNodeIds, RIGHT);
    tree.add(1, 2 + usedNodeIds, LEFT);
    tree.add(0, 2 + usedNodeIds, RIGHT);

    tree.add(2, 6 + usedNodeIds, LEFT);
    tree.add(8, 6 + usedNodeIds, RIGHT);

    tree.add(5, 8 + usedNodeIds, RIGHT);
  });

  afterEach(() => {
    usedNodeIds = usedNodeIds + tree.nodes.length;
  });

  it("returns correct averages when the root of the subtree is the same as the main tree", () => {
    const subtree = tree.calculateSubtreeAverages(0 + usedNodeIds);

    expect(subtree.mean).toEqual(3.8);
    expect(subtree.median).toEqual(4);
    expect(subtree.sum).toEqual(38);
  });

  it("returns correct averages when the root of the subtree is in the middle of the main tree", () => {
    const subtree = tree.calculateSubtreeAverages(6 + usedNodeIds);

    expect(subtree.mean).toEqual(3.75);
    expect(subtree.median).toEqual(3.5);
    expect(subtree.sum).toEqual(15);
  });

  it("returns correct averages when the root of the subtree is a leaf of the main tree", () => {
    const subtree = tree.calculateSubtreeAverages(5 + usedNodeIds);

    expect(subtree.mean).toEqual(1);
    expect(subtree.median).toEqual(1);
    expect(subtree.sum).toEqual(1);
  });
});
