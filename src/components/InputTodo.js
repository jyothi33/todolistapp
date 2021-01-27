import React from 'react'

function InputTodo(props) {
   
        return <input type="text" value={props.item} id={props.id} onChange={props.editTodo}></input>
    
}

export default InputTodo
