 import React from 'react';
 

 import './CourseDescription.css'
 const CourseDescription = (props) => {
     return (
         <div className="row">
             <div className="col-md-3"><img src={props.course.img}/></div>
             <div className="col-md-9 "><h1 className="d-flex justify-content-center">{props.course.title}</h1>
     <h5>Price:${props.course.price}</h5>
             <button onClick={()=>props.handleAddCourse(props.course)} className="btn btn-primary"><i class="fas fa-plus"></i>Enroll now</button></div>
         </div>
     );
 };
 
 export default CourseDescription;