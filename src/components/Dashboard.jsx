import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import KanbanBoard from './KanbanBoard/KanbanBoard';
import styled from 'styled-components';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const handleTeamSelect = (selectedTasks) => {
    setTasks(selectedTasks);
  };

  return (
    <DashboardContainer>
      <Sidebar onTeamSelect={handleTeamSelect} />
      <KanbanBoard tasks={tasks} />
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;
