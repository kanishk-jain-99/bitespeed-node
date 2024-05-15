import type { OnConnect } from "reactflow";

import { useCallback, useState } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  Panel,
  useReactFlow,
} from "reactflow";

import "reactflow/dist/style.css";

import { initialNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";
import AddMessageNode from "./components/AddMessageNode";
import Wrapper from "./components/Wrapper";
import AddMessageForm from "./components/AddMessageForm";
import ValidationButton from "./components/ValidationButton";
import { BsBack } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

export default function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [showSettings, setShowSettings] = useState(false);
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [error, setError] = useState(false);

  const [selectedNode, setSelectedNode] = useState({});

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  const onNodeClick = (event, node) => {
    setSelectedNode(node);
    setShowSettings(true);
  };

  const handleBackButton = (e) => {
    setShowSettings(false);
  };

  return (
    <>
      {error && <div>More than one nodes dont have handles</div>}
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Panel position="top-right">
          <ValidationButton />

          <Wrapper>
            <div>
              <button onClick={handleBackButton}>
                <BiArrowBack />
              </button>{" "}
              <span className="icon-wa">Message</span>
            </div>

            {showSettings ? (
              <AddMessageForm node={selectedNode} />
            ) : (
              <AddMessageNode />
            )}
          </Wrapper>
        </Panel>
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </>
  );
}
