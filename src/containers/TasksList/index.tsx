import { useSelector } from 'react-redux';
import { RootReducer } from '../../store';

import Task from '../../components/Task';

import { MainContainer, Title } from '../../styles';

const TasksList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks);
  const { term, critery, value } = useSelector(
    (state: RootReducer) => state.filter
  );

  const filterTasks = () => {
    let filteredTasks = items;
    if (term !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      );

      if (critery === 'prioridade') {
        filteredTasks = filteredTasks.filter((item) => item.priority === value);
      } else if (critery === 'status') {
        filteredTasks = filteredTasks.filter((item) => item.status === value);
      }

      return filteredTasks;
    } else {
      return items;
    }
  };

  const showFilterResult = (quantity: number) => {
    let msg = '';
    const complement =
      term !== undefined && term.length > 0 ? `e "${term}" ` : '';

    if (critery == 'todas') {
      msg = `${quantity} tarefas(s) encontrada(s) como: todas ${complement}`;
    } else {
      msg = `${quantity} tarefa(s) encontrada(s) como: ${`${critery} = ${value}`} ${complement}`;
    }

    return msg;
  };

  const tasks = filterTasks();
  const msg = showFilterResult(tasks.length);

  return (
    <MainContainer>
      <Title as="p">{msg}</Title>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              id={t.id}
              title={t.title}
              priority={t.priority}
              status={t.status}
              description={t.description}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default TasksList;
