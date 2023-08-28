import React, {useState, ReactNode, useContext, createContext} from 'react';
import {IToDolist} from '../types/todolist';

interface IToDoContext {
    todoList: IToDolist[];
    setToDoList: React.Dispatch<React.SetStateAction<IToDolist[]>>;
    isModify: boolean;
    setIsModify: React.Dispatch<React.SetStateAction<boolean>>;
    modifyId: number;
    setModifyId: React.Dispatch<React.SetStateAction<number>>;
    modifyToDo: string;
    setModifyToDo: React.Dispatch<React.SetStateAction<string>>;
    modifyCompleted: boolean;
    setModifyCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToDoContext = createContext<IToDoContext | null>(null);

// children에 대한 타입을 어떻게 지정해야되는지 몰라서 해결하는데 오래 걸렸습니다.
export const ToDoContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [todoList, setToDoList] = useState<IToDolist[]>([]);
    const [isModify, setIsModify] = useState(false);
    const [modifyId, setModifyId] = useState(0);
    const [modifyToDo, setModifyToDo] = useState('');
    const [modifyCompleted, setModifyCompleted] = useState(false);
    const initialState = {
        todoList,
        setToDoList,
        isModify,
        setIsModify,
        modifyId,
        setModifyId,
        modifyToDo,
        setModifyToDo,
        modifyCompleted,
        setModifyCompleted,
    };
    return <ToDoContext.Provider value={initialState}>{children}</ToDoContext.Provider>;
};

export const useToDoContext = () => {
    const context = useContext(ToDoContext);
    if (!context) {
        throw new Error('useToDoContext must be used within a ToDoContextProvider');
    }
    return context;
};
