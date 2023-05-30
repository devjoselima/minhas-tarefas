import { useSelector } from 'react-redux';
import { RootReducer } from '../../store';

import Task from '../../components/Task';

import { Container } from './styles';

const TasksList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks);
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {items.map((t) => (
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
