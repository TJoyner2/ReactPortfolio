import React from 'react'
import './MyWork.css'
import unc from '../../assets/unc.jpg'
import placeHolder from '../../assets/placeholder.jpg'

const MyWork = () => {
    return (
        <div className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={unc} alt="" style={{width: '40%', height: 'auto'}}/>
            </div>
            <div className="mywork-container">
                {/* {mywork-list.map((work,index) => {
                    return <img key={index} src="" alt="" />
                    // map through projects once I have them completed
                })} */}
                return <img src={placeHolder} alt="" />
            </div>
        </div>
    )    
}

export default MyWork