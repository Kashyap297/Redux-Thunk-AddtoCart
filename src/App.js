import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Users from './Routing Crud/Users';
import Adduser from './Routing Crud/Adduser';
import { useEffect, useState } from 'react';
import Edituser from './Routing Crud/Edituser';
import error from "./Component/images/error-404.png"
import Filter from './Filter/Filter';
import Products from './ReduxThunkAddtoCart/Products'
import Cart from './ReduxThunkAddtoCart/SubComponent/Cart'

function App() {

  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('list')) || []
  })

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(users))
  }, [users])

  // console.log(users);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users users={users} setUsers={setUsers} />} />
          <Route path='/adduser' element={<Adduser users={users} setUsers={setUsers} />} />
          <Route path='/edituser/:id' element={<Edituser users={users} setUsers={setUsers} />} />
          <Route path='/filter' element={<Filter users={users} setUsers={setUsers} />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<h1 className='text-center mt-5'><img src={error} width="250px"></img></h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
