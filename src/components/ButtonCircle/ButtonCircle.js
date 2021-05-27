import "./ButtonCircle.css";
import {ReactComponent as SvgPlus} from "../../assets/plus.svg";

export const ButtonCircle = ({onClick}) => {
   return (
        <span className ="button-circle" onClick={onClick}>
            <SvgPlus className="button-circle__icon" />
        </span>
    );
};