import React from 'react';
import axios from 'axios';

function Contact(props) {
  const submitHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const add = event.target.add.value;
    const phone = event.target.phone.value;
    const comment = event.target.comment.value;
    const url = "http://127.0.0.1:8000/api/create/message";
    axios.post(url, {
      name,
      email,
      add,
      phone,
      comment
    }).then(res => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <div>
      <div id="contact" style={{ backgroundcolor: "white" }}>
        <div class="me-0  mt-5">
          <div class="text-center">
            <img src={require('./../assests/gifs/contact.gif')} class="rounded img-fluid w-75" alt="" />
          </div>
        </div><br /><br />
        <div class="bg-white pb-5 me-0  g-2">
          <div class="d-flex me-0">
            <iframe class="mt-5  pt-3 w-50 ms-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.3848471182764!2d103.78844361571936!3d1.53592095834153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6c3f2a9ed699%3A0xa1382b5b5804b8e6!2sRheem%20Water%20Heaters!5e0!3m2!1sen!2s!4v1673739667661!5m2!1sen!2s" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <form class="row g-3 bg-white me-0 mt-5 w-50 ms-3" id="form" onSubmit={submitHandler}>
              <div class="col-md-6">

                <input name='name' type="text" class="form-control" id="inputEmail4" placeholder="Full Name" required />
              </div>
              <div class="col-md-6">

                <input name='email' type="email" class="form-control " id="inputPassword4" placeholder="Email Address" required />
              </div>
              <div class="col-md-6">
                <input name='add' type="text" class="form-control" placeholder="Address" required />
              </div>
              <div class="col-md-6">
                <input name='phone' type="text" class="form-control" placeholder="Phone" required />
              </div>
              <div class="col-12">
                <textarea name="comment" id="" cols="168" class="form-control" placeholder="Comments here !" rows="10" required></textarea>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-warning border-0 btn-outline-dark btn-lg ">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div class="me-0 pb-5 d-flex ms-5 mt-4 " id="cf">
          <div class="ms-5 ps-4">
            <p class="text-black-50 fw-semibold text-center"> 20A, Jalan Ros Merah 2/14, Johor Jaya, 81100 Johor Bahru, Johor, Malaysia </p>
          </div>
          <div class="ms-5 ps-5">
            <p class="text-black-50 fw-semibold text-center">8052785300</p>
          </div>
          <div class="ms-5 ps-5">
            <p class="text-black-50 fw-semibold text-center">store@rheemconnections.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact

