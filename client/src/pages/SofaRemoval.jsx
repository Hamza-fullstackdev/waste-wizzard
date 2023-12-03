import React from 'react'
import Header from '../components/home/Header'
import Hero from '../components/product/Hero'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'
import ProductBody from '../components/sofa removal/ProductBody'

const SofaRemoval = () => {
    return (
        <>
            <Header />
            <Hero link="Sofa Removal" title="Sofa Removal & Sofa Collection" subTitle="Nationwide" description="Sofa recycling on demand" subDescription="As the UK’s largest in-house clearance company, we’re very experienced at collecting and recycling sofas. We offer a fixed-price service with 24/7 ordering available. In many cases, we can collect your sofa on the same day. As well as sofas, we can remove almost any type of waste and this can be charged for on the day of collection and does not need to be pre-booked.
            If you’re ready to book your sofa removal, add the items below and click ‘Book now’." priceTag="Sofa Removal & Sofa Collection" price="69.99" imgUrl="https://www.clearabee.co.uk/_next/image?url=https%3A%2F%2Fclearabee.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2FSofa-removal-hero.png&w=1920&q=75" />
            <ProductBody/>
            <Contact />
            <Footer />
        </>
    )
}

export default SofaRemoval