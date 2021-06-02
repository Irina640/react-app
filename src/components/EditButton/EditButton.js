import { useContext } from "react";
import "./EditButton.css";
import { EditingContext } from "../../providers/EditingProvider";

export const EditButton = () => {
  const { isEditing, setEditing } = useContext(EditingContext);
  const handleClick = () => {
    setEditing(!isEditing);
  };
  return (
    <span className="edit-button" onClick={handleClick}>
      {!isEditing ? "Edit" : "Done"}
    </span>
  );
};