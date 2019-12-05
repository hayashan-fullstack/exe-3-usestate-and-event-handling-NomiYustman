import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';

export const App = () => {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const timeout=useRef(null)
    timeout.current=setTimeout(() => {
        setSeconds(seconds + 1) //seconds++
        if (seconds == 59) {
            setMinutes(minutes + 1) //minutes++
            setSeconds(0)
        }
    }, 1000)

    const restart = () => {
        clearTimeout(timeout.current)
        setMinutes(0)
        setSeconds(0)
    }
    return (
        <div style={{ margin: '20%' , fontSize: '1000', color:'gold', padding: 200, background:'darkred', fontSize: 50, font:'sans-serif', backgroundImage:'ab.jpg'}}>
            <h1>Timer</h1> 
            <h2>{minutes}:{seconds}</h2>
            <br/>
            <button onClick={restart} style={{color: 'red', background: 'black', fontSize: 50, borderColor:'yellow'}}>restart</button>
        </div>
    );
}