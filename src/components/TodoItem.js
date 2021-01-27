import React,{useState} from 'react';
import DeleteIcon from './DeleteIcon';
import EditIcon from './EditIcon';
import SaveIcon from './SaveIcon';
import TickIcon from './TickIcon';
import Parser from 'html-react-parser';

function TodoItem({item,index,deleteTodo, saveTodo, completeTodo}) {
    
    const [isEdit, setIsEdit] = useState(false);
    const [newVal, setNewVal] = useState();
    const [isTick, setIsTick] = useState(false);

    const handleComplete = index => {      
        completeTodo(index.split("_")[1]);
        setIsTick(!isTick);
        setIsEdit(false);
    }
   
    const handleDelete = () => {
        deleteTodo(index);
    }

    const handleEdit = isEdit => {
        setIsEdit(isEdit);
        setNewVal(item.toUpperCase());
    }

    const handleSave =  () => {
        setIsEdit(false);
        saveTodo(index,newVal);
    }    

    return (             
                     item && 
                    <div key={index} id={"list_"+index} className="element">
                        <TickIcon handleComplete={handleComplete} index={"chk_"+index}/>                                       
                        <span className="item" id={"item_"+index}>
                            { isEdit ? <input type="text" onChange={(e)=> setNewVal(e.target.value.toUpperCase())} value={newVal}/>:  Parser(item.toUpperCase())}
                        </span>
                        {isEdit ? <SaveIcon handleSave={handleSave} index={index}/> : <EditIcon handleEdit={handleEdit} index={index} isTick={isTick}/>}
                        <DeleteIcon handleDelete={handleDelete} index={"del_"+index}/>
                    </div>   
    )
}

export default TodoItem
