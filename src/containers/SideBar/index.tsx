import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FilterCard from '../../components/FilterCard';
import { RootReducer } from '../../store';
import { changeTerm } from '../../store/reducers/filters';
import * as enums from '../../utils/enums/Task';

import * as S from './styles';
import { Button, Input } from '../../styles';

type Props = {
  showFilters: boolean;
};

const SideBar = ({ showFilters }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { term } = useSelector((state: RootReducer) => state.filter);

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Input
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
          </>
        ) : (
          <Button onClick={() => navigate('/')} type="button">
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  );
};

export default SideBar;
