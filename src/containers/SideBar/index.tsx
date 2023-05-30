import FilterCard from '../../components/FilterCard';

import * as S from './styles';

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Input type="text" placeholder="Buscar" />
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

export default SideBar;
