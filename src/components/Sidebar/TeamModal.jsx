import React from 'react';
import { ModalBackground, ModalContent, CloseButton } from './StyledSidebar';

const TeamModal = ({ team, onClose }) => {
  if (!team) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{team.teamName}</h2>
        <p>{team.description}</p>
        <p>Тип команды: {team.teamType}</p>
        <h3>Чат команды:</h3>
        <p>
          <a href={team.telegramLink} target="_blank" rel="noopener noreferrer">
            Перейти в чат Telegram
          </a>
        </p>
        <h3>Участники:</h3>
        <ul>
          {team.members.map((member) => (
            <li key={member.id}>
              {member.name} ({member.role})
            </li>
          ))}
        </ul>
      </ModalContent>
    </ModalBackground>
  );
};

export default TeamModal;
