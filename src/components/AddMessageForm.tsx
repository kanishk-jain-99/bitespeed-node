import { useRef } from "react";
import { useReactFlow } from "reactflow";

export default function AddMessageForm({ node }) {
  const reactFlow = useReactFlow();
  const textRef = useRef();

  const handleChange = (e) => {
    e.preventDefault();
    let currentNodes = reactFlow.getNodes();
    console.log("selected node", node);
    currentNodes.forEach((ele) => {
      if (ele.id === node.id) {
        console.log("Found id");
        ele.data.message = textRef.current.value;
      }
    });

    reactFlow.setNodes(currentNodes);
  };
  return (
    <div>
      <form className="form">
        <label>Text</label>
        <textarea placeholder="Enter text here" ref={textRef} />
        <button type="submit" onClick={handleChange}>
          Save Edit
        </button>
      </form>
    </div>
  );
}
