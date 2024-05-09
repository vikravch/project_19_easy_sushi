import React, { useState } from 'react';

import arrowRight from '../card-product-section/card-img/arrowRight.png';
import arrowLeft from '../card-product-section/card-img/arrowLeft.png';
import pic1 from '../card-product-section/card-img/philadelphia.png';
import '../card-product-section/cardProduct.scss';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCarousel: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: ' Philadelphia set 1',
      description: '1050 g, 30 pcs',
      price: 149,
      image: '../card-product-section/card-img/philadelphia.png',
    },
    {
      id: 2,
      name: 'Salmon combination 2',
      description: '970 g, 15 pcs',
      price: 120,
      image: '../card-product-section/card-img/topSet.png',
    },
    {
      id: 3,
      name: 'The biggest Philadelphia 3',
      description: '1300 g, 42 pcs',
      price: 199,
      image: '../card-product-section/card-img/philadelphia.png',
    },
    {
      id: 4,
      name: 'Philadelphia and Salmon Set 4',
      description: '2100 g, 60 pcs',
      price: 325,
      image: '../card-product-section/card-img/philadelphia.png',
    },
    {
      id: 5,
      name: 'Salmon combination 5',
      description: '1000 g, 25 pcs',
      price: 159,
      image: '../card-product-section/card-img/philadelphia.png',
    },
    {
      id: 6,
      name: 'Philadelphia and Salmon Set 6',
      description: '1050 g, 30 pcs',
      price: 234,
      image: '../card-product-section/card-img/philadelphia.png',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 3 : prevIndex - 1
    );
  };

  return (
    <div>
      
    <div className="product_carousel">
        <button onClick={prevSlide} className='arrow'><img src={arrowLeft} alt="&lt;" /></button>
      <div className="cards_product">
        {products.slice(currentIndex, currentIndex + 3).map((product) => (
          <div key={product.id} className="card_product">
            <div className='card'>
                <img
                className='product_picture'
                //src={product.name}
                src={pic1}
                alt={product.name}
                />
                <div className="wrapper_products">
                    <div className='products_details'>
                        <div className='nameOfProduct'>
                            <span>{product.name}</span>
                        </div>
                        <div className='description'>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="footer">
                            <span>{`${product.price.toFixed()} ₪`}</span>
                            <button>Add</button>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className='arrow'><img src={arrowRight} alt="&gt;" /></button> 
    </div>
    </div>  
  );
};

export default ProductCarousel;
//&gt; right 
//&lt; left