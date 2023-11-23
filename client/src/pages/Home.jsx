import React from 'react'
import Product from '../components/home/Product'
import Service from '../components/home/Service'
import Hero from '../components/home/Hero'
import Envoirment from '../components/home/Envoirment'
import Panel from '../components/home/Panel'
import About from '../components/home/About'
import Review from '../components/home/Review'
import Blog from '../components/home/Blog'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <Product />
            <Service />
            <Envoirment />
            <Panel />
            <About />
            <Review />
            <Blog />
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home