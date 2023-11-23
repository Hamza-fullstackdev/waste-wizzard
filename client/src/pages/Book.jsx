import React from 'react'
import Header from '../components/home/Header'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'
import Booking from '../components/book/Booking'
import '../assets/Book.css'

const Book = () => {
  return (
    <>
      <Header/>
      <Booking/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Book