import React from 'react';
import ContactSection from './ContactSection';
import MenuPic from './MenuPic';
import CardSlideShow from './CardSlideShow';
import Carousel from './Carousel';
import Information from './Information';
import Footer from './Footer';
import '../style/homePage.css';

function HomePage() {
    return (
       <div className='category_container'>
            <ContactSection/>
            <Carousel/>
            <MenuPic/>
            <CardSlideShow/>
            <Information/>
            <Footer/>
        </div>

        
        
    );
}

export default HomePage;