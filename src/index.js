import React from 'react'
import ReactDOM from 'react-dom'
import SimplePage from './simplePage'
import  './index.css'
const App = () => {
  return (
    <div>
      <SimplePage/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))