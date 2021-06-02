import "./Category.css";
import { useContext } from "react";
import { EditingContext } from "../../providers/EditingProvider";

export const categoryKeys = {
  title: "title",
  color: "color",
};

export const Category = ({ 
  index,
  id,
  title, 
  color, 
  isActive,
  setActiveCategoryId,
  updateCategory, 
  deleteCategory
}) => {
  const handleClick = () => {
    // console.log(!isActive ? id : undefined);
    setActiveCategoryId(!isActive ? id : undefined);
  };
  // const handleTextCategory = (text) => {
  //   updateCategory(index, categoryKeys.title, text);
  // };
  // const handleDeleteCategory= () => {
  //   deleteCategory(id);
  // };

  const { isEditing } = useContext(EditingContext);

  return (
    <div className="category" style={{ backgroundColor: color }} onClick={handleClick}>
      <div className="category__title">{title}</div>
    </div>
  );
};