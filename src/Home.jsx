import React from 'react';
import Homeimg from "../src/images/1.png";
import { NavLink } from 'react-router-dom';
const Home =()=>{
  return (
    <>
    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid">
        <div className='row'>
        <div className="col-10 mx-auto">
        <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
          <h1>Grow your business with <strong className="brand-name">Web Experts</strong></h1>
          <h2 className="my-3">“With software there are only two possibilites: either the users control the programme or the programme controls the users. If the programme controls the users, and the developer controls the programme, then the programme is an instrument of unjust power.”
<br/>― Richard M. Stallman</h2>
          <div className="mt-03">
          <NavLink to="/service" className="btn-get-started">Get Started</NavLink>
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

export default Home;
