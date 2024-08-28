// components/Loading/Loading.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Анимация для многоточия
const dotFlashing = keyframes`
  0% {
    content: '';
  }
  33% {
    content: '.';
  }
  66% {
    content: '..';
  }
  100% {
    content: '...';
  }
`;

// Контейнер для центровки надписи
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  color: #666;
`;

// Стилизованная надпись с анимацией
const LoadingText = styled.div`
  &::after {
    content: '';
    display: inline-block;
    animation: ${dotFlashing} 1.5s infinite linear;
  }
`;

const Loading = () => (
  <LoadingContainer>
    <LoadingText>Loading</LoadingText>
  </LoadingContainer>
);

export default Loading;
