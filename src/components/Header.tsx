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
        <h1>Logo</h1>
        <List>
          <Item>
              <StyledLink to='/todo'>ToDo</StyledLink>
          </Item>
          <Item>
                <StyledLink to='/signin'>로그인</StyledLink>
          </Item>
          <Item>
              <StyledLink to='/signup'>회원가입</StyledLink>
          </Item>
          {
            isLogin &&  <Item>
              <button onClick={onLogOut}>로그아웃</button>
            </Item>
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

export default Header