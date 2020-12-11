import React, { useState, useEffect } from 'react'


const App = props => {
  // なぜ一つ目は[]で、二つ目は{}で分割代入するのか理由が不明。
  const [ state, setState ] = useState(props)
  const {name, price } = state

  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate')
  })

  useEffect(() => {
    console.log('This is like componentDidMount')
  }, [])

  useEffect(() => {
    console.log('This callback if for name only')
  }, [name])
  
  return (
    <>
      <p>現在の{name}は{price}円です</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => {setState({...state, name: e.target.value})}}/>
      
    </>
  );
}

App.defaultProps = {
  name: 'sample',
  price: 1000
}

export default App;
