import styled from 'styled-components';
import { T, Button } from '@admiral-ds/react-ui';

export const UserProfileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-right: 40px;
`;

export const InfoGroup = styled.div`
  margin-bottom: 12px;
  flex: 1; /* Позволяет информации занимать оставшееся место */
`;

export const Label = styled(T)`
  font-size: 14px;
  color: #888;
  margin-bottom: 4px;
`;

export const Value = styled(T)`
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled(T)`
  font-size: 14px;
  color: #333;
  margin-top: 8px;
  white-space: pre-wrap; 
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const LinkButton = styled(Button)`
  margin-left: 8px;
  min-width: 120px; 
`;

export const SaveButton = styled(Button)`
  min-width: 120px;
`;

export const LinkStyled = styled.a`
  text-decoration: none; 
  color: #007aff; 
  cursor: pointer; 

  &:hover {
    color: #0056b3; 
  }
`;