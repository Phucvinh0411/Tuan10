// src/components/Login.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../Slice/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    const handleLogin = () => {
        dispatch(login({ name: 'John Doe', email: 'john@example.com' }));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            <h2>Auth Status</h2>
            {isAuthenticated ? (
                <div>
                    <p>Welcome, {user.name}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
        </div>
    );
};

export default Login;