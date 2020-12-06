import React from 'react'
import { useSelector } from 'react-redux'

function Display() {
    const counter = useSelector(state => state.reducer)
    return (
        <>
            <h2>Counter: {counter}</h2>
        </>
    )
}

export default Display