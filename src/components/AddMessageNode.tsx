import { LuMessageCircle } from "react-icons/lu";
import { useReactFlow } from "reactflow";

export default function AddMessageNode() {
  const reactFlow = useReactFlow();

  const onDragNode = (e) => {
    let currentNodes = reactFlow.getNodes();

    let nodeToCreate = {
      id: String(Math.random() * 10),
      type: "message-node",
      position: {
        x: e.clientX - 0.9 * e.clientX,
        y: e.clientY - 0.85 * e.clientY,
      },
      data: { message: "Select to Edit Text" },
      width: 153,
      height: 51,
    };

    reactFlow.addNodes([...currentNodes, nodeToCreate]);
  };

  return (
    <div>
      <button className="btn" onDragEndCapture={onDragNode} draggable={true}>
        <span>
          <LuMessageCircle color="lightblue" size={30} />
        </span>
        <span>Message</span>
      </button>
    </div>
  );
}
