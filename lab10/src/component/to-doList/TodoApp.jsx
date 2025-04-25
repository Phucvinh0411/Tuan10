import React, { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', textAlign: 'center' ,border:'2px solid',padding:'10px',backgroundColor:"green"}}>
      <h2>📝 To-do List</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Thêm công việc..."
        style={{borderRadius:"5px",height:"30px",width:"300px",fontWeight:"bold",color:"white"}}
      />
      <button onClick={addTodo} style={{ marginLeft: 10 }}>Thêm</button>

      <ul style={{ textAlign: 'left', paddingLeft: 0, marginTop: 20 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ listStyle: 'none', marginBottom: 10 }}>
           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span
               onClick={() => toggleTodo(todo.id)}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  flex: 1,
                  wordBreak: 'break-word'
              }}
              >
                {todo.text}
                </span>
                <button
                onClick={() => removeTodo(todo.id)}
                style={{
                marginLeft: 10,
                color: 'red',
                whiteSpace: 'nowrap' // Đảm bảo chữ trong nút không bị xuống dòng
              }}
            >
            Xoá
            </button>
          </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
