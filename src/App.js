import React, { useState } from 'react'


const App = () => {
  const [ count, setCount ] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)
  const reset = () => setCount(0)
  const double = () => setCount(previousCount => previousCount * 2)
  const divide3 = () => setCount(previousCount => {
    return previousCount % 3 === 0 ? previousCount / 3 : previousCount
  })

  return (
    <>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={double}>double</button>
      <button onClick={divide3}>３の倍数は３で割る</button>
    </>
  );
}

export default App;
