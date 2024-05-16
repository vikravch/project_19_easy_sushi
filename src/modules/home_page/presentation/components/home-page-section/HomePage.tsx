import React from 'react';
import ContactSection from '../header/Header';
import MenuPic from '../grid-pictures-section/Grid_pictures';
import Information from '../information-section/Information_section';
import Footer from '../footer/Footer';
import SlideShow from '../slideShow/SlideShow';
import CardProduct from '../card-product-section/CardProduct';

import '../home-page-section/homePage.scss';

const HomePage = () => {
    const imageUrls = [
      '../slideshow-section/imagesForCarousel/firstSlide.jpg',
      '../slideshow-section/imagesForCarousel/secondSlide.jpg',
      '../slideshow-section/imagesForCarousel/thirdSlide.jpg',
    ];
  
    return (
      <div className='homePage'>
        <ContactSection/>
        <SlideShow images={imageUrls}/>
        <MenuPic/>
        <CardProduct/>
        <Information/>
        <Footer/>
      </div>
    );
  };
  
  export default HomePage; 


// const HomePage: React.FC = () => {
//         const images = [
//             'https://www.shutterstock.com/shutterstock/photos/1937661397/display_1500/stock-photo-assorted-sushi-nigiri-and-maki-big-set-on-slate-a-variety-of-japanese-sushi-with-tuna-crab-1937661397.jpg',
//             'https://www.shutterstock.com/shutterstock/photos/2307783959/display_1500/stock-photo-overhead-view-of-platter-of-sushi-rolls-on-gray-cement-background-2307783959.jpg',
//             'https://www.shutterstock.com/shutterstock/photos/1937661397/display_1500/stock-photo-assorted-sushi-nigiri-and-maki-big-set-on-slate-a-variety-of-japanese-sushi-with-tuna-crab-1937661397.jpg',
//         ];

//     return (
//        <div className='homePage'>
//             <ContactSection/>
//             <Slideshow images={images} />
//             <MenuPic/>
//             <CardSlideShow/>
//             <Information/>
//             <Footer/>
//         </div>
//     );
// }

// export default HomePage;


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