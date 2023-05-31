import { useSelector } from 'react-redux';
import { RootReducer } from '../../store';

import Task from '../../components/Task';

import { Container } from './styles';

const TasksList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks);
  const { term } = useSelector((state: RootReducer) => state.filter);

  const filterTasks = () => {
    return items.filter(
      (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
    );
  };

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{term}&ldquo;
      </p>
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
