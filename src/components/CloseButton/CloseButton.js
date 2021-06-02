import "./CloseButton.css";
import { ReactComponent as SvgPlus } from "../../assets/plus.svg";

export const CloseButton = ({ onClick }) => {
  return (
    <span className="close-button" onClick={onClick}>
      <SvgPlus className="close-button__icon" />
    </span>
  );
};