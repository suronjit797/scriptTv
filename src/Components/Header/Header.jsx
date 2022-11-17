import React, { memo } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-light.png'

import './Header.css'


const Header = memo(() => {
    return (
        <header className='header container'>
            <nav className="main_nav">

                {/* logo */}
                <div className="logo">
                    <Link to='/' >
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                {/* menu list */}

                <ul className='nav_menu'>
                    <li>
                        <Link className='nav_link' to='/'>
                            Products
                        </Link>
                        <i className="ri-arrow-drop-down-line nav_down"></i>
                        <div className="sub_menu">
                            <div className="row align-items-stretch">
                                <div className="col-md-4">
                                    <div className="sub_menu-border">
                                        <div className="mb-5">
                                            <h4 className="sub_menu-header text_primary"> Script TV </h4>
                                            <p className='m-0 sub_menu-text'>our user first watch to earn television platform.</p>
                                        </div>
                                        {/* <hr /> */}
                                        <div>
                                            <h4 className="sub_menu-header"> ScriptGLASS </h4>
                                            <p className='m-0 sub_menu-text'>Our upgradeable NFT collection</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="sub_menu-border">
                                        <div className="mb-4">
                                            <h4 className="sub_menu-header"> Marketplace </h4>
                                            <p className='m-0 sub_menu-text'>Our native marketplace for buying, selling and renting ScriptGLASS .</p>
                                        </div>
                                        {/* <hr /> */}
                                        <div>
                                            <h4 className="sub_menu-header"> dStorage </h4>
                                            <p className='m-0 sub_menu-text'>Save 70%+ on transcoding, transferring and storage costs from web2.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div>
                                        <div className="mb-3">
                                            <h4 className="sub_menu-header"> Script Blockchain </h4>
                                            <p className='m-0 sub_menu-text'>our user first watch to The blockchain developed to onboard the next 1 billion content watchers to web3.</p>
                                        </div>
                                        {/* <hr /> */}
                                        <div>
                                            <h4 className="sub_menu-header"> sADs </h4>
                                            <p className='m-0 sub_menu-text'>The video advertising layer built on Script Blockchain.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </li>
                    <li>
                        <Link className='nav_link' to='/'>How it work</Link>
                        <i className="ri-arrow-drop-down-line nav_down"></i>
                        <div className="sub_menu">
                            <div className="row align-items-stretch">
                                <div className="col-md-6">
                                    <div className="sub_menu-border">
                                        <div>
                                            <h4 className="sub_menu-header"> ScriptGLASS explained</h4>
                                            <p className='m-0 sub_menu-text'>our user first watch to earn television platform.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="sub_menu-border">
                                        <div>
                                            <h4 className="sub_menu-header"> ScriptTV - how to earn </h4>
                                            <p className='m-0 sub_menu-text'>Our native marketplace for buying, selling and renting ScriptGLASS .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </li>
                    <li>
                        <Link className='nav_link' to='/'>community</Link>
                    </li>
                    <li>
                        <Link className='nav_link' to='/'>explorer</Link>
                    </li>
                    <li>
                        <Link className='nav_link' to='/'>wallet</Link>
                    </li>
                    <li>
                        <Link className='nav_link' to='/'>docs</Link>
                    </li>
                    <li>
                        <Link className='nav_link nav_button' to='/'>sing in</Link>
                    </li>
                </ul>


                <div className="mobile_menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </nav>
        </header>
    );
});

export default Header;