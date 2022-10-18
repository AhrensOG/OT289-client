import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ScreenContact from './features/screencontac/ScreenContac';
import Activities from './features/activities/Activities';
import ScreenNews from './features/screenNews/ScreenNews';
import UsersTable from './features/usersTable/UsersTable';
import Main from './features/mainScreen/Main'
import Login from './features/loginForm/LoginForm'
import Register from './features/registerForm/RegisterForm';
import Contact from './features/screencontac/ScreenContac'
import ActivityMain from './features/activityMain/ActivityMain'
import BackOffice from './features/backOffice/BackOffice';
import { Routes, Route } from 'react-router-dom';
import ContactsPanel from './features/backOffice/partials/ContactsPanel';
import ActivityPage from './features/activityPage/ActivityPage';
/* import UsersTable from './features/usersTable/UsersTable' */
import NewsDetail from './features/newsDetail/NewsDetail'
import LoginRouteGuard from './LoginRouteGuard';
import NewsPanel from './features/backOffice/partials/NewsPanel'
import Layout from './components/Layout/Layout';
import Nosotros from './features/nosotros/Nosotros';
import { useDispatch } from 'react-redux'
import { refresh } from './features/user/userSlice'
import { BASE_PATH } from './utils/constants'
import { customFetch } from './services/fetch'

function App() {
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()
  const refreshURL = `${BASE_PATH}/auth/me`
  const refreshProperties = {
    method: 'get'
  }

  if(token){
  customFetch(refreshURL, refreshProperties)
    .then(user => {
      let userObj = {
        id: user.data.payload.id,
        firstName: user.data.payload.firstName,
        lastName: user.data.payload.lastName,
        email: user.data.payload.email,
        image: user.data.payload.image,
        roleId: user.data.payload.roleId,
        token
      }
      dispatch(refresh(userObj))
    })
      .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/contact" element={<ScreenContact />} />
        <Route path="/backoffice/activities" element={<Activities />} />
        <Route path="/backoffice/users" element={<UsersTable />} />     
        <Route path="/*" element={<MainSPA />} />
        <Route element={<LoginRouteGuard/>}>
          <Route path="/backOffice/*" element={ <BackOffice/> } />
        </Route>
        <Route path="/backoffice/users" element={<UsersTable />} />
        <Route exact path='/backoffice/contacts' element={<ContactsPanel />} />
        <Route path='/backoffice/newspanel' element={<NewsPanel/>} />
      </Routes>
    </div>
    
  );
}

function MainSPA() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registrarse" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/nosotros" element={<Nosotros/>} />        
        <Route exact path='/actividades' element={<ActivityMain />} />
        <Route exact path='/actividades/:id' element={<ActivityPage />} />
        <Route path="/novedades" element={<ScreenNews />} />
        <Route path="/novedades/:id" element={<NewsDetail />} />
      </Routes>
    </Layout>
  );
}


export default App;