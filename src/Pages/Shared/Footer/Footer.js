import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="p-10 ">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Subject</Link>
                    <Link to="/" className="link link-hover">Admission</Link>
                    <Link to="/" className="link link-hover">Sessions</Link>
                    <Link to="/" className="link link-hover">Course fees</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Reviews</Link>
                    <Link to="/" className="link link-hover">Public comments</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of admission</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Payment policy</Link>
                </div>
            </div>
            <div className='text-center mt-32'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;