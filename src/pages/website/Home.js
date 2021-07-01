import React from 'react';
import Navbar from '../../components/website/navigation/Navbar';
import Footer from '../../components/website/navigation/Footer';
import useScrollTop from '../../hooks/useScrollTop';
import Header from '../../components/website/headers/Header';
import Subheader from '../../components/website/headers/Subheader';
import Newsletter from '../../components/website/forms/Newsletter';

const Home = () => {
    document.title = "Green Tangerin"

    //UseScrollTop is used to start the page at the top.
    useScrollTop();
    return (
        <>
            <Navbar />
            <Header />
            <Header />
            <Subheader />
            <Newsletter />
            <Footer />
        </>
    );
}

export default Home;