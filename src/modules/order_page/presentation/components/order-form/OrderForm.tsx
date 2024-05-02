import './order-form.scss';
import React, {useEffect, useState} from "react";
import ToggleElement from "../toggleElement/ToggleElement";
import {SubmitHandler, useForm} from "react-hook-form";
import cash from '../../icons/cash.svg';
import card from '../../icons/card.svg';

type Inputs = {
    phone: number;
    firstName: string;
    isCash: boolean;
    change: number;
    comment: string;
    sticks: number;
    promoCode: string;
    isCourier: boolean;
    address: {
        street: number;
        building: number;
        apartment: number;
        entrance: number;
        floor: number;
        code: string;
    };
    isNow: boolean;
    deliveryTime: number;
    email: string;
}

const OrderForm = () => {

    const [sticks, setSticks] = useState<number>(0);
    const [checkbox, setCheckbox] = useState(false);
    const [isCash, setIsCash] = useState(true);
    const [isCourier, setIsCourier] = useState(true);
    const [isNow, setIsNow] = useState(true);

    const {register, handleSubmit, setValue} = useForm<Inputs>({
        defaultValues: {
            change: 0,
        }
    });
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        alert("Form submitted successfully!");
    }

    useEffect(() => {
        setValue("sticks", sticks);
        setValue("isCash", isCash);
        setValue("isCourier", isCourier);
        setValue("isNow", isNow)
    }, [sticks, isCash, isCourier, isNow, setValue])

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Your details</h2>
                <div className={'form_layout'}>
                    <div className={'form_left_side'}>
                        <div className={'left_side_1'}>
                            <input type="tel" placeholder={'Phone'} {...register("phone",{required: true, minLength: 10}) } />
                            <input type="text" placeholder={'First Name'} {...register("firstName", {required: true})}/>
                        </div>
                        <ToggleElement firstText={"Cash"} secondText={"Credit"} state={isCash} setState={setIsCash} img={[cash, card]}/>
                        <div className={'left_side_3'}>
                            <input type="checkbox" onClick={() => setCheckbox(!checkbox)}/>
                            <span>Prepare change from</span>
                            {checkbox && isCash && <input type="number" {...register("change", {required: checkbox})}/>}
                        </div>
                        <input className={'comment'} type="text" placeholder={'Comments to the order'} {...register("comment")}/>
                        <div className={'left_side_4'}>
                            <span>Sticks + regular gravy boat</span>
                            <button onClick={handleRemoveClick}>-</button>
                                {sticks}
                            <button onClick={handleAddClick}>+</button>
                        </div>
                        <input className={'promo_code'} type="text" placeholder="Enter promotional code" {...register("promoCode")}/>
                    </div>
                    <div className={'form_right_side'}>
                        <ToggleElement firstText={"Courier"} secondText={"Pickup"} state={isCourier} setState={setIsCourier}/>
                        <div className={'right_side_2'}>
                            <input className={'street'} type="text" placeholder={"Street"} {...register("address.street", {required: !isCourier})}/>
                            <input type="text" placeholder={"Building"} {...register("address.building", {required: true})}/>
                        </div>
                        <div className={'right_side_3'}>
                            <input type="text"
                                   placeholder={"Apt"} {...register("address.apartment", {required: true})}/>
                            <input type="text"
                                   placeholder={"Entrance"} {...register("address.entrance", {required: true})}/>
                            <input type="number"
                                   placeholder={"Floor"} {...register("address.floor", {required: true})}/>
                            <input type="text" placeholder={"Code"} {...register("address.code")}/>
                        </div>
                        <ToggleElement firstText={"Now"} secondText={"In Time"} state={isNow} setState={setIsNow}/>
                        {/*temporary solution*/}
                        {!isNow && <input type="time" placeholder={''}
                                          {...register("deliveryTime", {required: !isNow})}/>}
                        <input type="email" placeholder={'Email (not necessary)'} {...register("email")}/>
                    </div>
                </div>

                <input type="submit" value={'Checkout'} />
                <p>By clicking on the Checkout button, you confirm your consent to the processing of personal data in
                    accordance with the Public Offer</p>
            </form>
        </div>
    );
}

export default OrderForm;