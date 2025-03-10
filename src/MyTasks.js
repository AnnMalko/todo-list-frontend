import React from 'react';
import { FiEdit2 } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

export const MyTasks = ( { text, updatingInInput, deleteTask}) => { 
    return (    
        <div>
        <p>{text}</p>
        <FiEdit2 onClick={updatingInInput}></FiEdit2>
        <TiDelete onClick={deleteTask}></TiDelete>
        </div>
    );              
}
