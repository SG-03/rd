import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [message, setMessage] = useState('hi')
    useEffect(() => {
        setMessage('hello')
    })
    useEffect(() => {
        setMessage('welcome')
    })
    return <div className='App'>{message}</div>
}

export default App
