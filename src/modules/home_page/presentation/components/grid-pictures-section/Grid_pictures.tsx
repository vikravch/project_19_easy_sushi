import React from 'react';
import pic1 from '../../../img/chicken.png';
import pic2 from '../../../img/eel.png';
import pic3 from '../../../img/cornDog.png';
import pic4 from '../../../img/pizza.png'
import pic5 from '../../../img/discount.png'
import './grid_pictures.scss';


function MenuPic() {
    return (
        <div className="wrapper-menu-pic">
            <div className='generalWrapper'>
            <div className="wrapperTop">
                <div className="firstBlock">
                    <a href="./">
                        <img  src={pic1} alt="First Block"/>    
                    </a>
                    <span className="nameProduct">Chicken</span>
                </div>
                <div className="secondBlock">
                    <a href="./">
                        <img  src={pic2} alt="Second Block"/>
                    </a>
                    <span className="nameProduct">With eel</span>
                </div>
                <div className="thirdBlock">
                    <a href="./">
                        <img  src={pic3} alt="Third Block"/>
                    </a>
                    <span className="nameProduct">Corn dog</span>
                </div>
            </div>

            <div className="wrapperBottom">
                <div className="fourthBlock">
                    <a href="./">
                        <img src={pic4} alt="Fourth Block"/>
                    </a> 
                    <span className="nameProduct">Pizza</span>
                </div>
                <div className="fifthBlock ">
                    <a href="./">
                        <img src={pic5} alt="Fifth Block"/>
                    </a> 
                    <span className="nameProduct">Discount</span>
                </div>
            </div>
        </div>
         </div>
    )
}

export default MenuPic;