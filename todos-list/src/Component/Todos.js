import React from 'react'
import {Todo} from './Todo';
export default function Todos(props) {
    return (
        <div className="container">
            <h3 className="text-center my-3">TODOS Section Work</h3>
            {props.todos.map((todo)=>{
                return <Todo todo={todo} key={todo.id} onDelete={props.onDelete}/>
            })}
        </div>
    )
}