import React from 'react';
import './SingleCourse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const SingleCourse = (props) => {
    const added = {text: 'Enrolled', disabled: true, btn: 'btn btn-success', icon: <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>};
    const [enrollBtn, setEnrollBtn] = useState({text: 'Enroll Now', btn: 'btn btn-primary', icon: ''})
    const { title, instructor,  price, rating, img} = props.data;
    const handleEnroll = props.handleEnroll;
    return (
        <div className="col-md-4 single-course">
            <div className="card">
                <img src={img} className='card-img-top' alt={title} />
                <div className="card-body">
                    <h5 className="cart-title">{title} <span className='badge badge-warning'>{rating} &#9733;</span></h5>
                    <p className="card-text text-muted">{instructor}</p>
                    <p className='font-weight-bold'>Price: <span className="badge badge-secondary">${price}</span></p>
                    <button className={enrollBtn.btn} onClick={() => {
                            handleEnroll(props.data);
                            setEnrollBtn(added);
                        }}>
                        {enrollBtn.icon} {enrollBtn.text}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;