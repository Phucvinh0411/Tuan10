// src/components/Auth.jsx
import React, { useState } from 'react';

export default function Auth() {
  const [user, setUser] = useState(null); // Lưu thông tin người dùng
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const [username, setUsername] = useState(''); // Lưu tên đăng nhập trong input
  const [password, setPassword] = useState(''); // Lưu mật khẩu trong input

  // Hàm login
  const login = () => {
    // Giả sử username và password là đúng nếu không rỗng
    if (username && password) {
      setUser({ username });
      setIsLoggedIn(true);
      setUsername('');
      setPassword('');
    } else {
      alert('Vui lòng nhập thông tin đăng nhập');
    }
  };

  // Hàm logout
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  // Cập nhật thông tin người dùng (ví dụ: thông tin thêm)
  const setUserInfo = (info) => {
    setUser((prevUser) => ({ ...prevUser, ...info }));
  };

  return (
    <div style={{ padding: '100px', maxWidth: '400px', margin: 'auto' ,border:"2px solid" ,backgroundColor:"skyblue"}}>
      <h2>{isLoggedIn ? 'Chào mừng bạn đến với trang của chúng tôi!' : 'Đăng nhập'}</h2>

      {!isLoggedIn ? (
        <div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="Tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>

          <button onClick={login} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer',  backgroundColor: 'green', }}>
            Đăng nhập
          </button>
        </div>
      ) : (
        <div>
          <h3>Chào, {user.username}!</h3>
          <button
            onClick={logout}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: 'red',
              color: 'white',
              marginTop: '20px',
              
            }}
          >
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
}
