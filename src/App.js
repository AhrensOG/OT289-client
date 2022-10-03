import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackOffice from './features/backOffice/BackOffice';
import NewsPanel from './features/backOffice/partials/NewsPanel'

import ScreenContact from './features/screencontac/ScreenContac';
import Activities from './features/activities/Activities';
import UsersTable from './features/usersTable/UsersTable';

import { Routes, Route } from 'react-router-dom';
import RegisterForm from './features/registerForm/RegisterForm'
import {useSelector} from 'react-redux'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/register' element={<RegisterForm />} />
        <Route path="/contac" element={<ScreenContact />} />
        <Route path="/backoffice/activities" element={<Activities />} />
        <Route path="/backOffice/*" element={<BackOffice />} />
        <Route exact path='/backoffice/news' element={<NewsPanel />} />
        <Route path="/backoffice/users" element={<UsersTable />} />
        <Route exact path='/' element={<HomePage />}/>
      </Routes>
    </div>
    
  );
}
function HomePage() {
  const user = useSelector(state => state.user)
  return (
    <>
    <h1>En teoria esta es la home</h1>
    <h1>el usuario creado es: {user.firstName}</h1>
    <h1>su email esta es: {user.email}</h1>
    <h1>y su token es: {user.token}</h1>
    </>
  )
}
export default App;