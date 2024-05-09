import React, { useCallback, useEffect, useState } from 'react';
import styles from "./FilledCartBar.module.css";
import { Link } from "react-router-dom";
import { OrdersRepository } from "../../../data/cart_bar/OrdersRepository";
import {Order} from "../../../entity/cart_bar/Order";

function FilledCartBar() {

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

    function orderItemAmountSetter() {
        return (
            <span className={styles.orderItemAmountSetter}>
                <span className={styles.btnDecr}>-</span>
                {/*<span className={styles.orderItemAmount}>{orderAmount}</span>*/}
                <span className={styles.btnIncr}>+</span>
            </span>
        );
    }

    function proceedToCheckOut() {
        // Implement logic here
    }

    return (
        <div className={styles.filledCardBar}>
            <div className={styles.header}>Cart</div>
            <ul className={styles.ordersList} onChange={updateOrders}>
                {orders.map((item: any) => (
                    <li className={styles.listItem} key={item.menu_item_id}>
                        <img className={styles.listItemPicture} src={item.menu_item_picture} alt={item.menu_item_name} />
                        <span className={styles.listItemInfo}>
                            <span className={styles.listItemName}>{item.menu_item_name}</span>
                            <span className={styles.listItemAmountAndPrice}>
                                <span className={styles.amountBtn}>-</span>
                                <span className={styles.orderItemAmount}>{"10"}</span>
                                <span className={styles.amountBtn}>+</span>
                                <span className={styles.listItemPrice}>{item.menu_item_price}</span>
                                <span className={styles.listItemCurrencySymbol}>&#x20AA;</span>
                            </span>
                        </span>
                    </li>
                ))}
            </ul>
            <div className={styles.footer}>
                <span className={styles.totalPrice}>{"450"}</span>
                <span className={styles.totalCurrencySymbol}>&#x20AA;</span>
                <Link to={"/categories/cart"} className={styles.link}>
                    <button className={styles.checkOutBtn} onClick={proceedToCheckOut}>Checkout</button>
                </Link>
            </div>
        </div>
    );
}

export default FilledCartBar;
