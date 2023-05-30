import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { remove } from '../../store/reducers/tasks';
import ClassTask from '../../models/Task';

import * as S from './style';

type Props = ClassTask;

const Task = ({ id, title, priority, status, description }: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <S.Card>
      <S.Title>{title}</S.Title>

      <S.Tag parameter="prioridade" priority={priority}>
        {priority}
      </S.Tag>

      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>

      <S.Description value={description} />

      <S.ActionsBar>
        {isEditing ? (
          <>
            <S.ButtonSave>Salvar</S.ButtonSave>
            <S.ButtonCancelRemove onClick={() => setIsEditing(false)}>
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
