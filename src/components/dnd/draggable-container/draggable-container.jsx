import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";

function DraggableContainer({ id, children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  // Calculamos la posición en tiempo real
  const x = (transform?.x ?? 0) + position.x;
  const y = (transform?.y ?? 0) + position.y;

  const style = {
    width: '300px',
    position: "absolute",
    cursor: "grab",
    touchAction: "none",
    overflowY: 'hidden',
    transform: `translate(${x}px, ${y}px)`,
  };

  // Al soltar, acumulamos la posición
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
      onPointerUp={handlePointerUp} // cuando sueltas el mouse o dedo
    >
      {children}
    </div>
  );
}

export default DraggableContainer;
