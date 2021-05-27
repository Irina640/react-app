// import { useState } from "react";
import {CheckIcon} from "../CheckIcon/CheckIcon"
import "./Checkbox.css";

// убираем const [checked, setChecked] = useState(done);
export const Checkbox = ({ done, handleState}) => {
    const handleClick = () => {
        handleState(!done);
    };

    return (
        <span 
          className={!done ? "checkbox" : "checkbox--checked"}
          onClick= {handleClick} >
            <input type="checkbox" className="checkbox__input"/>
            <CheckIcon checked={done}/> 
        </span>
    );
};

// export const Checkbox = ({done,handleState}) => {
//   // создаем состояния для Checkbox
//     const [checked, setChecked] = useState(done);

//     const handleClick = () => {
//         handleState(!checked);
//         setChecked(!checked);

//     };
//     console.log(checked)

//     return (
//     <span 
//         className={!checked ? "checkbox" : "checkbox--checked"}
//         onClick= {handleClick}
//     >
//        <input type="checkbox" className="checkbox__input"/>
//        <CheckIcon checked={checked}/> 
//     </span>
//     );
// }

