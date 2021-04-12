export const LEFT = "left";
export const RIGHT = "right";

export const errors = {
  childAlreadyExists:
    "Attempt to add a child to the parent that already has one",
  rootAlreadyExists: "The root already exists.",
  noRoot: "Attempt to add a leaf when there is no root in the tree.",
  invalidId: "Invalid id passed. There is no node with the provided id.",
  invalidValue: "Invalid value passed. Expected to be an integer.",
};
