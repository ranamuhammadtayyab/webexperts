import React from 'react';
import Homeimg from "../src/images/about.png";
import { NavLink } from 'react-router-dom';
const About =()=>{
  return (
    <>
    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid">
        <div className='row'>
        <div className="col-10 mx-auto">
        <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
          <h1><strong className="brand-name">About us</strong></h1>
          <h2 className="my-3">We are the team of talented developers making Websites,Mobile Applications,Network Analysics,Databases with latest programming languages.</h2>
          
          <div className="mt-03">
          <NavLink to="/contact" className="btn-get-started">Contact us</NavLink>
          </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 header-img">
          <img src={Homeimg} className="img-fluid animated" alt="home img" />
          </div>
          </div>
        </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default About;
