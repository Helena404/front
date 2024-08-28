import React from 'react';
import styled from 'styled-components';
import { Avatar, T } from '@admiral-ds/react-ui';

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

const UserAvatar = styled(Avatar)`
  width: 80px;
  height: 80px;
  margin-right: 16px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled(T)`
  font-size: 24px;
  font-weight: bold;
`;

const UserEmail = styled(T)`
  font-size: 16px;
  color: #666;
`;

const UserProfileHeader = ({ user }) => {
  return (
    <UserProfileContainer>
      <UserAvatar
        dimension="xl"
        href={user.photo}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <UserInfo>
        <UserName as="div">
          {user.firstName} {user.lastName}
        </UserName>
        <UserEmail as="div">
          {user.email}
        </UserEmail>
      </UserInfo>
    </UserProfileContainer>
  );
};

export default UserProfileHeader;
