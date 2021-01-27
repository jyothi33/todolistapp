import React,{useState,useRef} from 'react';

function TodoForm({addTask}) {

    const [inputText, setInputText] = useState();
    const inputRef = useRef("");   

    const handleSubmit = event => {
        event.preventDefault();
        addTask(inputText);
        setInputText("");
    }

    const handleChange = event => {
        let userInput = event.target.value.trim();
        userInput!== "" && setInputText(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" className="addTxt" ref={inputRef} value={inputText} onChange={handleChange} placeholder="Enter a task"/>
            </form>            
        </div>
    )
}

export default TodoForm
