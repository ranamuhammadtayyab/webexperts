import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Card =(props)=>{
  return (
    <>
        <div className="col-md-4 col-10 mx-auto">
        <div className="card">
        <Link to={'/contact'}>
        <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
        </Link>
        <div className="card-body">
        <h5 className="card-title font-weight-bold">{props.title}</h5>
        </div>
        </div>
        </div>
    </>
  )
}

export default Card;
