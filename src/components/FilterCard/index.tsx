import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';

import { changeFilter } from '../../store/reducers/filters';
import * as enums from '../../utils/enums/Task';

import * as S from './styles';

export type Props = {
  subtitle: string;
  critery: 'prioridade' | 'status' | 'todas';
  value?: enums.Priority | enums.Status;
};

const FilterCard = ({ subtitle, critery, value }: Props) => {
  const dispatch = useDispatch();
  const { filter, tasks } = useSelector((state: RootReducer) => state);

  const isActive = () => {
    const sameCritery = filter.critery === critery;
    const sameValue = filter.value === value;

    return sameCritery && sameValue;
  };

  const countTasks = () => {
    if (critery === 'todas') return tasks.items.length;
    if (critery == 'prioridade') {
      return tasks.items.filter((item) => item.priority === value).length;
    }
    if (critery == 'status') {
      return tasks.items.filter((item) => item.status === value).length;
    }
  };

  const filtrar = () => {
    dispatch(
      changeFilter({
        critery,
        value
      })
    );
  };

  const active = isActive();
  const counter = countTasks();

  return (
    <S.Card active={active} onClick={filtrar}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{subtitle}</S.Label>
    </S.Card>
  );
};

export default FilterCard;
