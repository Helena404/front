// src/components/Header/StyledHeader.js

import styled from 'styled-components';
import { Button, T } from '@admiral-ds/react-ui';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
`;

export const LogoImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  min-width: 100px;
`;

export const ProfileLink = styled(T)`
  margin-right: 20px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
