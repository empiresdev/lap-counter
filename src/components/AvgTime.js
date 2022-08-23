import React from "react"

const AvgTime = ({ value }) => {
    const absolute_seconds = Math.floor(value / 100)
    const minutes = Math.floor(absolute_seconds / 60)
    const seconds = absolute_seconds % 60
    const miliseconds = Math.floor(value % 100)
    return (
      <p className='time'>
      <span>{`${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${miliseconds < 10 ? '0' + miliseconds : miliseconds}`}</span><br />
        Tempo médio por volta</p>
    )
  }

  export default AvgTime