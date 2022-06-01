import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ThemeButton from "./components/ThemeButton";
import { initialState, reducers } from "./reducer/index";
import {loggerBefore} from './middlewire/loggerBefore';
import {loggerAfter} from './middlewire/loggerAfter';
import Signin from './components/Signin';
import {useReducerWrapper} from './util/ReactUtil'
import Yoogesh from './components/practice/recursive/Yoogesh';
import useHook1 from './components/practice/usehook/First'
import useHook2 from './components/practice/usehook/Second'


//context setup
export const DBContext = createContext();
export const Connect = () => useContext(DBContext);

//Store setup
const Store = ({reducer, initialState, children}) => (
  <DBContext.Provider value={useReducerWrapper(reducer, initialState, [loggerBefore,], [loggerAfter,])}>
      {children}
  </DBContext.Provider>
);

const App = () => {
  return (
    <Store initialState={initialState} reducer={reducers}>
      <BrowserRouter>
        <React.StrictMode>
          <Switch>
            <Route exact path="/login" component={Signin} />
            <Route exact path="/theme" component={ThemeButton} />

            <Route exact path="/recursive" component={Yoogesh} />
            <Route exact path="/usehook1" component={useHook1} />
            <Route exact path="/usehook2" component={useHook2} />
          </Switch>
        </React.StrictMode>
      </BrowserRouter>
    </Store>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));