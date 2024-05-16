import React, { useState, useRef } from 'react';
import searchIcon from '../../../img/searchIcon.png';
import '../header/header.scss';
import '../../../../../index.css';

function Header() {
   
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleSearchIconClick = () => {
        setShowSearchBar(true);
    };

    const handleSearchBarClose = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowSearchBar(false);
    };


    const [isOpen, setIsOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState('City'); 
    const dropdownRef = useRef<HTMLDivElement>(null); 

   
    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

   
    const handleCitySelect = (city: string) => {
        setSelectedCity(city);
        setIsOpen(false); 
    };

   
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false); 
        }
    }

    return (     
       <header>
          <div className='contactInform'>
                <div className='phoneNumber'>
                    <span className='telOrd'>Our phones</span>
                    <span className='num'>+972 705 188 955</span>
                    <span className='num'>+972 705 188 955</span>
                    <span className='openHours'>Business hours: 10:00 - 00:00 </span>
                </div>
                <div className="buttonWithDropdown">
                    <button className="dropdownButton" onClick={handleButtonClick}>
                        {selectedCity}
                        <span className={`arrowDown ${isOpen ? 'up' : 'down'}`}>&#9660;</span>
                    </button>
                {isOpen && (
                    <div ref={dropdownRef} className="dropdownMenu">
                        <button onClick={() => handleCitySelect('Haifa')}>Haifa</button>
                        <button onClick={() => handleCitySelect('Tel-aviv')}>Tel-aviv</button>
                        <button onClick={() => handleCitySelect('Petah Tikva')}>Petah Tikva</button>
                    </div>
                )}
                </div>
                <div className='headerRightSide'>
                        <div className='feedBack'>
                            <span className='reviews'><a href="/">Reviews</a></span>
                        </div>
                        <div className="orders">
                            <span className='ord'><a href="/">Delivery and Payment</a></span>
                        </div>
                        {showSearchBar ? (
                            <form onSubmit={handleSearchBarClose} className="d-flex">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    aria-label="Search"
                                    className="searchInput"
                                />
                                <button 
                                    type="submit"
                                    className="searchActiveButton"
                                >
                                    Search
                                </button>
                            </form>
                        ) : (
                            <div className="search" onClick={handleSearchIconClick}>
                                <img className='searchImg' src={searchIcon} alt="#" />
                            </div>
                        )} 
                     </div>
                </div>
            
       </header>
    );
}

export default Header;






