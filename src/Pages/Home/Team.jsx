import React, { memo } from 'react';

import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'
import brand5 from '../../assets/brand5.png'
import brand6 from '../../assets/brand6.png'
import brand7 from '../../assets/brand7.png'
import brand8 from '../../assets/brand8.png'
import brand9 from '../../assets/brand9.png'
import brand10 from '../../assets/brand10.png'
import brand11 from '../../assets/brand11.png'
import brand12 from '../../assets/brand12.png'
import brand13 from '../../assets/brand13.png'
import brand14 from '../../assets/brand14.png'
import brand15 from '../../assets/brand15.png'
import blank from '../../assets/blank.png'

const Team = memo(() => {

    const teamList = [
        {
            image: blank,
            name: 'Abiel Alazar',
            post: 'Co Founder/Content acq Partnership'
        },
        {
            image: blank,
            name: 'Akeem Ojuko',
            post: 'Co Founder/Growth'
        },
        {
            image: blank,
            name: 'Roomani Bajaj',
            post: 'CTO'
        },
        {
            image: blank,
            name: 'Chaela Lcabales',
            post: 'Head of Marketing'
        },
        {
            image: blank,
            name: 'Shiv Kumar',
            post: 'Solution Architect'
        },
        {
            image: blank,
            name: 'Andrew Fennell',
            post: 'Advisor'
        },
        {
            image: blank,
            name: 'Lili Hamdan',
            post: 'Advisor'
        },
        {
            image: blank,
            name: 'Erik Lundmark',
            post: 'Advisor'
        },
        {
            image: blank,
            name: 'Yule Caise',
            post: 'Advisor'
        },
        {
            image: blank,
            name: 'Pekka Kelkka',
            post: 'Advisor'
        },
        {
            image: blank,
            name: 'Michael Terpin',
            post: 'Advisor'
        },
    ]

    const brandList = [
        brand8, brand9, brand10, brand15, brand11, brand12, brand13, brand14,
    ]



    return (
        <section className='team '>
            <div className="container">
                <h4 className="section_header mb-2">
                    Meet Our <span>Great Team</span>
                </h4>
                <p className="section_header-text">
                    Introducing our team – made up of entrepreneurs,product managers, strategists, operators,engineers and evangelists all focused on the common goal.
                </p>

                <div className="brand_list">
                    <img src={brand1} alt="brands" />
                    <img src={brand2} alt="brands" />
                    <img src={brand3} alt="brands" />
                    <img src={brand4} alt="brands" />
                    <img src={brand5} alt="brands" />
                    <img src={brand6} alt="brands" />
                    <img src={brand7} alt="brands" />
                </div>

                <hr />

                <div className="row g-4 my-5 pb-4 align-items-center">
                    {
                        teamList.map((member, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="team_card" key={index}>
                                    <img src={member.image} alt="team member" />
                                    <div className='card_body'>
                                        <h5 className="member_name m-0"> {member.name} </h5>
                                        <p className="text-muted member_post m-0"> {member.post} </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className="brandList py-4">
                <div className="container ">
                    <div className="row align-items-center g-4">
                        {
                            brandList.map((brand, index) => (
                                <div className="col-lg-3 col-sm-4 col-6">
                                    <div className="p-2 text-center">
                                        <img src={brand} alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Team;