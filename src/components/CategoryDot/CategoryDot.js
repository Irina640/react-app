import "./CategoryDot.css";

export const CategoryDot = ({ color }) => {
  return <span className={`category-dot ${!color && "no-category"}`} style={{ backgroundColor: color }} />;
};