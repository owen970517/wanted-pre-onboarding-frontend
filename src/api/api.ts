import axios from "axios";
import { IUser } from "../types/user";

export const createUser = async (props :IUser) => {
  try {
    const response = await axios.post('https://www.pre-onboarding-selection-task.shop/auth/signup', {
      email: props.email,
      password: props.password
    })
    return response
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      alert(err.response.data.message);
    }
  }
}
export const postLogin = async (props : IUser) => {
  try {  
    const response = await axios.post('https://www.pre-onboarding-selection-task.shop/auth/signin' , {
    email: props.email,
    password: props.password
  })
  return await response.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      alert(err.response.data.message);
    }
  }
}

export const createToDos = async (todo : string) => {
  const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
  await axios.post('https://www.pre-onboarding-selection-task.shop/todos' , {
      todo : todo
    }, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  })
}

export const getToDos = async () => {
  const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    try {
      const response = await axios.get('https://www.pre-onboarding-selection-task.shop/todos', {
        headers : { 
          "Authorization": `Bearer ${token}`, 
        }
      })
      const data = response.data
      return await data
    } catch(err) {
      if (axios.isAxiosError(err) && err.response) {
        console.log(err.response.data.message);
      }
    }
}

export const deleteToDo = async (id:number) => {
  const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
  const ok = window.confirm("정말 삭제하시겠습니까??");
  if (ok) {
    await axios.delete('https://www.pre-onboarding-selection-task.shop/todos/' + id , {
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`,
      }
    })
  } 
}

export const updateToDo = async (todo?:string , isCompleted?:boolean, id? : number) => {
  const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    await axios.put('https://www.pre-onboarding-selection-task.shop/todos/' + id , {
      todo : todo,
      isCompleted : isCompleted,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`,
      }
    }
  )
}