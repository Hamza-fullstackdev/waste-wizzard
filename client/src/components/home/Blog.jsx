import React from 'react'

const Blog = () => {
  return (
    <>
        <section className="blogsection center">
        <img src="./images/sideimg.png" alt="img"/>
        <div className="blogcontainer flex">
            <div className="leftblogcontainer">
                <p>Blog</p>
                <h2>Insights. Ideas. Info.</h2>
            </div>
            <div className="rightblogcontainer">
                <button>View all articles</button>
            </div>
        </div>
    </section>
    <section className="blogcontent center">
    <div className="blogdata flex">
        <div className="leftblogdata">
            <img src="./images/cleaning.jpg" alt="cleaning"/>
        </div>
        <div className="rightblogdata">
            <p>23 November 2023</p>
            <h2>Clearabee Sofa (POPs) & Mattress Facility Opens in Birmingham</h2>
            <p className="lowercase">Clearabee is delighted to announce the opening of our state-of-the-art sofa (POPS), mattress, and bulky waste facility in Birmingham. Our fully permitted facility is licensed for 75,000 tonnes annually and will be able to handle hundreds of thousands of sofas, mattresses, and other items of furniture every year.</p>
        </div>
    </div>
</section>
    </>
  )
}

export default Blog