import React, {useEffect, useState} from 'react';
import {postLogin} from '../api/api';
import {useNavigate} from 'react-router-dom';
import {styled} from 'styled-components';

const SignIn = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isEmailValid = email?.includes('@');
    const isPasswordValid = password?.length >= 8;
    const isFormValid = isEmailValid && isPasswordValid;
    const isLogin = localStorage.getItem('token');
    useEffect(() => {
        if (isLogin) {
            nav('/todo');
        }
    }, []);
    const onSignInBtn = async () => {
        const res = await postLogin({email: email, password: password});
        if (res?.access_token) {
            localStorage.setItem('token', res?.access_token);
        }
        nav('/todo');
    };
    const onEamilChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    return (
        <Wrapper>
            <Title>로그인</Title>
            <SignInForm>
                <EmailInput
                    data-testid='email-input'
                    type='email'
                    value={email}
                    placeholder='이메일을 입력하시오'
                    onChange={onEamilChange}
                />
                <PasswordInput
                    data-testid='password-input'
                    type='password'
                    value={password}
                    placeholder='비밀번호를 입력하시오'
                    onChange={onPasswordChange}
                />
            </SignInForm>
            <SignInButton
                type='button'
                data-testid='signin-button'
                disabled={!isFormValid}
                onClick={onSignInBtn}
            >
                로그인
            </SignInButton>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    width: 70%;
    height: 400px;
    background-color: aliceblue;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h3`
    font-size: 30px;
`;
const SignInForm = styled.div`
    display: flex;
    flex-direction: column;
`;
const EmailInput = styled.input`
    width: 300px;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 10px;
`;
const PasswordInput = styled.input`
    width: 300px;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 10px;
`;
const SignInButton = styled.button`
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
`;

export default SignIn;
