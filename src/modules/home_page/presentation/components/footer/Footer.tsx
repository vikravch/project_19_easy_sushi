import React from 'react';
import './footer.scss'; 

import picWhatsApp from '../../../img/whatsapp.png';
import picTelegram from '../../../img/telegram.png';
import picInstagram from '../../../img/instagram.png';

function Footer() {
    return (
        <div className="bottomSections">
            <div className="firstSection">
                <span><a href="/about">About the company</a></span>
                <span><a href="/delivery">Delivery and Payment</a></span>
                <span><a href="/feed">Feed of materials</a></span>
                <span><a href="/return">Return policy</a></span>
            </div>
            <div className="secondSection">
                <div className="enterNumber">
                    <label htmlFor="inputPassword5" className="span1">Enter the number</label>
                    <input
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        className="puttNumber"
                    />
                    <small id="passwordHelpBlock" className="form-text text-muted">
                    </small>
                </div>
                <div className="socialMediaSection">
                    <span>Choose a convenient messenger for communication</span>
                    <div className="picOfSocialMedia">
                        <a href="/whatsApp"><img src={picWhatsApp} alt="Whats App" /></a>
                        <a href="/telegram"><img src={picTelegram} alt="Telegram" /></a>
                        <a href="/instagram"><img src={picInstagram} alt="Instagram" /></a>
                    </div>
                </div>
            </div>
            <div className="thirdSection">
                <div className="numbers">
                    <span>Phone: +972 705 188 955 </span>
                    <span>Phone: +972 705 188 955 </span>
                    <span>Address: Levi St 84</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
