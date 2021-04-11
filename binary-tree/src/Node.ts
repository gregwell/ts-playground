export interface Node {
  id: number;
  value: number;
  left: Node | null;
  right: Node | null;
  parent: Node | null;
  setChild(child: Node, side: "left" | "right"): void;
}