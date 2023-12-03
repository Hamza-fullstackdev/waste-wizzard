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
import Checkout from './pages/Checkout'
import PrivateComponent from './components/private/PrivateComponent'
import SofaRemoval from './pages/SofaRemoval'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/book' element={<Book />} />
          <Route path='/book/product/product-detail' element={<ProductDetail />} />
          <Route path='/book/product/product-detail/checkout' element={<Checkout />} />
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book/rubbish-clearance' element={<RubbishClearance />} />
        <Route path='/book/skip-bags' element={<SkipBag />} />
        <Route path='/book/sofa-removal' element={<SofaRemoval />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
