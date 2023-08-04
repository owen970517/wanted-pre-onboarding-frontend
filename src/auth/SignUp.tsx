import React, { useEffect, useState } from 'react'
import { createUser } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const SignUp = () => {
    const nav = useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [emailValid,setEmailValid] = useState('')
    const [passwordValid,setPasswordValid] = useState('')
    const isEmailValid = email?.includes('@');
    const isPasswordValid = password?.length >= 8;
    const isFormValid = isEmailValid && isPasswordValid;
    const isLogin = localStorage.getItem('token');
    useEffect(()=> {
        if (isLogin) {
            nav('/todo')
        } 
    },[])
    const onSignUp = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = createUser({email: email , password:password}) 
        data.then((res) => {
            if (res?.status === 201) {
                alert('회원가입이 완료되었습니다.')
                nav('/signin')
            }
        });
    }
    const onSignUpBtn = () => {
        const data = createUser({email: email , password:password}) 
        data.then((res) => {
            if (res?.status === 201) {
                alert('회원가입이 완료되었습니다.')
                nav('/signin')
            }
        });
    }
    const onEamilChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        if (!isEmailValid) {
            setEmailValid('반드시 @를 포함해주세요')
        }
    }
    const onPasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        if (!isPasswordValid) {
            setPasswordValid('비밀번호 8자리 이상 입력해주세요')
        }
    }
  return (
    <Wrapper>
        <Title>회원가입</Title>
        <SignUpForm onSubmit={onSignUp}>
            <EmailInput data-testid="email-input" 
                type="email"
                value={email}
                placeholder='이메일을 입력하시오'
                onChange={onEamilChange}/>
            {!isEmailValid && <p style={{color:'red'}}>{emailValid}</p>}
            <PasswordInput data-testid="password-input" 
                type="password"
                value={password}
                placeholder='비밀번호를 입력하시오'
                onChange={onPasswordChange}
            />
            {!isPasswordValid && <p style={{color:'red'}}>{passwordValid}</p>}
        </SignUpForm>
        <button data-testid="signup-button" disabled={!isFormValid} onClick={onSignUpBtn}>회원가입</button>
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
const SignUpForm = styled.form`
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
export default SignUp