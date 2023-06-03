import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ButtonSave, MainContainer, Title } from '../../styles';
import { Input } from '../../styles';
import { Form, Options, Option } from './styles';
import * as enums from '../../utils/enums/Task';
import { register } from '../../store/reducers/tasks';

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(enums.Priority.NORMAL);

  const registerTask = (event: FormEvent) => {
    event.preventDefault();

    dispatch(
      register({
        title,
        priority,
        description,
        status: enums.Status.PENDING
      })
    );
    navigate('/');
  };

  return (
    <MainContainer>
      <Title>Nova tarefa</Title>
      <Form onSubmit={registerTask}>
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Título da tarefa"
        />
        <Input
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="prioridade"
                onChange={(event) =>
                  setPriority(event.target.value as enums.Priority)
                }
                type="radio"
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
              />{' '}
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>
        <ButtonSave>Cadastrar</ButtonSave>
      </Form>
    </MainContainer>
  );
};
export default Formulario;
