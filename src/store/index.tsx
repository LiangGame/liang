import React, { createContext, Reducer, useReducer } from 'react';
import rootReducer, { Action, InitState, initState } from '@/store/reducers/home';
import { wrapperDispatch } from '@/store/util';

type Dispatch = (action: Action) => void;
export interface IContext {
  state: InitState,
  dispatch: Dispatch,
}
const context: IContext = {
  state: initState,
  dispatch: () => {},
};
export const Context = createContext(context);

const Store:React.FC = (props) => {
  const [state, dispatch] = useReducer<Reducer<InitState, Action>>(rootReducer, initState);
  wrapperDispatch(dispatch);
  return (
    // @ts-ignore
    <Context.Provider value={{ state, dispatch: wrapperDispatch(dispatch) }}>
      {props.children}
    </Context.Provider>
  );
};

export default Store;
