import React from 'react';
import {styled} from 'styled-components';
import ModifyToDo from './ModifyToDo';
import ToDo from './ToDo';
import {useToDoContext} from '../contexts/TodoContext';

const ToDoList = () => {
    const {todoList, isModify, modifyId} = useToDoContext();
    return (
        <ToDoItems>
            {todoList?.map(todo => {
                return (
                    <ToDoItem key={todo.id}>
                        {isModify && modifyId === todo.id ? (
                            <ModifyToDo />
                        ) : (
                            <ToDo todo={todo.todo} isCompleted={todo.isCompleted} id={todo.id} />
                        )}
                    </ToDoItem>
                );
            })}
        </ToDoItems>
    );
};
const ToDoItems = styled.ul`
    padding: 30px 20px;
    margin-top: 10px;
    border-radius: 10px;
    width: 100%;
    position: relative;
`;

const ToDoItem = styled.li`
    background-color: #c5e1e6;
    width: 90%;
    height: 50px;
    margin-bottom: 8px;
    padding: 5px 10px;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    border: 1px solid #939697;
    cursor: pointer;
    text-decoration: none;
`;

export default ToDoList;
