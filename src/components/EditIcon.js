import React from 'react';
import {RiEditFill} from "react-icons/ri";

function EditIcon({handleEdit,index, isTick}) {   

    const editTodo = () => {
        handleEdit(true);
    }
   return !isTick && <span onClick={editTodo} id={"edit_"+index}><RiEditFill className="edit"/></span>  
}

export default EditIcon
