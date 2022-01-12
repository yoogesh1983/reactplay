import React, {useReducer, useEffect} from 'react';

const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      };
    }, state);
  };
};

const combineState = (state) => {
  let result = {};
  Object.keys(state).forEach((key) => {
    result[key] = state[key];
  });
  return result;
};

// wrapper for useReducer to setup middlewire
const useReducerWrapper = (reducer, initialState, middlewareFns, afterwareFns) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const aRef = React.useRef();

  const dispatchWithMiddleware = (action) => {
    middlewareFns.forEach((middlewareFn) => middlewareFn(action, state));
    aRef.current = action;
    dispatch(action);
  };

  useEffect(() => {
    if (!aRef.current) return;
    afterwareFns.forEach((afterwareFn) => afterwareFn(aRef.current, state));
    aRef.current = null;
  }, [afterwareFns, state]);

  return [state, dispatchWithMiddleware];
};

export {combineReducers, combineState, useReducerWrapper}