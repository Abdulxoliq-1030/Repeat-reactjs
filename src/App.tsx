import React, { useContext, useReducer } from 'react';
import { UserContext, UserProps } from './context/context';
import { initialState, reducer } from './reducer/reducer';

interface AppProps { }

const App: React.FC<AppProps> = () => {
  const user = useContext<UserProps | any>(UserContext)
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Hello {`${user.name}`}</h1>
      <h1>Hello {`${user.email}`}</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Increment</button>
    </>
  )
}

export default App;