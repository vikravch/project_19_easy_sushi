import React, { useRef, useEffect } from 'react';
import './slideshow.scss';

interface SlideShowProps {
  images: string[];
}

const SlideShow: React.FC<SlideShowProps> = ({ images }) => {
  const currentSlide = useRef(0);

  const nextSlide = () => {
    currentSlide.current = (currentSlide.current + 1) % images.length;
    showSlide();
  };

  const prevSlide = () => {
    currentSlide.current = (currentSlide.current - 1 + images.length) % images.length;
    showSlide();
  };

  const showSlide = () => {
    const slides = document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[currentSlide.current].style.display = 'block';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideShow-container">
      <div className="slideShow">
        {images.map((image, index) => (
          <div key={index} className="slide" style={{ display: index === 0 ? 'block' : 'none' }}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default SlideShow;



// import React, { useState } from 'react';
// import '../slideShow/slideshow.scss'; 

// interface CarouselProps {
//   images: string[];
// }

// const Carousel: React.FC<CarouselProps> = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const goToPreviousSlide = () => {
//     const newIndex = (currentImageIndex - 1 + images.length) % images.length;
//     setCurrentImageIndex(newIndex);
//   };

//   const goToNextSlide = () => {
//     const newIndex = (currentImageIndex + 1) % images.length;
//     setCurrentImageIndex(newIndex);
//   };

//   return ( 
//     <div className="carousel">
//       <button className='arrow' onClick={goToPreviousSlide}>&lt;</button>
//       <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} className='imagesForCarousel'/>
//       <button className='arrow' onClick={goToNextSlide}>&gt;</button>
//     </div>
//   );
// };

// export default Carousel;
