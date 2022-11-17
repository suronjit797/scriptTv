import React, { memo } from 'react';
import './Footer.css'

import logo from '../../assets/logo-light.png'
import { Link } from 'react-router-dom';

const Footer = memo(() => {
    return (
        <footer>
            <div className="footer_top">
                <div className="container">
                    <div className="row g-5">

                        <div className="col-lg-2 col-md-6">
                            <div className="footer_items">
                                <h4 className="footer_header">
                                    PRODUCTS
                                </h4>
                                <ul className='footer_list'>
                                    <li> <Link to='/'> Script TV </Link> </li>
                                    <li> <Link to='/'> Script Glass </Link> </li>
                                    <li> <Link to='/'> Marketplace </Link> </li>
                                    <li> <Link to='/'> dStorage </Link> </li>
                                    <li> <Link to='/'> Script Blockchain </Link> </li>
                                    <li> <Link to='/'> sADs </Link> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer_items">
                                <h4 className="footer_header">
                                    How It Works
                                </h4>
                                <ul className='footer_list'>
                                    <li> <Link to='/'> ScriptGLASS explained </Link> </li>
                                    <li> <Link to='/'> ScriptTV - how to earn </Link> </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer_items">
                                <h4 className="footer_header">
                                    Community
                                </h4>
                                <ul className='footer_list'>
                                    <li> <Link to='/'> Discord </Link> </li>
                                    <li> <Link to='/'> Telegram </Link> </li>
                                    <li> <Link to='/'> Twitter </Link> </li>
                                    <li> <Link to='/'> Blog </Link> </li>
                                    <li> <Link to='/'> Facebook </Link> </li>
                                    <li> <Link to='/'> Instagram </Link> </li>
                                    <li> <Link to='/'> GIthub </Link> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer_items">
                                <h4 className="footer_header">
                                    About Script.tv
                                </h4>
                                <ul className='footer_list'>
                                    <li> <Link to='/'> Script TV </Link> </li>
                                    <li> <Link to='/'> Script Glass </Link> </li>
                                    <li> <Link to='/'> Marketplace </Link> </li>
                                    <li> <Link to='/'> dStorage </Link> </li>
                                    <li> <Link to='/'> Script Blockchain </Link> </li>
                                    <li> <Link to='/'> sADs </Link> </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer_items">
                                <h4 className="footer_header">
                                    pRIVACY
                                </h4>
                                <ul className='footer_list'>
                                    <li> <Link to='/'> Trams of Service </Link> </li>
                                    <li> <Link to='/'> Privacy Policy </Link> </li>
                                    <li> <Link to='/'> Cookies Policy </Link> </li>

                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="d-block d-md-flex text-center text-md-start align-items-center justify-content-between">
                        <div className="d-block d-md-flex align-items-center gap-4">
                            <img src={logo} alt="logo" />
                            <div className='my-3'> contact@script.tv </div>
                        </div>

                        <div className='my-3'>
                            Copyright © 2022 scripttv
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
});

export default Footer;