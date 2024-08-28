import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Dashboard from '../../components/Dashboard';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const MainPage = () => {
  return (
    <MainContainer>
      <Header />
      <Content>
        <Dashboard />
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default MainPage;
