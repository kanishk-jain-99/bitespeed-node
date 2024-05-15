import { useRef } from "react";
import { useReactFlow } from "reactflow";

// Node text edit form

export default function AddMessageForm({ node }) {
  const reactFlow = useReactFlow();
  const textRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    let currentNodes = reactFlow.getNodes();
    currentNodes.forEach((ele) => {
      if (ele.id === node.id) {
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
