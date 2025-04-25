import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from './actions';
export default function CounterRedux() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h2>Redux Counter</h2>
      <p style={{ fontSize: 24 }}>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: 10 }}>-</button>
    </div>
  );
}
