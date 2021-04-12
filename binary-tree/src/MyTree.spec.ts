import { MyTree } from "./MyTree";
import { Tree } from "./Tree";
import { errors, LEFT, RIGHT } from "./constants";

let tree: Tree;

beforeEach(() => {
  tree = new MyTree();
});

it("throws an error when trying to add a root that already exists", () => {
  tree.addRoot(1);
  expect(() => {
    tree.addRoot(5);
  }).toThrow(errors.rootAlreadyExists);
});

it("throws an error when trying to add a leaf when there is no root in the tree", () => {
  expect(() => {
    tree.addLeaf(1, 0, LEFT);
  }).toThrow(errors.noRoot);
});

it("throws an error when the root value is not an integer", () => {
  expect(() => {
    tree.addRoot(5.2);
  }).toThrow(errors.invalidValue);
});

it("throws an error when the leaf value is not an integer", () => {
  tree.addRoot(5);
  expect(() => {
    tree.addLeaf(1.2, tree.root.id, LEFT);
  }).toThrow(errors.invalidValue);
});

it("throws an error when trying to add a child to the parent that already has one", () => {
  tree.addRoot(5);
  tree.addLeaf(1, tree.root.id, LEFT);
  expect(() => {
    tree.addLeaf(1, tree.root.id, LEFT);
  }).toThrow(errors.childAlreadyExists);
});

it("throws an error when the node with provided id does not exist", () => {
  tree.addRoot(5);
  expect(() => {
    tree.addLeaf(1, tree.root.id + 1, LEFT);
  }).toThrow(errors.invalidId);
});
