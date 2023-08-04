import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getToDos } from '../api/api';
import { styled } from 'styled-components';
import ToDoInputForm from '../todo/ToDoInputForm';
import ToDoList from '../todo/ToDoList';
import { useToDoContext } from '../contexts/TodoContext';

const Home = () => {
  const nav = useNavigate();
  const { todoList, setToDoList } = useToDoContext();
  const isToken = localStorage.getItem('token');
  useEffect(()=> {
    if (!isToken) {
      nav('/signin')
    } 
    const fetchData = async () => {
      const data = await getToDos();
      setToDoList(data);
    }
    fetchData();
  },[todoList])
  return (
    <Wrapper>
      <ToDoInputForm/>
      <ToDoList/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  width : 50%;
  border-radius: 10px;
  background: #52b69a;
`
export default Home