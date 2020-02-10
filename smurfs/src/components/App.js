import React from "react";
import "./App.css";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider, connect} from 'react-redux';
import {reducer} from '../reducers';
import SmurfList from "./SmurfList";

const App = (props) => {
  const store = createStore(reducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList />
      </div>
    </Provider>
  );
}

export default App;