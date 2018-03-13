import React from 'react';
import ReactDOM from 'react-dom';

// Add these two lines for redux connection
import { Provider } from 'react-redux';
import store from './store/index';

import './normalize.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
