import React from 'react';
import Button from '@mui/material/Button';
import { decrement, increment } from '../store/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const inc = () => {
        dispatch(increment());
    };

    const dec = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <h3>Counter App</h3>
            <h1>{count}</h1>
            <Button variant="contained" onClick={inc}>Increment</Button>
            <Button variant="contained" onClick={dec}>Decrement</Button>
        </div>
    );
};

export default Counter;
