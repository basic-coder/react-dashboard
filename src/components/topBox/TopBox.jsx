import React from 'react'
import './topbox.css'
import { recentFeedback } from '../../data'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

function rating(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<IoIosStar />);
        } else {
            stars.push(<IoIosStarOutline />);
        }
    }
    return stars;
}

const TopBox = () => {
    return (
        <div className='topBox'>
            <h1>Customer Feedbacks</h1>

            <div className="feedback-cards">
                {
                    recentFeedback.map((userData,index) => (
                        <div className="feedback-card" key={index}>
                            <div className="feedback-img-container">
                                <span className='feedback-img'>{userData.name.split(' ')[0][0] + userData.name.split(' ')[1][0]}</span> 
                            </div>
                            <div className="feedback-content">
                                <h3>{userData.name}</h3>
                                <div className="feedback-ratings">
                                    {rating(userData.rating)}
                                </div>
                                <p className="feedback-desp">
                                    {userData.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TopBox