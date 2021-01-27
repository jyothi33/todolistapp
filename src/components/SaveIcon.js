import React from 'react';
import {FiSave} from "react-icons/fi";

function SaveIcon({handleSave,index}) {

    const saveTodo = () => {
        handleSave();
    }
    return (
        <span id={"save_"+index} onClick={saveTodo}> 
            <FiSave className="save"/>
        </span>
    )
}

export default SaveIcon
