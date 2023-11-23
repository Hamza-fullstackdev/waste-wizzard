import React from 'react'

const Review = () => {
  return (
    <section className="reviewssection ">
    <div className="reviewcenter center">
        <div className="reviewscontainer flex">
            <div className="leftreviewscontainer">
                <p>reviews</p>
                <h2>Don’t just take our word for it</h2>
            </div>
            <div className="rightherocontent rightreviewcontainer">
                <img src="./images/logo.png" alt="company-logo"/>
                <p>4.8 out of 5 based on 25,754 reviews</p>
                <p>Waste carriers licence: CBDU61392</p>
            </div>
        </div>
    </div>

    <div className="reviewcontent center">
        <div className="review flex">
            <div className="reviewbox">
                <img src="./images/sideimg.png" alt="img"/>
                <div className="reviewheader center">
                    <i className="bi bi-quote"></i>
                </div>
                <div className="reviewbody">
                   <h3> A good lad you sent,he did a great job</h3>
                </div>
                <div className="reviewfooter">
                    <h3>Hamza Ilyas</h3>
                    <p>18th November 2023</p>
                </div>
            </div>
            <div className="reviewbox">
                <img src="./images/sideimg.png" alt="img"/>
                <div className="reviewheader center">
                    <i className="bi bi-quote"></i>
                </div>
                <div className="reviewbody">
                   <h3> They did what was required well which was to empty a bin for recycling. They kept me well informed with updates. The driver was polite, friendly and also communicated well. this was the first time I have used them and and very pleased.</h3>
                </div>
                <div className="reviewfooter">
                    <h3>Hamza Ilyas</h3>
                    <p>18th November 2023</p>
                </div>
            </div>
            <div className="reviewbox">
                <img src="./images/sideimg.png" alt="img"/>
                <div className="reviewheader center">
                    <i className="bi bi-quote"></i>
                </div>
                <div className="reviewbody">
                   <h3> They collected on the correct day. I left the item on the wall by the street so they could see it from their van. It had gone by the time I got home.</h3>
                </div>
                <div className="reviewfooter">
                    <h3>Hamza Ilyas</h3>
                    <p>18th November 2023</p>
                </div>
            </div>
            <div className="reviewbox">
                <img src="./images/sideimg.png" alt="img"/>
                <div className="reviewheader center">
                    <i className="bi bi-quote"></i>
                </div>
                <div className="reviewbody">
                   <h3>Nice man came and took the waste from old kitchen away 5*</h3>
                </div>
                <div className="reviewfooter">
                    <h3>Hamza Ilyas</h3>
                    <p>18th November 2023</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Review