import { useEffect } from 'react';
import { fetchData } from './helpers/data';
import { useDispatch, useSelector } from 'react-redux';
import { init } from './store/usersSlice';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from './components/UsersList';
import User from './components/User';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const url = 'https://random-data-api.com/api/v2/users?size=10';

  useEffect(() => {
    fetchData(url).then((data) =>
      dispatch(init(data))
    );
  }, [dispatch, url]);

  if (users.length < 1) {
    return (
      <p>Loading data...</p>
    )
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <UsersList /> } />
        <Route path="user/:uid" element={ <User /> } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
