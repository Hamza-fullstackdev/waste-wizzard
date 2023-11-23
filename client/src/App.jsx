import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import Book from './pages/Book'
import RubbishClearance from './pages/RubbishClearance'
import ProductDetail from './pages/ProductDetail'
import SkipBag from './pages/SkipBag'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/product-detail' element={<ProductDetail/>}/>
        <Route path='/rubbish-clearance' element={<RubbishClearance/>}/>
        <Route path='/skip-bags' element={<SkipBag/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
