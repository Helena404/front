import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { 
  HeaderContainer, 
  LogoContainer, 
  LogoImage, 
  Nav, 
  StyledButton, 
  ProfileLink 
} from './StyledHeader';

const Header = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <LogoContainer as="a" href="/">
        <LogoImage src={logo} alt="Platform Logo" />
        <h1 style={{ fontSize: '1.5rem' }}>Team Management System</h1>
      </LogoContainer>

      <Nav>
        <ProfileLink as="a" href="/profile">
          Профиль
        </ProfileLink>
        <StyledButton dimension="m" onClick={handleLogout}>
          Выйти
        </StyledButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
