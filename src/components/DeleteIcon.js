import React from 'react';
import { MdDeleteForever } from "react-icons/md";

function DeleteIcon({index, handleDelete}) {

    function onDelete(){
        handleDelete();
    }
    return (
        <span onClick={onDelete} id={index}> 
            <MdDeleteForever className="trash"/>
        </span>
    )
}

export default DeleteIcon
