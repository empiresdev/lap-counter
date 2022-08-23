import React, { useState, useEffect } from 'react'
import './styles.css'
import Laps from './components/Laps'
import AvgTime from './components/AvgTime'
import Button from './components/Button'

function App() {
  const [laps, setLap] = useState(0)
  const [running, setRunning] = useState(false)
  const [miliseconds, setMiliseconds] = useState(0)

  useEffect(() => {
    let timer = null
    if (running) {
      timer = setInterval(() => {
        setMiliseconds(old => old + 1)
      }, 10)
    }
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const reset = () => {
    setLap(0)
    setMiliseconds(0)
  }

  const increment = () => {
    setLap(laps + 1)
  }
  const decrement = () => {
    setLap(Math.max(laps - 1, 0))
  }

  return (
    <div className='App'>
      <Laps value={laps} />
      <Button title='+' onClick={increment} className='bigger' />
      <Button title='-' onClick={decrement} className='bigger'/>
      <br/>
      <br/>
      {
        laps >= 0 &&
        <AvgTime value={miliseconds/(laps > 0 ? laps : 1)} />
      }
      <Button title={running ? 'Pausar' : 'Iniciar'} onClick={toggleRunning} />
      <Button title='Reiniciar' onClick={reset} />
    </div>
  )
}

export default App
