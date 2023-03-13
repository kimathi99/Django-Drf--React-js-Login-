import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { AuthProvider } from './auth/auth';
import Home from './pages/Home';
import { Navbar } from './components/header';
import NoMatch from './pages/NoMatch';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import BusinessRegistration from './pages/BusinessRegistration';
import Activate from './pages/Activate';
import LogoutButton from './components/logout';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar/>
        <Routes>            
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/login' element={<Login/>}/>   
            <Route path='/logout' element={<LogoutButton/>}/> 
            <Route path='/verify/account' element={<Activate/>}/> 
            <Route path='/register' element={<Register/>}/>
            <Route path='/businessregistration' element={<BusinessRegistration/>}/>

            <Route path='*' element={<NoMatch/>}/>

          </Routes>
      </AuthProvider>
        
    </BrowserRouter>
  )
  
}

export default App;