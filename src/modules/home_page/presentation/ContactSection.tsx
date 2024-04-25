import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import searchIcon from '../img/searchIcon.png';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import '../style/contactSection.css';
import '../../../index.css'

function ContactSection() {
    const [selectedCity, setSelectedCity] = useState('City');
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleCitySelect = (city: string) => {
        setSelectedCity(city);
    };

    const handleSearchIconClick = () => {
        setShowSearchBar(true);
    };

    const handleSearchBarClose = () => {
        setShowSearchBar(false);
    };

    return (     
       <header>
          <div className='contactInform'>
               <div className='phoneNumber'>
                    <span className='telOrd'>Our phones</span>
                    <span className='num'>+972 705 188 955</span>
                    <span className='num'>+972 705 188 955</span>
                    <span className='openHours'>Business hours: 10:00 - 00:00 </span>
               </div>
               <DropdownButton 
                    id="dropdown-basic-button" 
                    title={selectedCity} 
                    variant="underline"
                    className="citySelection"
                    >
                    <Dropdown.Item onClick={() => handleCitySelect('Haifa')}>Haifa</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCitySelect('Tel-aviv')}>Tel-aviv</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCitySelect('Petah Tikva')}>Petah Tikva</Dropdown.Item>
               </DropdownButton>  
               <div className='feedBack' style={{ marginLeft: showSearchBar ? '0' : '400px' }}>
                    <span className='reviews'><a href="./">Reviews</a></span>
               </div>
               <div className="orders" style={{ marginLeft: showSearchBar ? '0' : '20px' }}>
                    <span className='ord'><a href="./">Delivery and Payment</a></span>
               </div>
               {showSearchBar ? (
                    <form onSubmit={handleSearchBarClose} className="d-flex">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search..."
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text>
                                <Button 
                                   variant="outline" 
                                   type="submit"
                                   className="searchActiveButton"
                                   >Search</Button>
                            </InputGroup.Text>
                        </InputGroup>
                    </form>
                ) : (
                    <div className="search" onClick={handleSearchIconClick}>
                        <img className='searchImg' src={searchIcon} alt="#" />
                    </div>
                )}
          </div>     
       </header>
    )
}

export default ContactSection;








// import React from 'react'
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';



// function ContactSection() {
//     return (     
//        <header>
//            <div className='contactInform'>
//                <div className='phoneNumber'>
//                     <span className='telOrd'>Our phones</span>
//                     <span className='num'>+972 705 188 955</span>
//                     <span className='num'>+972 705 188 955</span>
//                     <span className='openHours'>Business hours: 10:00 - 00:00 </span>
//                </div>
//                {/* <div className='citySelection'>
//                     <span className='city'>City:</span>
//                     <span className="citySel">Petah Tikva</span>
//                </div> */}
//                <DropdownButton 
//                     id="dropdown-basic-button" 
//                     title="City" 
//                     variant="underline"
//                     className="citySelection"
//                     >
//                     <Dropdown.Item href="#/action-1">Haifa</Dropdown.Item>
//                     <Dropdown.Item href="#/action-2">Tel-aviv</Dropdown.Item>
//                     <Dropdown.Item href="#/action-3">Petah Tikva</Dropdown.Item>
//                </DropdownButton>

                
//                <div className='feedBack'>
//                     <span className='reviews'><a href="">Reviews</a></span>
//                </div>
//                <div className="orders">
//                     <span className='ord'><a href="">Delivery and Payment</a></span>
//                </div>
//                <div className="search">
//                     <img className='searchImg' src="project_easy_sushi\my-app\public\logo192.png" alt="#" />
//                </div>
//            </div>
//        </header>
//     )
// }


// export default ContactSection;