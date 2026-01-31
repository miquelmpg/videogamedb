import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";

function DraggableContainer({ id, children }) {
  const [position, setPosition] = useState({ x:  window.innerWidth - 350, y: window.innerHeight - (window.innerHeight- 82.5)});

  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const x = (transform?.x ?? 0) + position.x;
  const y = (transform?.y ?? 0) + position.y;

  const style = {
    width: '300px',
    position: "absolute",
    cursor: "grab",
    touchAction: "none",
    transform: `translate(${x}px, ${y}px)`,
  };

  const handlePointerUp = () => {
    if (transform) {
      setPosition((prev) => ({
        x: prev.x + transform.x,
        y: prev.y + transform.y,
      }));
    }
  };

  return (
    <div
      ref={setNodeRef} 
      style={style}
      {...listeners}
      {...attributes}
      onPointerUp={handlePointerUp}
    >
      {children}
    </div>
  );
}

export default DraggableContainer;
