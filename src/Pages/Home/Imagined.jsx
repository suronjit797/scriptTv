import React, { memo } from 'react';

import logo from '../../assets/logo-light.png'

const Imagined = memo(() => {
    return (

        <section className='imagined'>
            <div className="container">
                <h4 className="section_header pt-3 mb-4">
                    Betting <span>Re</span> Imagined
                </h4>
                <p className="imagined_header-text text_muted text-center fw-bold ">
                    Script tv adresses key points associated with centralizedbetting and blockchain prediction market alike. Getting the best of both worlds is finally possible.
                </p>

                <div className="row g-4 pt-3">
                    <div className="col-md-6">
                        <div className="imagined_card">
                            <div className="imagined_card-body text_muted" style={{
                                background: 'linear-gradient(180.16deg, #09090A 0.14%, #1F242E 118.5%)'
                            }}>
                                <p className='mb-4'> <img src={logo} alt="" /> </p>
                                <p className='mb-2'> Full Transparency </p>
                                <p className='mb-2'> Instant Payouts </p>
                                <p className='m-0'> No Limits </p>
                            </div>
                            <div className="imagined_card-footer">
                                <div className="card_border">
                                    <div className="hr"></div>
                                    <div className="text"> vs </div>
                                    <div className="hr"></div>
                                </div>
                                <p className='m-0'> Classic Betting</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="imagined_card">
                            <div className="imagined_card-body text_muted" style={{
                                background: 'linear-gradient(180.16deg, #09090A 0.14%, #1F242E 118.5%)'
                            }}>
                                <p className='mb-4'> <img src={logo} alt="" /> </p>
                                <p className='mb-2'> Full Transparency </p>
                                <p className='mb-2'> Instant Payouts </p>
                                <p className='m-0'> No Limits </p>
                            </div>
                            <div className="imagined_card-footer">
                                <div className="card_border">
                                    <div className="hr"></div>
                                    <div className="text"> vs </div>
                                    <div className="hr"></div>
                                </div>
                                <p className='m-0'> Classic Betting</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Imagined;