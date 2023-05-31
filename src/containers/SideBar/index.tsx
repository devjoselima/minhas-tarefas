import { useDispatch, useSelector } from 'react-redux';

import FilterCard from '../../components/FilterCard';
import { RootReducer } from '../../store';
import { changeTerm } from '../../store/reducers/filters';

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
          <FilterCard counter={1} subtitle="pendentes" />
          <FilterCard counter={2} subtitle="concluidas" />
          <FilterCard counter={3} subtitle="urgentes" />
          <FilterCard counter={4} subtitle="importantes" />
          <FilterCard counter={5} subtitle="normal" />
          <FilterCard active counter={10} subtitle="todas" />
        </S.Filters>
      </div>
    </S.Aside>
  );
};

export default SideBar;
