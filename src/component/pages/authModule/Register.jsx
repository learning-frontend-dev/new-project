import React from 'react';
import './register.css';

function Register() {
    return (
        <section className="common">
            <div className="container text-center">
                <div className="form_outer">
                    <h2 className="section__title">Register</h2>
                    <form action="">
                        <div className="form_field">
                            <label className="form_label">Full Name</label>
                            <input type="text" name="" id="" className="form_input" />
                        </div>
                        <div className="form_field">
                            <label className="form_label">Email Address</label>
                            <input type="text" name="" id="" className="form_input" />
                        </div>
                        <div className="form_field">
                            <label className="form_label">Password</label>
                            <input type="text" name="" id="" className="form_input" />
                        </div>
                        <div className="form_field">
                            <label className="form_label">Confirm Password</label>
                            <input type="text" name="" id="" className="form_input" />
                        </div>
                        <div className="form_action">
                            <button className="btn btn-submit">Register Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}


export default Register