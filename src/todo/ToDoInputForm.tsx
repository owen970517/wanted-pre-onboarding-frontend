import React, { useState } from 'react'
import { styled } from 'styled-components'
import { createToDos } from '../api/api';

const ToDoInputForm = () => {
  const [todo,setToDo] = useState('');
  const onToDoChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setToDo(e.target.value)
    }
  const onToDoAdd = () => {
      createToDos(todo)
      setToDo('')
    }
  return (
    <NewToDo>
        <ToDoInput type='text' placeholder='할 일 ' data-testid="new-todo-input" onChange={onToDoChange} value={todo}/>
        <AddBtn data-testid="new-todo-add-button" onClick={onToDoAdd}>Add</AddBtn>
    </NewToDo>
  )
}
const NewToDo = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
`

const ToDoInput = styled.input`
  width: 70%;
  height: 30px;
  font-family: 'Poppins', sans-serif;
  margin-right: 10px;
  font-size: 15px;
  border: 2px solid #d1d3d4;
  padding: 12px;
  color : #111111;
  font-weight: 500;
  position: relative;
  border-radius: 5px;
`
const AddBtn = styled.button`
  position: relative;
  float: right;
  width: 20%;
  height: 50px;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  background-color: #1a759f;
  border: none;
  color :#fff;
  cursor: pointer;
  outline: none;
`
export default ToDoInputForm