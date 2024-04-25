import picWhatsApp from '../img/whatsapp.png';
import picTelegram from '../img/telegram.png';
import picInstagram from '../img/instagram.png';
import '../style/footer.css';

import Form from 'react-bootstrap/Form';

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
                    <Form.Label htmlFor="inputPassword5" className="span1" >Enter the number</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                    <Form.Text id="passwordHelpBlock" muted>
                    </Form.Text>
                </div>
                <div className="socialMediaSection">
                    <span>Choose a convenient</span>
                    <span>messenger for communication</span>
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
    )

}

export default Footer;

