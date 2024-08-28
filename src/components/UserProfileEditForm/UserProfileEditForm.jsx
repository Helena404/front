import React, { useState } from 'react';
import styled from 'styled-components';
import { InputField, Button } from '@admiral-ds/react-ui';
import { uploadUserPhoto } from '../../api/userService'; // Импортируем функцию загрузки фото

const EditFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const UserProfileEditForm = ({ user, onSave }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [jobTitle, setJobTitle] = useState(user.post); // Изменяем на правильное имя
  const [experienceDescription, setExperienceDescription] = useState(user.description); // Изменяем на правильное имя
  const [profileImage, setProfileImage] = useState(user.photo || '');

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
        setProfileImage(response.photoUrl); // Обновляем URL фото на сервере
      } catch (error) {
        console.error('Ошибка при загрузке фото:', error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...user, firstName, lastName, email, phoneNumber, post: jobTitle, description: experienceDescription, photo: profileImage });
  };

  return (
    <EditFormContainer onSubmit={handleSubmit}>
      <InputField
        label="Имя"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <InputField
        label="Фамилия"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <InputField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
      />
      <InputField
        label="Номер телефона"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        type="tel"
      />
      <InputField
        label="Должность"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        required
      />
      <InputField
        label="Описание опыта"
        value={experienceDescription}
        onChange={(e) => setExperienceDescription(e.target.value)}
        multiline
        required
      />
      <InputField
        label="Выберите изображение:"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <Button type="submit" dimension="m">
        Сохранить
      </Button>
    </EditFormContainer>
  );
};

export default UserProfileEditForm;
