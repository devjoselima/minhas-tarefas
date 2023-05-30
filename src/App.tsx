import { Provider } from 'react-redux';
import SideBar from './containers/SideBar';
import TasksList from './containers/TasksList';
import GlobalStyle, { Container } from './styles';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <SideBar />
        <TasksList />
      </Container>
    </Provider>
  );
}

export default App;
