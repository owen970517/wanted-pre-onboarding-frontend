import React from 'react'
import { styled } from 'styled-components';
import { IToDoProps } from '../types/todo';
import { useToDoContext } from '../contexts/TodoContext';
import { deleteToDo, updateToDo } from '../api/api';

const ToDo:React.FC<IToDoProps> = ({ todo, id,isCompleted }) => {
  const { todoList,setIsModify, setModifyId,setModifyToDo,setModifyCompleted } = useToDoContext();
  const onHandleModify = (id:number) => {
    setIsModify(prev => !prev)  
    setModifyId(id)
    const itemToModify = todoList.find(item => item.id === id);
    if (itemToModify) {
    setModifyToDo(itemToModify.todo);
    setModifyCompleted(itemToModify.isCompleted)
    }
  }
  const onDeleteToDo = (id:number) => {
    deleteToDo(id)
  }
  const onToDoChecked = (todo?:string, e?:React.ChangeEvent<HTMLInputElement> , id? : number ) => {
    updateToDo(todo,e?.target.checked,id)
  }
  return (
    <>
      <StyledLabel>
        <StyledCheckBox type="checkbox" onChange={(e) => onToDoChecked(todo,e,id)} checked={isCompleted} />
        <ToDoSpan $iscompleted={isCompleted ? 'line-through' : 'none'}>{todo}</ToDoSpan>
      </StyledLabel>
      <StyledBtn data-testid="modify-button" onClick={() => onHandleModify(id)}>
        수정
      </StyledBtn>
      <StyledBtn data-testid="delete-button" onClick={() => onDeleteToDo(id)}>
        삭제
      </StyledBtn>
    </>
  )
}

const ToDoSpan = styled.span<{$iscompleted:string}>`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-decoration: ${(props) => props.$iscompleted};
`

const StyledBtn =styled.button`
  background-color: #1a759f;
  color : #fff;
  height: 25px;
  width:40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  margin-right: 10px;
`

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  margin-right: 10px;
`;
const StyledCheckBox = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid white;
  border-radius: 0.35rem;
  cursor: pointer;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
  }
`;
export default ToDo