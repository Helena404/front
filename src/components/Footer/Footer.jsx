import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Team Management System. Все права защищены.</p>
    </FooterContainer>
  );
};

export default Footer;
