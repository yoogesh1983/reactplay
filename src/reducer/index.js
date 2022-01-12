import themeInitialState, {themeReducer} from './ThemeReducer';
import userInitialState, {userReducer} from './UserReducer';
import {combineReducers, combineState} from '../util/ReactUtil'

const initialState = combineState({
  theme: themeInitialState, 
  user: userInitialState
});

const reducers = combineReducers({
  theme: themeReducer,
  user: userReducer,
});

export { initialState, reducers };