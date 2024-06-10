import './order-header.scss';
import clock from '../../icons/clock.png';
import {useNavigate} from "react-router-dom";

const OrderHeader = () => {

    const navigation = useNavigate();

    const handleClick = () => {
        navigation("/categories");
    }

    return (
       <div className={'order_header_container'}>
            <button className={'continue_choosing_button'} onClick={handleClick}>&larr; Continue choosing</button>
            <div className={'hours_info_container'}>
                <span className={'info_desc'}>Our phones</span>
                <span className={'info_phones'}>+972 705 188 955</span>
                <span className={'info_phones'}>+972 555 188 955</span>
                <span className={'info_hours'}>
                    <img src={clock} alt=""/>
                    Business hours: 10:00 - 00:00
                </span>
            </div>
            <div className={'language_container'}>
                <button className={'language_button'}>EN</button>
                <span>|</span>
                <button className={'language_button'}>HE</button>
            </div>
       </div>
    );
}

export default OrderHeader;