import { Fragment } from 'react';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      <Counter />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
    </Fragment>
  );
}

export default App;