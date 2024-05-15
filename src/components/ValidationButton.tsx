import { useReactFlow } from "reactflow";

export default function ValidationButton() {
  const reactFlow = useReactFlow();

  const handleValidation = () => {
    const currentNodes = reactFlow.getNodes();

    const currentEdges = reactFlow.getEdges();

    let targetHandles: string[] = [];

    currentEdges.forEach((ele) => {
      targetHandles.push(ele.target);
    });

    const targetSet = new Set(targetHandles);

    if (
      currentNodes.length > 1 &&
      currentNodes.length > targetSet.size &&
      currentNodes.length - targetSet.size > 1
    ) {
      window.alert("Cannot save flow");
    }
  };

  return (
    <div>
      <button className="btn-save-changes" onClick={handleValidation}>
        Save Changes
      </button>
    </div>
  );
}
