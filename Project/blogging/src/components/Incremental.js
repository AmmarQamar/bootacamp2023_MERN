import { useState } from "react";
const Incremental=()=>{
    const [count,setCount]=useState(0);
    return(
    <>
    <div>
      <button onClick={()=>
        setCount(count+1)}>+</button>
      <h1>{count}</h1>
      <button onClick={()=>(count===0)?setCount(0):setCount(count-1)}>-</button>
    </div>
    </>
    )
}
export default Incremental;