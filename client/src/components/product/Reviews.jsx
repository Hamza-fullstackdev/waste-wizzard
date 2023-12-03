import React, { useEffect, useState } from 'react'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const getReviews = async () => {
            const res = await fetch(`http://localhost:8000/api/contact/get-message/Man & Van`, {
                credentials: 'include',
                method: "GET"
            })
            const result = await res.json()
            setReviews(result)
        }
        getReviews()
    }, [])
    console.log(reviews)
  return (
    <section className="reviewssection ">
            <div className="reviewcenter center">
                <div className="reviewscontainer flex">
                    <div className="leftreviewscontainer">
                        <p>reviews</p>
                        <h2>Don’t just take our word for it</h2>
                    </div>
                    <div className="rightherocontent rightreviewcontainer">
                        <p>4.8 out of 5 based on 25,754 reviews</p>
                        <p>Waste carriers licence: CBDU61392</p>
                    </div>
                </div>
            </div>

            <div className="reviewcontent center">
                <div className="review flex">
                    {
                        (reviews.length > 0) ?
                            reviews.map((data, index) =>
                                <div className="reviewbox" key={index}>
                                    <div className="reviewheader center">
                                        <i className="bi bi-quote"></i>
                                    </div>
                                    <div className="reviewbody">
                                        <h3>{data.message}</h3>
                                    </div>
                                    <div className="reviewfooter">
                                        <h3>{data.fname} {data.lname}</h3>
                                        <p>{data.createdAt.slice(0,10)} for Man & Van</p>
                                    </div>
                                </div>
                            ):
                            <h2>This product has no reviews yet</h2>
                    }
                </div>
            </div>
        </section>
  )
}

export default Reviews