// mockTeams.js
const mockTeams = [
	{
	  teamId: 1,
	  teamName: 'Team Alpha',
	  description: 'Команда для проекта Alpha',
	  teamType: 'Проектная',
	  telegramLink: 'https://t.me/team_alpha_chat',
	  members: [
		{ id: 1, name: 'Alice', role: 'Администратор' },
		{ id: 2, name: 'Bob', role: 'Тимлид' },
		{ id: 3, name: 'Charlie', role: 'Участник' },
	  ],
	},
	{
	  teamId: 2,
	  teamName: 'Team Beta',
	  description: 'Команда для проекта Beta',
	  teamType: 'Проектная',
	  telegramLink: 'https://t.me/team_beta_chat',
	  members: [
		{ id: 4, name: 'Dave', role: 'Администратор' },
		{ id: 5, name: 'Eva', role: 'Модератор' },
		{ id: 6, name: 'Frank', role: 'Участник' },
	  ],
	},
  ];
  
  export default mockTeams;
  