import React, { useState } from 'react';
import { Container, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const [haveAccount,setHaveAccount] = useState(false);

    let ac;
    const handleToggle = () => {
        ac = haveAccount;
        setHaveAccount(!ac)
    }
    return (
        <div style={{background:'url(https://i.ibb.co/VLmg4RZ/bannerbackground.png)'}} className="py-5 d-flex justify-content-center align-items-center">
            <div className="mb-5 mx-2 pb-5" style={{width:"330px"}}>
                <div className="">
                    <Image fluid 
                    className='p-2'
                    src="https://i.ibb.co/CmtMhFV/logo2.png" />
                </div>
                {!haveAccount && <Form.Control size="lg"  type="text" placeholder="Name" className="mb-3 bg-light" />}
                <Form.Control size="lg"  type="email" placeholder="Email" className="mb-3 bg-light" />
                <Form.Control size="lg"  type="password" placeholder="Password" className="mb-3 bg-light" />
                {!haveAccount && <Form.Control  size="lg" type="password" placeholder="Confirm Password" className="mb-3 bg-light" />}
                <Form.Control size="lg"  type="button" value={haveAccount?'sign in' : 'sign up'} className="bg-danger text-white fw-bold" />
                    <p className="text-danger " onClick={handleToggle}>{!haveAccount ? <small>Need to login?</small>:<small>Create an account?</small>}</p>
                <hr />
                <div className="d-flex justify-content-center">
                    <div className="">
                        <p className="text-danger text-center m-0 p-0">Sign in with</p>
                        <div className="">
                            <button type="button" className="m-2 btn btn-outline-success rounded-pill"><i className="m-2 fab fa-google"></i></button>
                            <button type="button" className="m-2 btn btn-outline-primary rounded-pill"><i className="m-2 fab fa-facebook-f"></i></button>
                            <button type="button" className="m-2 btn btn-outline-dark rounded-pill"><i className="m-2 fab fa-github"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;