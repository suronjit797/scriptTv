import React, { memo } from 'react';
import Carousel from 'react-multi-carousel';

import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';



const HomeSlider = memo(() => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='my-5'>
            <Carousel
                responsive={responsive}
                infinite={true}
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={1000}
            >
                <div className='px-3'> <img src={logo1} alt="logo" /> </div>
                <div className='px-3'> <img src={logo2} alt="logo" /> </div>
                <div className='px-3'> <img src={logo3} alt="logo" /> </div>
                <div className='px-3'> <img src={logo4} alt="logo" /> </div>
            </Carousel>
        </div>
    );
});

export default HomeSlider;