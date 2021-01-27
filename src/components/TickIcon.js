import React from 'react';
import { RiCheckboxCircleFill } from "react-icons/ri";

function TickIcon({handleComplete,index}) {

    let tickTodo = () => {
        handleComplete(index);
    }
    return (
        <RiCheckboxCircleFill onClick={tickTodo} id={index} className="tick"/>
    )
}

export default TickIcon
