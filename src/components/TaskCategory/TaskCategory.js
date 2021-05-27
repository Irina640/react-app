import { useState } from "react";
import './TaskCategory.css';

export const TaskCategory = ({color}) => {
    const [category, setCategory] = useState(color);

    return (
        <div 
            class="tasks__task-category"
            style={{'background-color': color}}
        ></div>
    );
}