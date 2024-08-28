import styled from 'styled-components';

export const KanbanContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  overflow-x: auto;
  flex-grow: 1;
`;

export const Column = styled.div`
  background-color: #f4f5f7;
  border-radius: 4px;
  padding: 1rem;
  width: 300px;
  margin-right: 1rem;
  flex-shrink: 0;
`;

export const Task = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 5px;
`;

export const ActionButton = styled.button`
  border: none;
  background-color: ${(props) => (props.type === 'edit' ? '#4CAF50' : '#F44336')};
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export const AddTaskButton = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
