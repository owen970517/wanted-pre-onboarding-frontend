import React from 'react'
import { styled } from 'styled-components';
import { useToDoContext } from '../contexts/TodoContext';
import { updateToDo } from '../api/api';

const ModifyToDo= () => {  
    const {
      modifyToDo,
      modifyId,
      modifyCompleted,
      setModifyCompleted,
      setModifyToDo,
      setIsModify,
    } = useToDoContext()
    const onModifyToDo = (id:number) => {
      updateToDo(modifyToDo,modifyCompleted,id)
      setIsModify(false);
    }
    const onCancelModify = () => {
        setIsModify(false);
    }
    const onModifyToDoChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setModifyToDo(e.target.value)
    }
    return (
      <>
        <StyledLabel>
          <StyledCheckBox type="checkbox" onChange={(e) => setModifyCompleted(e.target.checked)} checked={modifyCompleted} />
          <ModifyInput type="text" data-testid="modify-input" onChange={onModifyToDoChange} value={modifyToDo} />
        </StyledLabel>
        <StyledBtn data-testid="submit-button" onClick={() => onModifyToDo(modifyId)}>
          제출
        </StyledBtn>
        <StyledBtn data-testid="cancel-button" onClick={onCancelModify}>
          취소
        </StyledBtn>
      </>
    );
  };
const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  margin-right: 10px;
`;
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

const ModifyInput = styled.input`
  width : 100%;
  height: 20px;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  border: 2px solid #d1d3d4;
`
export default ModifyToDo