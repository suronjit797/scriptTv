import React, { memo } from 'react';

import b1 from '../../assets/b1.png'
import b2 from '../../assets/b2.png'
import b3 from '../../assets/b3.png'
import b4 from '../../assets/b4.png'

const Benefits = memo(() => {
    return (
        <section className='benefits'>
            <div className="container">
                <h4 className="section_header mb-4">
                    The cord cutting, <span> Live TV Experience </span> you have been waiting for.
                </h4>
                <p className="text_muted text-center fw-bold">
                    Here is just some of the things you can do on Script Network
                </p>

                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="benefits_card">
                            <img src={b1} alt="logo" />
                            <div>
                                <h3> Earn </h3>
                                <p className="text_muted">
                                    Multi level reward model – content partners, advertisers, viewers and lightning nodes all can earn rewards daily.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="benefits_card">
                            <img src={b2} alt="logo" />
                            <div>
                                <h3> Trade </h3>
                                <p className="text_muted">
                                    Trade your SPAY tokens for real world products such as festival, events and cinema tickets through our Script Swap model
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="benefits_card">
                            <img src={b3} alt="logo" />
                            <div>
                                <h3> Multiverse </h3>
                                <p className="text_muted">
                                    Multi accessible network for content based NFTs and projects to build, and distribute through Script Network
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="benefits_card">
                            <img src={b4} alt="logo" />
                            <div>
                                <h3> Community </h3>
                                <p className="text_muted">
                                    Live chat, private message and trade NFTs for that show/film in real time
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Benefits;