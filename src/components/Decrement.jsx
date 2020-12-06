import React from 'react'
import { decrement } from '../actions/actions'
import { useDispatch } from 'react-redux'

function Decrement() {

    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => dispatch(decrement())}>-</button>
        </>
    )
}

export default Decrement