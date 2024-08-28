// src/api/mockData.js
import pacImage from '../assets/images/pac.jpg';
export const mockUser = {
    id: 1,
    firstName: 'Иван',
    lastName: 'Иванов',
    email: 'ivanov@example.com',
    phoneNumber: '+7 123 456-78-90',
	telegram: '@ivan123',
    photo: pacImage,
    post: 'Software Engineer',
    description: 'Опыт работы в разработке ПО более 5 лет.',
    visibilitySettings: {},
    passwordHash: 'hashed_password_example', // здесь должен быть хэш пароля
    generalRolesId: 'moderator', // Роль пользователя
    permissions: {
        canChoiceMember: false,
        canGoToPageOfTeam: true,
        canFillOutProfile: true,
        canChoiceTeamLeader: false,
        canMoveTask: true,
        canSeeAllProfiles: false,
        canSeeTeamTasks: true,
        canSeeTeamInfo: true,
        canSeeTeamMembersProfile: true,
        canSeeTeamMembersList: true,
        canEditTask: true,
        canEditCommand: false,
        canEditProfile: true,
        canEditTeamMembersProfile: false,
        canCreateTask: true,
        canCreateTeam: false,
        canDeleteTask: false,
        canDeleteTeam: false,
        canRemoveParticipant: false,
        AssignTask: true,
    },
};

export const loginUser = async (email, password) => {
    // Имитация проверки пользователя
    if (email === mockUser.email && password === 'password123') {
        return {
            token: 'mock_jwt_token', // Возвращаем фиктивный токен
            user: mockUser, // Возвращаем мокового пользователя с разрешениями
        };
    } else {
        return {
            message: 'Неверный email или пароль',
        };
    }
};
