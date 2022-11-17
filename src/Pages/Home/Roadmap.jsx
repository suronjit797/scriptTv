import React, { memo } from 'react';

const Roadmap = memo(() => {
    return (
        <section className='roadmap py-5 '>
            <div className="container">
                <h4 className="section_header mb-2">
                    The <span>Roadmap</span>
                </h4>
                <p className="section_header-text text_muted">
                    Roadmap items listed below are susceptible to change based on dynamics in the market and feedback and proposal from the Gummys TV community.
                </p>

                <div className="roadmap_body mt-5">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className='roadmap_hader'> <h2 className="text_primary d-inline-block"> Q3  </h2> <span> 2022</span></div>
                            <ul className='roadmap_list'>
                                <li>Mobile Application</li>
                                <li>Partnerships</li>
                                <li>IceTea Labs (Polygon) incubator program</li>
                                <li>Donation, Tips, Advertisements, Voting System, Advanced Moderation</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className='roadmap_hader'> <h2 className="text_primary d-inline-block"> Q4  </h2> <span> 2022</span></div>
                            <ul className='roadmap_list'>
                                <li> Fundraising </li>
                                <li> Cross-chain support </li>
                                <li> Stream-to-Earn Incentives </li>
                                <li> Watch-and-Earn Incentives </li>
                                <li> User levels </li>
                                <li> NFTs sale </li>
                                <li> Open Broadcasting Software (OBS) Integration </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className='roadmap_hader'> <h2 className="text_primary d-inline-block"> Future  </h2> <span> 2025</span></div>
                            <ul className='roadmap_list'>
                                <li> Token launch </li>
                                <li> Defi </li>
                                <li> Metaverse integration </li>
                                <li> NFT marketplace </li>
                                <li> Subscriptions </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
});

export default Roadmap;