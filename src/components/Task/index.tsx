import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { remove, edit } from '../../store/reducers/tasks';
import ClassTask from '../../models/Task';

import * as S from './style';

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

  return (
    <S.Card>
      <S.Title>{title}</S.Title>

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
            <S.ButtonSave
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
            </S.ButtonSave>
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
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
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
