import React from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = (props) => {
    const courseData = props.courseData;
    const handleEnroll = props.handleEnroll;
    return (
        <div className='courses'>
            <div className="row">
                {
                    courseData.map(data=> <SingleCourse key={data.id} data={data} handleEnroll={handleEnroll}></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default Courses;