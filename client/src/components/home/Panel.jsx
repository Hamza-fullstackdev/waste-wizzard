import React from 'react'

const Panel = () => {
  return (
    <section className="panelsection">
        <div className="panelcontainer flex">
            <div className="panelbox">
                <img src="./images/Vans-Copy.webp" alt="Vans-copy"/>
                <h2>43,206</h2>
                <p>Trees planted since 2018 across three forests.</p>
            </div>
            <div className="panelbox">
                <img src="./images/truck.webp" alt="truck-copy"/>
                <h2>100+</h2>
                <p>Locations meaning driving distance between each job is very low.</p>
            </div>
            <div className="panelbox">
                <img src="./images/Recycling.webp" alt="recycling-copy"/>
                <h2>95%</h2>
                <p>Landfill diversion rate on average.</p>
            </div>
        </div>
    </section>
  )
}

export default Panel