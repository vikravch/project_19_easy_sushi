import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../../../img/1.jpg';
import pic2 from '../../../img/2.jpg';
import pic3 from '../../../img/3.jpg';
import './carousel.scss';

function BigCarousel() {
  return (
    <Carousel data-bs-theme="dark" className="carousel" fade pause="hover">
      <Carousel.Item>
        <a href="./">
            <img
                className="square"
                src={pic1}
                alt="First slide"
            />
        </a>    
        <Carousel.Caption >
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="./">
            <img
                className="square"
                src={pic2}
                alt="Second slide"
            />
        </a>
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="./">
            <img
                className="square"
                src={pic3}
                alt="Third slide"
            />
        </a>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="./">
            <img
                className="square"
                src={pic1}
                alt="Fourth slide"
            />
        </a>
        <Carousel.Caption >
          <h5>Fourth slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default BigCarousel;