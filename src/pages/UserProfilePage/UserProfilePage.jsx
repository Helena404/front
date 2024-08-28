import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserProfileHeader from '../../components/UserProfileHeader/UserProfileHeader';
import UserProfileInfo from '../../components/UserProfileInfo/UserProfileInfo';
import UserProfileEditForm from '../../components/UserProfileEditForm/UserProfileEditForm';
import { getUserProfile, updateUserProfile } from '../../api/userService';
import { ProfilePageContainer, Content, ProfileContent } from './StyledUserProfilePage';
import Loading from '../../components/Loading/Loading';

const UserProfilePage = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [userData, setUserData] = useState(null);
  
	useEffect(() => {
	  const fetchUserData = async () => {
		try {
		  const data = await getUserProfile();
		  setUserData(data);
		} catch (error) {
		  console.error('Ошибка при получении данных пользователя:', error);
		}
	  };
  
	  fetchUserData();
	}, []);
  
	// const handleEditClick = () => {
	//   setIsEditing(true);
	// };
  
	const handleSaveClick = async (updatedData) => {
	  try {
		const response = await updateUserProfile(updatedData);
		if (response.success) {
		  setUserData(response.data);
		  setIsEditing(false);
		} else {
		  alert('Ошибка при обновлении данных пользователя');
		}
	  } catch (error) {
		console.error('Ошибка при сохранении данных:', error);
		alert('Ошибка при сохранении данных');
	  }
	};
  
	return (
	  <ProfilePageContainer>
		<Header />
		<Content>
		  <Sidebar />
		  <ProfileContent>
			{userData ? (
			  <>
				<UserProfileHeader user={userData} />
				{isEditing ? (
				  <UserProfileEditForm user={userData} onSave={handleSaveClick} />
				) : (
				  <UserProfileInfo user={userData} onSave={handleSaveClick} />
				)}
			  </>
			) : (
			  <Loading /> 
			)}
		  </ProfileContent>
		</Content>
		<Footer />
	  </ProfilePageContainer>
	);
  };
  

export default UserProfilePage;
