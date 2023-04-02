import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import { RootState } from './store/reducer/index';

import Nav from './Components/Nav';
import { setUserId } from './store/action/user_action';
import AppRouter from './AppRouter';

//유저 인터페이스
interface User {
  userId: string;
  username: string;
}

function App() {
  const dispatch = useDispatch();
  let [init, setInit] = useState<boolean>(false);

  const userData = useSelector((state: RootState) => state.userReducer.user);
  console.log(userData);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const userId: string = JSON.stringify(localStorage.getItem('user'));
      dispatch(setUserId(userId));
    }
    setInit(true);
  }, []);

  return <div className="App">{init ? <AppRouter /> : 'Ininitalizing...'}</div>;
}

export default App;
