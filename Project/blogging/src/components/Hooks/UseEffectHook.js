import React, { useEffect, useState } from 'react'

export const UseEffectHook = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.title=count;
       
    },[count])
//   useEffect(()=>{}) when state change every time component render
//   useEffect(()=>{},[]) , only first time run when component render
//   useEffect(()=>{},[state,prop]) , every time run when this prop or state change
    return (
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        {count}
        <button onClick={()=>count===0?setCount(0):setCount(count-1)}>-</button>
   <h1>Ammar</h1>
    </div>
  )
}
