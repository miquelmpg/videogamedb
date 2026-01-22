import { useDroppable } from "@dnd-kit/core";

function DroppableContainer({ id, children }) {
    const { isOver, setNodeRef } = useDroppable({ id });

    const style = {
        padding: "20px",
        height: "auto",
        border: "2px dashed #999",
        backgroundColor: isOver ? "#e0e7ff" : "#f9fafb",
        borderRadius: "10px",
        transition: "background-color 0.2s ease",
    };

    return (
        <div ref={setNodeRef} style={style}>
            {children}
        </div>
    );
}

export default DroppableContainer;