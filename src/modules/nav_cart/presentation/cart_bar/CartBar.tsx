import React from 'react';
import EmptyCartBar from "./empty_cart_bar/EmptyCartBar";
import FilledCartBar from "./filled_cart_bar/FilledCartBar";
import DeliveryTimeChecker from "./delivery_time_checker/DeliveryTimeChecker";
import DeliveryTimeResult from "./delivery_time_result/DeliveryTimeResult";

function CartBar() {
    return (
        <>
            <EmptyCartBar/>
            <FilledCartBar/>
            <DeliveryTimeChecker/>
            <DeliveryTimeResult/>
        </>
    );
}

export default CartBar;