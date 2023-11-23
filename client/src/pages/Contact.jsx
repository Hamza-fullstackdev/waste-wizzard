import React from 'react'
import Header from '../components/home/Header'
import Hero from '../components/contact/Hero'
import ContactUs from '../components/contact/ContactUs'
import ContactBox from '../components/home/Contact'
import Footer from '../components/home/Footer'
import Product from '../components/contact/Product'
import '../assets/product.css';

const Contact = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <ContactUs/>
        <Product/>
        <ContactBox/>
        <Footer/>
    </>

  )
}

export default Contact