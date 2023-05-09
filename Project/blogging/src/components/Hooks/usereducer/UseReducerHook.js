import React, { useReducer } from 'react';
import reducer from './reducer';


const initialValue=0;
export const UseReducerHook = () => {
const [count,dispatch]=useReducer(reducer,initialValue)


  return (
    <div>
        <button onClick={()=>dispatch({type:"INC"})}>+</button>
        <h2>{count}</h2>
        <button onClick={()=>dispatch({type:"DEC"})}>-</button>
    </div>
  )
}
