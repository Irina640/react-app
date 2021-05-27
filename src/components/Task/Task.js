import { Checkbox } from "../Checkbox/Checkbox";
import { Input } from "../Input/Input";
import "./Task.css";
import { categoryList } from "../../Data/categoryList";
import { CategoryDot } from "../CategoryDot/CategoryDot";
import { Delete } from "../Delete/Delete";
import { taskKeys } from "../../App";
import { useContext } from "react";


export const taskKeys = {
  done: "done",
  text: "text",
  category: "category",
};

export const Task = ({ done, text, category, updateList, index, deleteTask,id }) => {
  // export const Task = ({ done, text, category, updateList, index, deleteTask,id , isEditing }) => {
  console.log(categoryList);
  сonst { isEditing } = useContext(EditingContext);
  const currentCategory = categoryList.find((categoryItem) => categoryItem.id === category);
  const handleState = (checked) => {
    updateList(index, taskKeys.done, checked);
  };
  const handleText = (text) => {
    updateList(index, taskKeys.copytext, text);
  };
  // const handleFocus =() => {
  //  setFocusedItem(id);
  // //  console.log("focus", index);
  // };
  // const handleBlur = () => {
  //   setFocusedItem();
  // };
  const handleDelete = () => {
    deleteTask(id);
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
        <Input text ={text} handleText={handleText} />
      </div>
      <div className="task__category">
        {/* проверяем если вообще в выбраном id категория color*/}
        {/* {currentCategory && currentCategory.color} */}
        {currentCategory && <CategoryDot color={currentCategory.color}/>} 
      </div>
     
    </div>
  );
};