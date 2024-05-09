import React, {useCallback, useEffect, useState} from 'react';
import EmptyCartBar from "./empty_cart_bar/EmptyCartBar";
import FilledCartBar from "./filled_cart_bar/FilledCartBar";
import DeliveryTimeChecker from "./delivery_time_checker/DeliveryTimeChecker";
import DeliveryTimeResult from "./delivery_time_result/DeliveryTimeResult";
import styles from "./RightSideBar.module.css"
import {Order} from "../../entity/cart_bar/Order";
import {OrdersRepository} from "../../data/cart_bar/OrdersRepository";


function RightSideBar() {

    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const ordersData = await OrdersRepository.getOrdersList();
                setOrders(ordersData);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, []);

    const updateOrders = useCallback(async ()=>{
        // request for random activity
        const res = await OrdersRepository.getOrdersList();
        setOrders(res);
    }, []);


    return (
        <div className={styles.rightSideBar} >
            {orders.length > 0 ? <FilledCartBar/> : <EmptyCartBar/>}
            <DeliveryTimeChecker/>
            <DeliveryTimeResult/>
        </div>
    );
}

export default RightSideBar;