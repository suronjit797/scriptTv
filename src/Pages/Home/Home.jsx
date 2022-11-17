import React, { memo } from 'react';
import './Home.css'

import Layout from '../../Components/Layout/Layout';
import Banner from './Banner';
import Benefits from './Benefits';
import HomeSlider from './HomeSlider';
import Imagined from './Imagined';
import Rating from './Rating';
import Infrastructure from './Infrastructure';
import Team from './Team';
import Roadmap from './Roadmap';
import Community from './Community';

const Home = memo(() => {
    return (
        <Layout title='Home'>
                <Banner />
                <Rating />
                <HomeSlider />
                <Benefits />
                <Imagined />
                <Infrastructure />
                <Team />
                <Roadmap />
                <Community />
        </Layout>
    );
});

export default Home;