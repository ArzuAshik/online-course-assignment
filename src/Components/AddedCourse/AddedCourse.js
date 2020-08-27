import React from 'react';

const AddedCourse = (props) => {
    const { title, price} = props.data;
    return (
        <div className="alert alert-primary">
            <strong>{title} <span className='badge badge-warning'>${price}</span></strong>                   
        </div>
    );
};

export default AddedCourse;