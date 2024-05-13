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


    const [isOpen, setIsOpen] = useState(false); // Состояние для отображения/скрытия выпадающего меню
    const [selectedCity, setSelectedCity] = useState('City'); // Состояние выбранного города
    const dropdownRef = useRef<HTMLDivElement>(null); // Ссылка на DOM-элемент выпадающего меню

    // Обработчик нажатия на кнопку
    const handleButtonClick = () => {
        setIsOpen(!isOpen); // Инвертируем состояние отображения выпадающего меню
    };

    // Обработчик выбора города
    const handleCitySelect = (city: string) => {
        setSelectedCity(city); // Обновляем выбранный город
        setIsOpen(false); // Закрываем выпадающее меню
    };

    // Обработчик клика за пределами выпадающего меню для его закрытия
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false); // Закрываем выпадающее меню, если клик был совершен за его пределами
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








// import React, { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import searchIcon from '../../../img/searchIcon.png';
// import { FormControl, InputGroup, Button } from 'react-bootstrap';
// import '../header/header.scss';
// import '../../../../../index.css';

// function ContactSection() {
//     const [selectedCity, setSelectedCity] = useState('City');
//     const [showSearchBar, setShowSearchBar] = useState(false);

//     const handleCitySelect = (city: string) => {
//         setSelectedCity(city);
//     };

//     const handleSearchIconClick = () => {
//         setShowSearchBar(true);
//     };

//     const handleSearchBarClose = () => {
//         setShowSearchBar(false);
//     };

//     return (     
//        <header>
//           <div className='contactInform'>
//                 <div className='phoneNumber'>
//                     <span className='telOrd'>Our phones</span>
//                     <span className='num'>+972 705 188 955</span>
//                     <span className='num'>+972 705 188 955</span>
//                     <span className='openHours'>Business hours: 10:00 - 00:00 </span>
//                 </div>
//                 <div className='generalSection'>
//                 <div className='headerLeftSide'>
//                 <DropdownButton 
//                     id="dropdown-basic-button" 
//                     title={selectedCity} 
//                     variant="underline"
//                     className="citySelection"
//                     >
//                     <Dropdown.Item onClick={() => handleCitySelect('Haifa')}>Haifa</Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleCitySelect('Tel-aviv')}>Tel-aviv</Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleCitySelect('Petah Tikva')}>Petah Tikva</Dropdown.Item>
//                 </DropdownButton>  
//                </div>
                
//                 <div className='headerRightSide'>
//                <div className='feedBack'>
//                     <span className='reviews'><a href="./">Reviews</a></span>
//                </div>
//                <div className="orders">
//                     <span className='ord'><a href="./">Delivery and Payment</a></span>
//                </div>
//                {showSearchBar ? (
//                     <form onSubmit={handleSearchBarClose} className="d-flex searchInput">
//                         <InputGroup >
//                             <FormControl
//                                 placeholder="Search..."
//                                 aria-label="Search"
//                                 aria-describedby="basic-addon2"
//                             />
//                             <InputGroup.Text>
//                                 <Button 
//                                    variant="outline" 
//                                    type="submit"
//                                    className="searchActiveButton"
//                                    >Search</Button>
//                             </InputGroup.Text>
//                         </InputGroup>
//                     </form>
//                 ) : (
//                     <div className="search" onClick={handleSearchIconClick}>
//                         <img className='searchImg' src={searchIcon} alt="#"/>
//                     </div>
//                 )}
//                 </div>
//                 </div>
//             </div>
//        </header>
//     )
// }

// export default ContactSection;








