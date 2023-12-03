import React from 'react'
import Header from '../components/home/Header'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'
import Hero from '../components/product/Hero'
import ProductBody from '../components/skip bag/ProductBody'
import Review from '../components/skip bag/Review'

const SkipBag = () => {
  return (
    <>
        <Header/>
        <Hero link="Skip Bags" title="Skip Bag Service" subTitle="You fill it, we'll collect it" description="We offer a fast and flexible skip bag service covering most of the UK." subDescription="Our skip bags are a great solution for allowing you to contain both bulky and light waste with the peace of mind of a fixed price." priceTag="Skip bag and collection" price="159.99" imgUrl="https://www.clearabee.co.uk/_next/image?url=https%3A%2F%2Fclearabee.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F10%2FSkip-bag_2.png&w=1080&q=75"/>
        <ProductBody/>
        <Review/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default SkipBag