  
import { Checkbox } from "../Checkbox/Checkbox";
import { Input } from "../Input/Input";
import "./Task.css";
import { categoryList } from "../../data/categoryList";
import { CategoryDot } from "../CategoryDot/CategoryDot";
import { Delete } from "../Delete/Delete";
import { useContext } from "react";
import { EditingContext } from "../../providers/EditingProvider";

export const taskKeys = {
  done: "done",
  copytext: "text",
  category: "category",
};

export const Task = ({
  done,
  text,
  category,
  updateList,
  index,
  deleteTask,
  id,
  setCategoryModalOpen,
  setActiveTask,
}) => {
  const { isEditing } = useContext(EditingContext);
  const currentCategory = categoryList.find((categoryItem) => categoryItem.id === category);
  const handleState = (checked) => {
    updateList(index, taskKeys.done, checked);
  };
  const handleText = (text) => {
    updateList(index, taskKeys.copytext, text);
  };
  const handleDelete = () => {
    deleteTask(id);
  };
  const openCategoryModal = () => {
    setCategoryModalOpen(true);
    setActiveTask({ category, index });
  };
  return (
    <div className="task">
      <div className="task__action">
        <div className={`task__action-item ${isEditing && "task__action-item--flipped"}`}>
          <Checkbox done={done} handleState={handleState} />
        </div>
        <div className={`task__action-item-back ${isEditing && "task__action-item-back--flipped"}`}>
          <Delete onClick={handleDelete} />
        </div>
      </div>
      <div className="task__input">
        <Input text={text} handleText={handleText} />
      </div>
      <div className="task__category" onClick={openCategoryModal}>
        <CategoryDot color={currentCategory && currentCategory.color} />
      </div>
    </div>
  );
};
