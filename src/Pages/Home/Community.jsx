import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import community from '../../assets/community.png'
import social1 from '../../assets/social1.png'
import social2 from '../../assets/social2.png'
import social3 from '../../assets/social3.png'
import social4 from '../../assets/social4.png'
import social5 from '../../assets/social5.png'
import social6 from '../../assets/social6.png'
import social7 from '../../assets/social7.png'

const Community = memo(() => {

    const socials = [
        {
            logo: social1,
            name: 'Discord',
            link: 'https://www.discordapp.com',
        },
        {
            logo: social2,
            name: 'Telegram',
            link: 'https://www.telegram.com',
        },
        {
            logo: social3,
            name: 'Twitter',
            link: 'https://www.twitt.com',
        },
        {
            logo: social4,
            name: 'Blog',
            link: 'https://www.blog.com',
        },
        {
            logo: social5,
            name: 'Facebook',
            link: 'https://www.facebook.com',
        },
        {
            logo: social6,
            name: 'Instagram',
            link: 'https://www.instagram.com',
        },
        {
            logo: social7,
            name: 'Github',
            link: 'https://www.github.com',
        },
    ]



    return (
        <section className='community'>
            <div className="container">
                <div className="row align-items-center g-5 pb-5">
                    <div className="col-lg-5">
                        <h4 className="section_header pt-3 mb-4 text-start">
                            Join our <span>community</span>
                        </h4>
                        <p className="container_header-text text_muted  fw-bold ">
                            Be part of a growing community of builders,users, and creators on  Script tv paving the way for a more interoperable crypto ecosystem.
                        </p>
                        <div className="community_box">
                            <img src={community} alt="" />
                        </div>

                    </div>

                    <div className="col-lg-7">
                        <div className="row g-4">
                            {
                                socials.map((item, index) => (
                                    <div className="col-sm-6" key={index}>
                                        <a href={item.link} className="social_box">
                                            <img src={item.logo} alt="social icon" />
                                            <div className='fw-bold'> {item.name} <i class="ri-arrow-right-up-line"></i> </div>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="community_bottom py-5">
                    <div className="row align-items-stretch g-5">
                        <div className="col-lg-6">
                            <div className="community_bottom-header">
                                <span className="text_primary"> Start in  </span> Seconds
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="community_bottom-text">
                                <p>
                                    Connect your <strong>Crypto wallet</strong> to start using the app in seconds. <strong>No registration Needed.</strong>
                                </p>
                                <p>
                                    Trade top cryptocurrencies with up to <strong> 30x leverage </strong> directly from  <strong>your privet wallet.</strong>
                                </p>
                                <div className="text_primary d-flex align-items-center  mb-5">
                                    <Link to='/' className='text_primary text-decoration-underline d-inline-block'> Learn how to start  </Link>
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>


                                <button className="btn btn_primary fw-bold"> Lunch App <i class="ri-arrow-right-line ms-2"  ></i> </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
});

export default Community;