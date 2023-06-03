import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { remove, edit, changeStatus } from '../../store/reducers/tasks';
import ClassTask from '../../models/Task';

import * as S from './style';
import { Button, ButtonSave } from '../../styles';
import * as enums from '../../utils/enums/Task';

type Props = ClassTask;

const Task = ({
  id,
  title,
  priority,
  status,
  description: originalDescription
}: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription);
    }
  }, [originalDescription]);

  //cancelar edição da tarefa
  const cancelEditing = () => {
    setIsEditing(false);
    setDescription(originalDescription);
  };

  const changeTaskStatus = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatus({ id, finished: event.target.checked }));
  };

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.CONCLUDED}
          onChange={changeTaskStatus}
        />
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>

      <S.Tag parameter="prioridade" priority={priority}>
        {priority}
      </S.Tag>

      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>

      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <S.ActionsBar>
        {isEditing ? (
          <>
            <ButtonSave
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    id,
                    title,
                    priority,
                    status
                  })
                );
              }}
            >
              Salvar
            </ButtonSave>
            <S.ButtonCancelRemove
              onClick={() => {
                cancelEditing();
              }}
            >
              Cancelar
            </S.ButtonCancelRemove>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <S.ButtonCancelRemove onClick={() => dispatch(remove(id))}>
              Remover
            </S.ButtonCancelRemove>
          </>
        )}
      </S.ActionsBar>
    </S.Card>
  );
};

export default Task;
