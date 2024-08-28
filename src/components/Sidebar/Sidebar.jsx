import React, { useState, useEffect } from 'react';
import mockTeams from './mockTeams'; // Импортируем моковые данные, пока не используется API
import TeamModal from './TeamModal';
import { SidebarContainer, TeamList, TeamItem, TeamInfoButton } from './StyledSidebar';
import axios from 'axios';

const Sidebar = ({ onTeamSelect }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTeamClick = async (teamId) => {
    try {
      const response = await axios.get(`/api/teams/${teamId}/tasks`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // JWT-токен
        },
      });
      onTeamSelect(response.data); // Передаем задачи в родительский компонент
      setSelectedTeam(mockTeams.find((team) => team.teamId === teamId));
    } catch (error) {
      console.error('Ошибка при загрузке задач:', error);
    }
  };

  const openModal = (team) => {
    setSelectedTeam(team);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTeam(null);
  };

  return (
    <SidebarContainer>
      <h2>Мои команды</h2>
      <TeamList>
        {mockTeams.map((team) => (
          <TeamItem key={team.teamId}>
            <span onClick={() => handleTeamClick(team.teamId)}>
              {team.teamName}
            </span>
            <TeamInfoButton onClick={() => openModal(team)}>
              &#8250; {/* Unicode стрелка вправо */}
            </TeamInfoButton>
          </TeamItem>
        ))}
      </TeamList>
      {isModalOpen && <TeamModal team={selectedTeam} onClose={closeModal} />}
    </SidebarContainer>
  );
};

export default Sidebar;
