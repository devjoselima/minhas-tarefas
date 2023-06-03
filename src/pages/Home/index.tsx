import SideBar from '../../containers/SideBar';
import TasksList from '../../containers/TasksList';
import ButtonAdd from '../../components/BotaoAdd';

const Home = () => (
  <>
    <SideBar showFilters />
    <TasksList />
    <ButtonAdd />
  </>
);

export default Home;
