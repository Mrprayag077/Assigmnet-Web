import React from 'react';
import MenuBar from '../components/MenuBar';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="h-screen">
            {/* Navbar (Fixed) */}
            <MenuBar />

            {/* Content (Scrollable) */}
            <div className="pt-[80px]"> {/* Padding added to ensure content isn't hidden under fixed navbar */}
                <Articles />
            </div>

            <Footer />
        </div>
    );
};

export default Home;
