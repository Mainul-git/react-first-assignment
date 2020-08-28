import React from 'react';
import logo from './../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header ">
              <div className=" header1 d-flex justify-content-center">
              <img src={logo} />
              <h1>Coursera</h1>
              </div>
            
            <nav className="bg-danger">
                <a href="/categories">Categories</a>
                <a href="/explore">Explore</a>
                <a href="/others">Others</a>
            </nav>

          </div>
          
           
            


        

          
    
    
    );
};

export default Header;
