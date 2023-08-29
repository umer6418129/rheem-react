import React, { useState } from 'react'
import './Footer.css'; 
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
function Footer(props) {
    const submitmail =(event)=>{
        event.preventDefault();
        const mail = event.target.mail.value;
        const url = "http://127.0.0.1:8000/api/get/mail";
        axios.post(url,{
            mail
        }).then(res=>{
            console.log(res);
            event.target.reset();
            toast.success('We will contact with you as soon as possible');
        }).catch((error)=>{
            console.log(error);
            toast.error('Something went wrong');
        })

    }
    
    return (
        <div className="footer mt-5">
            <div className="bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="">
                        <form action="" onSubmit={submitmail}>
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for other Benefits</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input required type="email" name='mail' id="form5Example29" className="form-control" placeholder="Email address" />
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                        <ToastContainer />
                    </section>
                </div>
                <div className="text-center p-3">
                    © 2020 Copyright:
                    <a className="text-white" href="https://www.rheem.com/">Rheem.com</a>
                </div>
            </div>
        </div>
    )
}
export default Footer;


