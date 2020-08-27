import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';
import Cart from './Components/Cart/Cart';
import courseData from './courseData/courseData';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [cart, setCart] = useState([]);

  function handleEnroll(singleCourseData){
    const newCart = [...cart, singleCourseData];
    setCart(newCart)
  }

  return (
    <div className="bg-light">
      <Header></Header>

      <div className="container">
        <div className="row">
          <div className="col-9">
            <Courses courseData={courseData} handleEnroll={handleEnroll}></Courses>
          </div>
          <div className="col-3">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
      <footer>
        <h5 className="text-center">
          &copy; Copyright AR-Arzu
          <a target='_blank' href="https://github.com/ArzuAshik/online-course-assignment"> <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon></a>
        </h5>
      </footer>
    </div>
  );
}

export default App;
