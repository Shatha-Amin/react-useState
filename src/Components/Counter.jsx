
import  { useState } from "react";
/*
function Counter() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }
  function decrementCounter() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div>
      <button onClick={incrementCounter}> increament</button>
      <button onClick={decrementCounter}>decrement</button>
      <button onClick={reset}>reset</button>
      <p>{count}</p>
    </div>
  );
}*/
const Counter=()=>{
    const [count, setCount] = useState(0);
    return(
        <div>
        <button onClick={()=> setCount(count + 1)}>increament</button>
        <button onClick={()=> setCount(count - 1)}>decrement</button>
        <button onClick={()=> setCount(0)}>reset</button>
        <p>{count}</p>

        </div>
    )

    
}
export default Counter;