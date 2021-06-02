import { useRef } from 'react';
import './Input.css';

export const Input = ({text, handleText}) => {
    // что текст не писался с лправо на лево  const [innerText,SetinnerText] = useState(text);
    const textRef = useRef(text);
    // const inputRef = useRef(null);
    const handleInput = (e) => {
        handleText(e.target.innerText);
    };
   
    // вместо textarea ставим div из-за высоты, что бы не было прокрутки
    return (
        <div contentEditable className="input" suppressContentEditableWarning onInput ={handleInput} >
            {textRef.current}
        </div>
    );
};