import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.css';
import 'boxicons/css/boxicons.min.css';

const LoginRegister = () => {
    const [isActive, setIsActive] = useState(false);

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    // Validation schemas for Yup
    const signUpSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Name is too short!')
            .max(50, 'Name is too long!')
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required')
    });

    const signInSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required')
    });

    return (
        <div className={`container ${isActive ? 'active' : ''}`} id="container">
            <div className="form-container sign-up">
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={signUpSchema}
                    onSubmit={(values) => {
                        console.log('Sign Up data', values);
                    }}
                >
                    {() => (
                        <Form>
                            <h1>Create Account</h1>
                            <div className="social-icons">
                                <a href="###" className="icons"><i className='bx bxl-google'></i></a>
                                <a href="###" className="icons"><i className='bx bxl-facebook'></i></a>
                                <a href="###" className="icons"><i className='bx bxl-github'></i></a>
                                <a href="###" className="icons"><i className='bx bxl-linkedin'></i></a>
                            </div>
                            <span>Register with E-mail</span>
                            <Field type="text" name="name" placeholder="Name" />
                            <small className='errorMessage'>
                            <ErrorMessage name="name" component="div" className="error-message" />
                            </small>
                            <Field type="email" name="email" placeholder="Enter E-mail" />
                            <small className='errorMessage'>
                            <ErrorMessage name="email" component="div" className="error-message" />
                            </small>
                            <Field type="password" name="password" placeholder="Enter Password" />
                            <small className='errorMessage'>
                            <ErrorMessage name="password" component="div" className="error-message" />
                            </small>
                            <button type="submit">Sign Up</button>
                        </Form>
                    )}
                </Formik>
            </div>

            <div className="form-container sign-in">
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={signInSchema}
                    onSubmit={(values) => {
                        console.log('Sign In data', values);
                    }}
                >
                    {() => (
                        <Form>
                            <h1>Sign In</h1>
                            <div className="social-icons">
                                <a href="###" className="icons"><i className='bx bxl-google'></i></a>
                                <a href="###" className="icons"><i className='bx bxl-facebook'></i></a>
                                <a href="###" className="icons"><i className='bx bxl-github'></i></a>
                                <a href="###" className="icons"><i className='bx bxl-linkedin'></i></a>
                            </div>
                            <span>Login With Email & Password</span>
                            <Field type="email" name="email" placeholder="Enter E-mail" />
                            <small className='errorMessage'>
                            <ErrorMessage name="email" component="div" className="error-message" /></small>
                            <Field type="password" name="password" placeholder="Enter Password" />
                            <small className='errorMessage'>
                            <ErrorMessage name="password" component="div" className="error-message" />
                            </small>
                            <a href="###">Forget Password?</a>
                            <button type="submit">Sign In</button>
                        </Form>
                    )}
                </Formik>
            </div>

            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome </h1>
                        <p>Sign in With ID & Password</p>
                        <button className="hidden" onClick={handleLoginClick}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Welcome</h1>
                        <p>You don't have an account</p>
                        <button className="hidden" onClick={handleRegisterClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;