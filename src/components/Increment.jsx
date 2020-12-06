import React from 'react'
import { increment } from '../actions/actions'
import { useDispatch } from 'react-redux'

function Increment() {

    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => dispatch(increment())}>+</button>
        </>
    )
}

export default Increment
