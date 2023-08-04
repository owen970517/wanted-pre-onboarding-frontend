import React, { useEffect, useState } from 'react'
import { postLogin } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const SignIn = () => {
    const nav = useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const isEmailValid = email?.includes('@');
    const isPasswordValid = password?.length >= 8;
    const isFormValid = isEmailValid && isPasswordValid;
    const isLogin = localStorage.getItem('token');
    useEffect(()=> {
       if (isLogin) {
            nav('/todo')
       } 
    },[])
    const onSignInSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = postLogin({email: email , password:password})
        res.then((getData) => {
            console.log(getData)
            if (getData?.access_token) {
                localStorage.setItem('token',getData?.access_token);
            }
            nav('/todo')
        });
    }
    const onSignInBtn = () => {
        const res = postLogin({email: email , password:password})
        res.then((getData) => {
            if (getData?.access_token) {
                localStorage.setItem('token',getData?.access_token);
            }
            nav('/todo')
        });
    }
    const onEamilChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    return (
        <Wrapper>
            <Title>로그인</Title>
            <SignInForm onSubmit={onSignInSubmit}>
                <EmailInput data-testid="email-input" 
                    type="email"
                    value={email}
                    placeholder='이메일을 입력하시오'
                    onChange={onEamilChange}/>
                <PasswordInput data-testid="password-input" 
                    type="password"
                    value={password}
                    placeholder='비밀번호를 입력하시오'
                    onChange={onPasswordChange}
                />
            </SignInForm>
            <button type='button' data-testid="signin-button" disabled={!isFormValid} onClick={onSignInBtn}>로그인</button>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width : 70%;
    height : 400px;
    background-color: aliceblue;
    margin : 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h3`
    font-size: 30px;
`
const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
`
const EmailInput = styled.input`
    width: 300px;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 10px;
`
const PasswordInput = styled.input`
    width: 300px;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 10px;
`

export default SignIn