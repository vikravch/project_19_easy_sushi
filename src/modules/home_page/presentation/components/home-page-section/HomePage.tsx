import React from 'react';
import ContactSection from '../header/Header';
import MenuPic from '../grid-pictures-section/Grid_pictures';
import CardSlideShow from '../card-slideshow-section/CardSlideShow';
import Information from '../information-section/Information_section';
import Footer from '../footer/Footer';
import Slideshow from '../slideShow/SlideShow';
import '../home-page-section/homePage.scss';

const HomePage: React.FC = () => {
        const images = [
            '../../../../../../public/imgForCarousel/1.jpg',
            '../../../../../../public/imgForCarousel/2.jpg',
            '../../../../../../public/imgForCarousel/3.jpg',
        ];

    return (
       <div className='homePage'>
            <ContactSection/>
            <Slideshow images={images} />
            <MenuPic/>
            <CardSlideShow/>
            <Information/>
            <Footer/>
        </div>
    );
}

export default HomePage;


// function HomePage() {

//     return (
//        <div className='homePage'>
//             <ContactSection/>
//             <Slideshow/>
            
//             <MenuPic/>
//             <CardSlideShow/>
//             <Information/>
//             <Footer/>
//         </div>

        
        
//     );
// }

// export default HomePage;