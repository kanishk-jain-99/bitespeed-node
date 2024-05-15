import type { Node, NodeTypes } from "reactflow";
import { MessageNode } from "./MessageNode";

//attached sample nodes for inital rendering
export const initialNodes = [
  // {
  //   id: "a",
  //   type: "message-node",
  //   position: { x: 0, y: 0 },
  //   data: { message: "Text Message 1" },
  // },
  // {
  //   id: "b",
  //   type: "message-node",
  //   position: { x: 0, y: 100 },
  //   data: { message: "Text Message 1" },
  // },
  // {
  //   id: "c",
  //   type: "message-node",
  //   position: { x: 0, y: 300 },
  //   data: { message: "Text Message 1" },
  // },
] satisfies Node[];

export const nodeTypes = {
  "message-node": MessageNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
