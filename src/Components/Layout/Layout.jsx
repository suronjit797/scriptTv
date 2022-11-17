import React, { memo, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = memo(({ children, title }) => {
    useEffect(() => {
        document.title = `${title} - script.tv`
    }, [])
    return (
        <div className='layout'>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
});

export default Layout;

