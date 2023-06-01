import { useSelector } from 'react-redux';
import { RootReducer } from '../../store';

import Task from '../../components/Task';

import { Container } from './styles';

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

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{term}&ldquo;
      </p>
      <ul>
        <li>{term}</li>
        <li>{critery}</li>
        <li>{value}</li>
      </ul>
      <ul>
        {filterTasks().map((t) => (
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
    </Container>
  );
};

export default TasksList;
