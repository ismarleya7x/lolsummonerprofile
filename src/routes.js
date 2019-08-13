import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Pesquisa from './pages/Search';
import Invocador from './pages/Main';

export default createAppContainer(
  createSwitchNavigator({
    Pesquisa,
    Invocador,
  })
);