import axios from 'axios';

// Замените mockUser на реальный запрос
export const getUserProfile = async () => {
	const response = await axios.get('/api/user/profile', {
	  headers: {
		Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
	  }
	});
	return response.data;
  };
  
  export const updateUserProfile = async (updatedData) => {
	const response = await axios.put('/api/user/profile', updatedData, {
	  headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
	  }
	});
	return response.data;
  };
  

// Загрузка аватара пользователя
export const uploadUserPhoto = async (file) => {
    const formData = new FormData();
    formData.append('photo', file);

    try {
        const response = await axios.post('/api/user/upload-photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error uploading user photo:', error);
        throw error;
    }
};

// Изменение пароля пользователя
export const changeUserPassword = async (currentPassword, newPassword) => {
    try {
        const response = await axios.put('/api/user/change-password', {
            currentPassword,
            newPassword,
        }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error changing user password:', error);
        throw error;
    }
};

// Удаление аккаунта пользователя
export const deleteUserAccount = async (password) => {
    try {
        const response = await axios.delete('/api/user/delete', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            },
            data: { password },
        });

        return response.data;
    } catch (error) {
        console.error('Error deleting user account:', error);
        throw error;
    }
};
