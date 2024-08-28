import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { Task, ActionButtons, ActionButton } from './StyledComponents';
import { canDeleteTask } from './permissions';

const TaskCard = ({ task, index, user }) => {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided) => (
        <Task ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {task.content}
          {canDeleteTask(user.role) && (
            <ActionButtons>
              <ActionButton type="edit">✏️</ActionButton>
              <ActionButton type="delete">🗑️</ActionButton>
            </ActionButtons>
          )}
        </Task>
      )}
    </Draggable>
  );
};

export default TaskCard;
