import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import applesBox from './stores/AppleStore';
import { Provider } from 'mobx-react';

ReactDOM.render(
  <Provider
    applesBox={applesBox}
  ><App />
  </Provider>,
  document.getElementById('root')
);
