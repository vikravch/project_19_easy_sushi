import './order-form.scss';
import React, { useState } from "react";

const OrderForm = () => {

    const [sticks, setSticks] = useState<number>(0);

    const handleRemoveClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (sticks > 0) {
            setSticks(prevState => --prevState);
        }
    }

    const handleAddClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setSticks(prevState => ++prevState);
    }

    return (
        <div className={'order_form_container'}>
            <form>
                <h2>Your details</h2>
                <div className={'form_layout'}>
                    <div className={'form_left_side'}>
                        <div className={'left_side_1'}>
                            <input type="tel" placeholder={'Phone'}/>
                            <input type="text" placeholder={'First Name'}/>
                        </div>
                        <div className={'left_side_2'}>
                            <button className={'form_left_button'}>
                                Cash
                            </button>
                            <button className={'form_right_button'}>
                                Credit
                            </button>
                        </div>
                        <div className={'left_side_3'}>
                            <input type="checkbox"/>
                            <span>Prepare change from</span>
                            <input type="number" placeholder={'Total'}/>
                        </div>
                        <input className={'comment'} type="text" placeholder={'Comments to the order'}/>
                        <div className={'left_side_4'}>
                            <span>Sticks + regular gravy boat</span>
                            <button onClick={handleRemoveClick}>-</button>{sticks}<button onClick={handleAddClick}>+</button>
                        </div>
                        <input className={'promo_code'} type="text" placeholder="Enter promotional code"/>
                    </div>
                    <div className={'form_right_side'}>
                        <div className={'right_side_1'}>
                            <button className={'form_left_button'}>Courier</button>
                            <button className={'form_right_button'}>Pickup</button>
                        </div>
                        <div className={'right_side_2'}>
                            <input className={'street'} type="text" placeholder={"Street"}/>
                            <input type="text" placeholder={"Building"}/>
                            <input type="text" placeholder={"App"}/>
                            <input type="text" placeholder={"Entrance"}/>
                            <input type="text" placeholder={"Floor"}/>
                            <input type="text" placeholder={"Code"}/>
                        </div>
                        <div className={'right_side_3'}>
                            <button>Now</button>
                            <button>In Time</button>
                        </div>
                        <input type="email" placeholder={'Email (not necessary)'}/>
                    </div>
                </div>

                <button type={'submit'} onClick={e => e.preventDefault()}>Checkout</button>
                <p>By clicking on the Checkout button, you confirm your consent to the processing of personal data in
                    accordance with the Public Offer</p>
            </form>
        </div>
    );
}

export default OrderForm;