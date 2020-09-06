import React from 'react';

const  Contact =()=>{
  const formSubmit = (e) =>{
    e.preventDefault();
    alert('Send');
  };
  return (
    <>
    <div className="my-5">
    <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
    <div className="row">
    <div className="col-md-6 col-10 mx-auto">
    <form>
  <div className="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input name="fn"  type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name:"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Phone No</label>
    <input name="p"  type="phone" className="form-control" id="exampleFormControlInput1" placeholder="Phone number"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input name="em"  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea name="msg"  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="col-12 mt-5">
  <button onClick={formSubmit} className="btn btn-outline-primary" type="submit">
    Send
  </button>
  </div>
    </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Contact;
