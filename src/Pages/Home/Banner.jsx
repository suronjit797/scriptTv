import React, { memo } from 'react';
import metaImage from '../../assets/metaverse 1.png'
import Ellipse1 from '../../assets/Ellipse1.png'
import { Link } from 'react-router-dom';

const Banner = memo(() => {
    return (
        <div className='banner mt-3' >
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <p className="text-bold text_primary">
                            Powering Live TV and Film for the next generation.
                        </p>
                        <h1 className='banner_left-header'>
                            Watch To Earn Live TV Decentralised On Chain, <span className="text_primary"> For Free </span>
                        </h1>

                        <p className="banner_left-text text_muted">
                            24/7 live television on chain. Earn rewards whilst you
                            watch through gameFi and socialFi elements.Join and start earning in minutes! Built on Script
                            infrastructure, on Script blockchain.
                        </p>

                        <div className="d-flex mt-5 mb-3">
                            <button className="btn btn_primary me-4 px-sm-5 px-3"> MarketPlace </button>
                            <button className="btn btn_secondary px-sm-5 px-3"> MarketPlace <i class="ri-arrow-right-line"></i> </button>
                        </div>

                        <p className="text_muted">
                            Already using script.tv? <Link to='/sing-in' className='text_primary'>Sign in</Link>
                        </p>

                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 banner_right">
                        <img src={metaImage} alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Banner;