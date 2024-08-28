const initialData = {
	tasks: {
	  'task-1': { id: 'task-1', content: 'Забрать заказ из магазина' },
	  'task-2': { id: 'task-2', content: 'Посмотреть новый сериал' },
	  'task-3': { id: 'task-3', content: 'Зарядить телефон' },
	  'task-4': { id: 'task-4', content: 'Приготовить ужин' },
	  'task-5': { id: 'task-5', content: 'Сделать отчет по работе' },
	  'task-6': { id: 'task-6', content: 'Позвонить заказчику' },
	  'task-7': { id: 'task-7', content: 'Заполнить налоговую декларацию' },
	  'task-8': { id: 'task-8', content: 'Сходить на почту' },
	},
	columns: {
	  'column-1': {
		id: 'column-1',
		title: 'Сделать',
		taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
	  },
	  'column-2': {
		id: 'column-2',
		title: 'В работе',
		taskIds: ['task-5', 'task-6'],
	  },
	  'column-3': {
		id: 'column-3',
		title: 'Сделано',
		taskIds: ['task-7', 'task-8'],
	  },
	},
	columnOrder: ['column-1', 'column-2', 'column-3'], // Порядок колонок
  };
  
  export default initialData;
  