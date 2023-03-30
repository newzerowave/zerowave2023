import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import { RootState } from './store/reducer/index';

import Map from './Pages/Map';
import { setUserId } from './store/action/user_action';

//유저 인터페이스
interface User {
  userId: string;
  username: string;
}

function App() {
  const dispatch = useDispatch();

  const userData = useSelector((state: RootState) => state.userReducer.user);
  console.log(userData);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const userId: string = JSON.stringify(localStorage.getItem('user'));
      dispatch(setUserId(userId));
    }
  }, []);

  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
