import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import About from './Pages/About';
import CreateListing from './Pages/createListing';
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute';


export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/about' element={<About />} />
      <Route element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
        <Route path='/create-listing' element={<CreateListing/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
