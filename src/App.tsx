import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [message, setMessage] = useState('hi')
    useEffect(() => {
        setMessage('hello')
    })
    useEffect(() => {
        window.addEventListener('click', () => console.log('click'))
    })
    const names = ['Simon', 'Jace', 'Clary']
    return (
        <div className='App'>
            {message}
            {names.map((name, index) => (
                <p key={index}>{name}</p>
            ))}
        </div>
    )
}

export default App
