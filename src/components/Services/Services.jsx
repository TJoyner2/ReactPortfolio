import React from 'react'
import './Services.css'
import unc from '../../assets/unc.jpg'
import servicesList from '../../assets/services-list.js'
import arrow from '../../assets/arrow.jpg'


const Services = () => {
    return (
        <div className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={unc} alt="" style={{width: '40%', height: 'auto'}}/>
            </div>
            <div className="services-container">
                {servicesList.map((service,index) => {
                    return <div key={index} className="services-format">
                        <h3>{service.s_number}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_description}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            {/* <img src={arrow} alt="" /> */}
                        </div>
                    </div>
                    
                })}
            </div>
        </div>
    );
};

export default Services