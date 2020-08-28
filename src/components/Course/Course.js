import React from 'react';

import { useState } from 'react';
import './Course.css'

import Payment from '../Payment/Payment';


import courses from'../../fakeData/courses'
import CourseDescription from '../CourseDescription/CourseDescription';
const Course = () => {

    const[count,setCount]=useState(courses)
    const[payment,setPayment]=useState([])
    const handleAddCourse=(item)=>{
        
        const newPayment=[...payment,item];
        setPayment(newPayment);
    }
    return (
        <div className="whole-course-container">
               <div className="course-container">
            
            <ul>
                {
                    count.map(course=><CourseDescription course={course} handleAddCourse={handleAddCourse}></CourseDescription>)
                }
            </ul>
            </div>
           
            <div className="payment-container">
               <Payment payment={payment} ></Payment>
            

                
            </div>
        </div>
         
        
    );
};

export default Course;