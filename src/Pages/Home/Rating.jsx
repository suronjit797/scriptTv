import React, { memo } from 'react';

import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'

const Rating = memo(() => {
    return (
        <div className='rating mt-3'>
            <div className="container">
                <div className="d-block d-sm-flex align-items-center text-center text-sm-start gap-4">
                    <div className="user_image">
                        <img src={user3} alt="user" />
                        <img src={user2} alt="user" />
                        <img src={user1} alt="user" />
                    </div>
                    <div>
                        <h4 className='mb-0'>  6000+ </h4>
                        <p className="text_muted mb-0"> Happy Users </p>
                    </div>
                    <div className="vr mx-3 d-none d-sm-inline-block"> </div>
                    <div>
                        <h4 className='mb-0'>  4.9/5 </h4>
                        <p className="text_muted mb-0 d-flex align-items-center justify-content-center justify-content-sm-start">
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-half-s-fill"></i>
                            <span className="ms-2"> Rating </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Rating;