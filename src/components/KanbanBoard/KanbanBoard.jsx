import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { useSelector } from 'react-redux';
import { KanbanContainer, Column, AddTaskButton } from './StyledComponents';
import TaskCard from './TaskCard';
import { canCreateTask } from './permissions';

const KanbanBoard = ({ tasks }) => {
  const [data, setData] = useState({ tasks: {}, columns: {}, columnOrder: [] });
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (tasks) {
      const newTasks = tasks.reduce((acc, task) => {
        acc[task.taskId] = {
          id: task.taskId,
          content: task.title,
          status: task.status,
          priority: task.priority,
          dueDate: task.dueDate,
          assignedUser: task.assignedUser,
        };
        return acc;
      }, {});

      const columns = {
        'To Do': {
          id: 'To Do',
          title: 'To Do',
          taskIds: tasks.filter(task => task.status === 'To Do').map(task => task.taskId),
        },
        'In Progress': {
          id: 'In Progress',
          title: 'In Progress',
          taskIds: tasks.filter(task => task.status === 'In Progress').map(task => task.taskId),
        },
        'Done': {
          id: 'Done',
          title: 'Done',
          taskIds: tasks.filter(task => task.status === 'Done').map(task => task.taskId),
        },
      };

      setData({
        tasks: newTasks,
        columns,
        columnOrder: ['To Do', 'In Progress', 'Done'],
      });
    }
  }, [tasks]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setData(newState);
  };

  return (
    <div style={{ position: 'relative', flexGrow: 1 }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <KanbanContainer>
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

            return (
              <Droppable droppableId={column.id} key={column.id}>
                {(provided) => (
                  <Column {...provided.droppableProps} ref={provided.innerRef}>
                    <h3>{column.title}</h3>
                    {tasks.map((task, index) => (
                      <TaskCard key={task.id} task={task} index={index} user={user} />
                    ))}
                    {provided.placeholder}
                  </Column>
                )}
              </Droppable>
            );
          })}
        </KanbanContainer>
      </DragDropContext>
      {canCreateTask(user.role) && (
        <AddTaskButton onClick={() => console.log('Добавить задачу')}>Добавить задачу</AddTaskButton>
      )}
    </div>
  );
};

export default KanbanBoard;
