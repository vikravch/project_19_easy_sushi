import arrowDown from '../../../img/arrowDown.png';
import { useState } from 'react';
import '../information-section/information_section.scss';


function Information() {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="wrapper_information">
            
            <span className="title">Order sushi in Petah Tikva</span>
            <p className="textAboutUs">Restaurant "Sushi and Noodles" 
                offers its customers the most delicious sushi delivered to your doorstep, 
                prepared according to classic and adapted European recipes, as well as our chefs' own developments. 
                We value our customers' time, so you can order sushi in Petah Tikva with home or office delivery.
            </p>
            
            <div className="dropdownContainer">
                    <div className="dropdownContent" style={{ display: showDetails ? 'block' : 'none' }}>
                        <span className="textAboutUs">Our menu features over 20 types of sushi:</span>
                        <div className="textList">
                            <span className="span1">- Classic with raw salmon, tuna, perch.</span>
                            <span>- Exotic with tiger shrimp, scallop.</span>
                            <span className="span3">- Spicy with smoked salmon, eel.</span>
                        </div>
            <span className="textAboutUs">The menu also includes gunkans: with fillings of red caviar and tobiko, 
                as well as felixes, where Japanese mayonnaise is combined with fish, seafood, and eel. 
                Fans of spicy dishes can buy sushi with spicy sauce. Popular fillings include smoked chicken,
                snow crab, shrimp, scallops, tuna, salmon, and perch.  
            </span> 
                </div>
                <div className="details" onClick={toggleDetails}>
                    <div className="buttonDetails">more details</div>
                    <img className="buttonDetails" src={arrowDown} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Information;


