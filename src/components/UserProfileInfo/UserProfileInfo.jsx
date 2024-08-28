import React, { useState, useEffect } from 'react';
import {
  UserProfileInfoContainer,
  ProfileImage,
  InfoGroup,
  Label,
  ButtonContainer,
  LinkButton,
  SaveButton,
  LinkStyled 
} from './StyledUserProfileInfo';
import { InputField } from '@admiral-ds/react-ui'; // Используем InputField
import { uploadUserPhoto } from '../../api/userService'; // Импортируем функцию загрузки фото

const UserProfileInfo = ({ user, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [profileImage, setProfileImage] = useState(user.photo || '');

  useEffect(() => {
    setEditedUser({ ...user });
    setProfileImage(user.photo || '');
  }, [user]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Локальное отображение загруженного изображения
      };
      reader.readAsDataURL(file);

      try {
        const response = await uploadUserPhoto(file);
        setEditedUser({ ...editedUser, photo: response.photoUrl }); // Обновляем URL фото на сервере
      } catch (error) {
        console.error('Ошибка при загрузке фото:', error);
      }
    }
  };

  const handleSave = () => {
    onSave({ ...editedUser, photo: profileImage });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser({ ...user });
    setProfileImage(user.photo || '');
    setIsEditing(false);
  };

  return (
    <UserProfileInfoContainer>
      <ProfileImage src={profileImage} alt="Profile" />
      <div style={{ flex: 1 }}>
        {/* Отображение информации о пользователе */}
        {isEditing ? (
          <>
            <InfoGroup>
              <Label as="div">Имя:</Label>
              <InputField
                value={editedUser.firstName}
                onChange={(e) => setEditedUser({ ...editedUser, firstName: e.target.value })}
              />
            </InfoGroup>
            <InfoGroup>
              <Label as="div">Фамилия:</Label>
              <InputField
                value={editedUser.lastName}
                onChange={(e) => setEditedUser({ ...editedUser, lastName: e.target.value })}
              />
            </InfoGroup>
            <InfoGroup>
              <Label as="div">Email:</Label>
              <InputField
                value={editedUser.email}
                onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
              />
            </InfoGroup>
            <InfoGroup>
              <Label as="div">Телефон:</Label>
              <InputField
                value={editedUser.phoneNumber}
                onChange={(e) => setEditedUser({ ...editedUser, phoneNumber: e.target.value })}
              />
            </InfoGroup>
            <InfoGroup>
              <Label as="div">Должность:</Label>
              <InputField
                value={editedUser.post}
                onChange={(e) => setEditedUser({ ...editedUser, post: e.target.value })}
              />
            </InfoGroup>
            <InfoGroup>
              <Label as="div">Описание:</Label>
              <InputField
                value={editedUser.description}
                onChange={(e) => setEditedUser({ ...editedUser, description: e.target.value })}
                multiline
              />
            </InfoGroup>
          </>
        ) : (
          <>
            <InfoGroup>
              <Label as="div">Имя:</Label>
              <InputField value={user.firstName} readOnly />
            </InfoGroup>
            <InfoGroup>
              <Label as="div">Фамилия:</Label>
              <InputField value={user.lastName} readOnly />
            </InfoGroup>
            <InfoGroup>
              <Label as="div">Email:</Label>
              <InputField value={user.email} readOnly />
            </InfoGroup>
			<InfoGroup>
              <Label as="div">Телефон:</Label>
              <LinkStyled href={`tel:${editedUser.phoneNumber}`}>
                <InputField value={editedUser.phoneNumber} readOnly />
              </LinkStyled>
            </InfoGroup>
            <InfoGroup>
              <Label as="div">Телеграм:</Label>
              <LinkStyled href={`tg://resolve?domain=${editedUser.telegram}`}>
                <InputField value={editedUser.telegram} readOnly />
              </LinkStyled>
            </InfoGroup>
            <InfoGroup>
              <Label as="div">Должность:</Label>
              <InputField value={user.post} readOnly />
            </InfoGroup>
            <InfoGroup>
              <Label as="div">Описание:</Label>
              <InputField value={user.description} readOnly multiline />
            </InfoGroup>
          </>
        )}

        <ButtonContainer>
          {isEditing ? (
            <>
              <SaveButton dimension="m" onClick={handleSave}>
                Сохранить
              </SaveButton>
              <LinkButton dimension="m" onClick={handleCancel} appearance="ghost">
                Отмена
              </LinkButton>
            </>
          ) : (
            <LinkButton dimension="m" onClick={() => setIsEditing(true)}>
              Редактировать
            </LinkButton>
          )}
        </ButtonContainer>
      </div>
    </UserProfileInfoContainer>
  );
};

export default UserProfileInfo;
