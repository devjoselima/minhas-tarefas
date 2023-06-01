import { useDispatch, useSelector } from 'react-redux';

import FilterCard from '../../components/FilterCard';
import { RootReducer } from '../../store';
import { changeTerm } from '../../store/reducers/filters';
import * as enums from '../../utils/enums/Task';

import * as S from './styles';

const SideBar = () => {
  const dispatch = useDispatch();
  const { term } = useSelector((state: RootReducer) => state.filter);

  return (
    <S.Aside>
      <div>
        <S.Input
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(event) => dispatch(changeTerm(event.target.value))}
        />
        <S.Filters>
          <FilterCard
            value={enums.Status.PENDING}
            critery="status"
            subtitle="pendentes"
          />
          <FilterCard
            value={enums.Status.CONCLUDED}
            critery="status"
            subtitle="concluido"
          />
          <FilterCard
            value={enums.Priority.URGENT}
            critery="prioridade"
            subtitle="urgentes"
          />
          <FilterCard
            value={enums.Priority.IMPORTANT}
            critery="prioridade"
            subtitle="importantes"
          />
          <FilterCard
            value={enums.Priority.NORMAL}
            critery="prioridade"
            subtitle="normal"
          />
          <FilterCard critery="todas" subtitle="todas" />
        </S.Filters>
      </div>
    </S.Aside>
  );
};

export default SideBar;
