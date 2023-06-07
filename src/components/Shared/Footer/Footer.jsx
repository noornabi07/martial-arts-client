import React from 'react';
import logo from '../../../../public/martial main logo.png'
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLocationArrow, FaMap, FaMapMarked, FaMapMarkedAlt, FaMobile, FaPhoneSquare, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
             <div>
            <footer className="footer p-10 mt-10 bg-teal-600 text-white">
                <div>
                    <img className='w-40 rounded-full' src={logo} alt="" />
                    <p className='font-semibold'>Animal Toys Shop.<br />Providing reliable tech since 2023</p>
                </div>
                <div className='text-lg'>
                    <span className="footer-title text-2xl">Services</span>
                    <a className="link link-hover hover:ml-2 hover:duration-200 hover:text-red-600">Animal Toys</a>
                    <a className="link link-hover hover:ml-2 hover:duration-200 hover:text-red-600">Kids Toys</a>
                    <a className="link link-hover hover:ml-2 hover:duration-200 hover:text-red-600">Learning Toys</a>
                    <a className="link link-hover hover:ml-2 hover:duration-200 hover:text-red-600">Musical Toys</a>
                </div>
                <div className='text-lg'>
                    <span className="footer-title text-2xl"> Contact</span>
                    <a className="link link-hover flex items-center">
                        <FaPhoneSquare className='text-xl text-white font-bold mr-3'></FaPhoneSquare>
                        <span> 01826147180</span>
                    </a>

                    <a className="link link-hover flex items-center">
                        <FaGoogle className='mr-3 text-xl font-bold'></FaGoogle>
                        noornabiprogram07@gmail.com
                    </a>

                    <a className="link link-hover flex items-center">
                        <FaLocationArrow className='font-bold text-xl mr-3'></FaLocationArrow>
                        Dinajpur
                    </a>

                    <a className="link link-hover flex items-center">
                        <p>@copyright all the reserved by noornabi</p>
                    </a>


                </div>
                <div>
                    <span className="footer-title text-2xl">Legal</span>
                    <a className="link link-hover" href='https://www.facebook.com/mdnoornabiislamNK' target='_blank'>
                        <FaFacebook className='text-3xl hover:rotate-45 hover:duration-500'></FaFacebook>
                    </a>
                    <a className="link link-hover" href='https://twitter.com/MDNurna56749656' target='_blank'>
                        <FaTwitter className='text-3xl hover:rotate-45 hover:duration-500'></FaTwitter>
                    </a>
                    <a className="link link-hover" href='https://www.instagram.com/musicpromoter33/' target='_blank'>
                        <FaInstagram className='text-3xl hover:rotate-45 hover:duration-500'></FaInstagram>
                    </a>
                    <a className="link link-hover" href='https://github.com/noornabi07' target='_blank'>
                        <FaGithub className='text-3xl hover:rotate-45 hover:duration-500'></FaGithub>
                    </a>
                </div>
            </footer>
        </div>
        </div>
    );
};

export default Footer;