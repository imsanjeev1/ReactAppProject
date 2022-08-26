import React from 'react'
import {Todo} from './Todo';
export default function Todos(props) {
    return (
        <div className="container">
            <h3 className="text-center my-3">TODOS Section Work</h3>
            <Todo todo={props.todos[0]}/>
        </div>
    )
}