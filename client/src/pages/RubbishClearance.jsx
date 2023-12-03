import React from 'react'
import Header from '../components/home/Header'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'
import Hero from '../components/product/Hero'
import ProductDetail from '../components/product/ProductDetail'
import Reviews from '../components/product/Reviews'

const RubbishClearance = () => {
  return (
    <>
        <Header/>
        <Hero link="Rubbish Clearance" title="Rubbish Removal, On Demand" subTitle="Man & Van Removal" description="We’re the UK’s largest ‘Man & Van’ style rubbish clearance company and we operate a large in-house fleet of vehicles with directly-employed clearance teams. Our rubbish clearance service is very flexible when compared to a skip hire service, allowing you to choose almost any size of clearance. We’re also happy to clear more or less waste on the day, leaving you in control." subDescription="We can easily clear your rubbish on the very same day, or a day of your choice. We divert over 95% of the rubbish we collect away from landfill and offset the CO₂ from our vehicles by over 150%." priceTag="Man and Van Clearance" price="89.99" imgUrl="https://www.clearabee.co.uk/_next/image?url=https%3A%2F%2Fclearabee.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F10%2FSkip-bag_2.png&w=1080&q=75"/>
        <ProductDetail/>
        <Reviews/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default RubbishClearance