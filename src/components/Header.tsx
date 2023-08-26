import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const nav = useNavigate();
  const isLogin = localStorage.getItem('token');
  const onLogOut = () => {
    localStorage.removeItem('token')
    nav('/signin');
  }
  return (
    <Wrapper>
        <h1>LOGO</h1>
        <List>
          {
            isLogin ?  
              <>
                <Item>
                  <LogOutButton onClick={onLogOut}>로그아웃</LogOutButton>
                </Item> 
                <Item>
                  <StyledLink to='/todo'>ToDo</StyledLink>
                </Item>
              </>:
              <>
                <Item>
                  <StyledLink to='/signin'>로그인</StyledLink>
                </Item>
                <Item>
                    <StyledLink to='/signup'>회원가입</StyledLink>
                </Item>
              </>
          }
        </List>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const List = styled.ul`
    display: flex;
    text-decoration: none;
`
const Item = styled.h3`
  margin-left: 10px;
  font-size: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const LogOutButton= styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #e63946;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c53741;
  }
`
export default Header