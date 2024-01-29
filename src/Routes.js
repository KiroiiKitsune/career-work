import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Footer } from './components/footer/Footer';
import { NotFound } from './pages/not-found/NotFound';
import { UserSearch } from './pages/userSearch/UserSearch';
import { UserDetails } from './pages/userDetails/UserDetails';
import { Navbar } from './components/navbar/Navbar';
import { useState } from 'react';

export const AppRoutes = () => {
  const [users, setUsers] = useState([]);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/surfer'
            element={<UserSearch users={users} setUsers={setUsers} />}
          />
          <Route
            path='/user/:id'
            element={<UserDetails users={users} />}
          ></Route>
           <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};
