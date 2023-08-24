import React, { useEffect, useState } from 'react'
import { createUser } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const SignUp = () => {
    const nav = useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const isLogin = localStorage.getItem('token');
    useEffect(()=> {
        if (isLogin) {
            nav('/todo')
        } 
    },[])
    const onSignUpBtn = async () => {
        const data = await createUser({ email, password });
        if (data?.status === 201) {
            alert('회원가입이 완료되었습니다.');
            nav('/signin');
        }
    };
    const onEamilChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        const isValid = e.target.value?.includes('@');
        setIsEmailValid(isValid);
        setIsFormValid(isValid && isPasswordValid);
    }
    const onPasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        const isValid = e.target.value?.length >= 8;
        setIsPasswordValid(isValid);
        setIsFormValid(isEmailValid && isValid);
    }
  return (
    <Wrapper>
        <Title>회원가입</Title>
        <SignUpForm>
            <EmailInput data-testid="email-input" 
                type="email"
                value={email}
                placeholder='이메일을 입력하시오'
                onChange={onEamilChange}/>
            {email && !isEmailValid && (<p style={{ color: 'red' }}>이메일 형식이 올바르지 않습니다.</p>)}
            <PasswordInput data-testid="password-input" 
                type="password"
                value={password}
                placeholder='비밀번호를 입력하시오'
                onChange={onPasswordChange}
            />
            {password && !isPasswordValid && (<p style={{ color: 'red' }}>비밀번호는 8자리 이상이어야 합니다.</p>)}
        </SignUpForm>
        <SignUpButton data-testid="signup-button" disabled={!isFormValid} onClick={onSignUpBtn}>회원가입</SignUpButton>
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
const SignUpForm = styled.div`
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
const SignUpButton = styled.button`
    display: inline-block;
    padding: 12px 24px;
    background-color: #1a759f;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #0f5679;
    }
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`
export default SignUp