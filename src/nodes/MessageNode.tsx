import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { LuMessageCircle } from "react-icons/lu";
import type { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";

export type MessageNodeData = {
  message?: string;
};

export function MessageNode({ data, selected }: NodeProps<MessageNodeData>) {
  const [sourceConnectable, setSourceConnectable] = useState(true);

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className={selected ? "node-selected" : "node"}>
      <Handle
        type="target"
        position={Position.Left}
        onConnect={(params) => console.log("handle onConnect source", params)}
      />
      <div className="header">
        <span className="icon">
          <LuMessageCircle color="lightblue" />
        </span>{" "}
        Send Message{" "}
        <span className="icon-wa">
          <BsWhatsapp />
        </span>
      </div>

      <div>{data.message}</div>

      <Handle
        type="source"
        position={Position.Right}
        isConnectable={sourceConnectable}
        onConnect={() => setSourceConnectable(false)}
      />
    </div>
  );
}
