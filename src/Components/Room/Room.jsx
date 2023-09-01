import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Room.css'
import React from 'react';
import { faBed, faRestroom } from '@fortawesome/free-solid-svg-icons';

const Room = (props) => {
    const { title, imgUrl,description, bed, capacity, price } = props.room;
    return (
        <div className="room">
            <div className='roomTop'>
                <span><FontAwesomeIcon icon={faCircle} /></span>
                <p>{title}</p>
            </div>
            <div className="roomMidle">
                <img src={imgUrl} alt="" />
            </div>
            <div className="paragraph">
                <p>{description}</p>
            </div>
            <div className="roomBottom">
                <span><FontAwesomeIcon icon={faBed} />:</span>
                <h2>{bed}</h2>
                <span><FontAwesomeIcon icon={faRestroom} />:</span>
                <h2>{capacity}</h2>
                <span>$:</span>
                <h2>{price}</h2>
                <button>Book</button>
            </div>
        </div>
    );
};

export default Room;