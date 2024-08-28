import styled from 'styled-components';

import { Button } from '@admiral-ds/react-ui';

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f5f5f5;
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const TeamList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TeamItem = styled.li`
  margin: 0.5rem 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:2000;
`;

export const ModalContent = styled.div`
position: relative;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`;

export const CloseButton = styled.button`
  position:absolute;
  top:10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;

`;


export const TeamInfoButton = styled(Button).attrs({
  dimension: 'xs',
  appearance: 'ghost',
})`
  cursor: pointer;
`;
