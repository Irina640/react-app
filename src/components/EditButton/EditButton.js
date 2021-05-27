import "./EditButton.css";


export const EditButton = ({onClick, isEditing }) => {
   return (
        <span className ="edit-button" onClick={onClick} >
            {!isEditing ? "Edit" : "Done"}
        </span>
    );
};