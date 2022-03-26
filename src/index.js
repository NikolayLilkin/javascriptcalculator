import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { mapStateToProps } from './components/mapStateToProps';
import { mapDispatchToProps } from './components/mapDispatchToProps';
import {createStore} from 'redux';
import reducer from './components/reducer';
const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
