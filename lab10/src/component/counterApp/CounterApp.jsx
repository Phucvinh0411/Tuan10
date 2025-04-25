import React, { useState } from 'react';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h2>Counter App</h2>
      <p style={{ fontSize: 24 }}>Count: {count}</p>
      <button onClick={increase}>Tăng</button>
      <button onClick={decrease} style={{ marginLeft: 10 }}>Giảm</button>
    </div>
  );
}
