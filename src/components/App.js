import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm.js'
import Events from './Events'
import reducer from '../reducers/index.js'

const App = () => {
  const [state, dispatch] =  useReducer(reducer, [])

  return (
    <div className='container-fluid'>
      <EventForm state={state} dispatch={dispatch}/>
      <Events state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
