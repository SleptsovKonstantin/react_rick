import React from 'react'
import { useState } from 'react';

const Butt = () => {
  const [value, setValue] = useState(0);

  const plus = () => { setValue((prev) => ++prev) };
  const minus = () => setValue((prev) => --prev);
  const reset = () => setValue(() => 0);

  return (
    <div>
      <button onClick={plus}>increment</button>
      <button onClick={minus}>decrement</button>
      <button onClick={reset}>reset</button>
      <h1>Class component: {value}</h1>
    </div>
  )
}

export default Butt
