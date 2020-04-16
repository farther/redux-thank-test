import React from 'react';

import './App.css';
import List from "./coponents/List";
import {Provider} from 'react-redux'
import listReducer from './redux/listReducer'
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'


const listStore = createStore(listReducer, applyMiddleware(reduxThunk));

const list = (
  <Provider store={listStore}>
    <List/>
  </Provider>

);

function App() {
  return (
    <div className="App">
      <hr/>
      {list}
      <hr/>
    </div>
  );
}

export default App;
