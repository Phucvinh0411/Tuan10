import React from 'react';
import { Provider } from 'react-redux';
// import { store } from './component/redux-tookit/store';
import CounterRTK from './component/redux-tookit/CounterRTK';
import CounterUseReducer from './component/useReducer/CounterUseReducer';
import "./App.css"
import store from './component/redux (no)/store';
import CounterRedux from './component/redux (no)/CounterRedux';
import CounterApp from './component/counterApp/CounterApp';
import TodoApp from './component/to-doList/TodoApp';
import ThemeToggle from './component/ToggleTheme/ThemeToggle';
import ShoppingCart from './component/gioHang/ShoppingCart';
import Auth from './component/quanLyUser/Auth';

export default function App() {
  return (
    <>
      {/* // cau 1 counterApp
    // <CounterApp />

    // cau 2 TodoApp
    // <TodoApp />

    // cau 3 ThemeToggle 
    // <ThemeToggle />

    // cau 4 ShoppingCart 
    // <ShoppingCart />

    // cau 5 Auth
    // <Auth />

    // cau6 redux-tookit
    // <CounterUseReducer />

    // cau 7 redux(no)
    // <Provider store={store}>
    //   <CounterRedux />
    // </Provider>
    // cau 8 BMI
    //<BmiCalculator />
    // cau 9 Quản lý sự kiện
    // <EventManagement />
    // cau 10 Slice */}
      <Login />
      <ProductList />
      <Cart />
    </>



  );
}
