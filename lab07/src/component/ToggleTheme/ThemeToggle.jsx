// src/components/ThemeToggle.jsx
import React, { useState } from 'react';
import './ThemeToggle.css'; // Đảm bảo có file CSS này để áp dụng style

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme} style={{ minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Toggle Theme (Dark/Light Mode)</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '20px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Chuyển sang {theme === 'light' ? 'Tối' : 'Sáng'}
      </button>
    </div>
  );
}
