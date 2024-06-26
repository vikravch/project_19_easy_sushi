import styles from "./FilledCartBar.module.css";
import {Link} from "react-router-dom";
import {Order} from "../../../entity/cart_bar/Order";
import {
    computeOrderSum,
    decrementOrderItemAmount,
    incrementOrderItemAmount,
    removeOrderItem
} from "../redux/orderSlice";
import {
    fetchOrdersAsync,
    updateOrdersAsync
} from "../redux/ordersAsyncThunk";
import {useAppDispatch, useAppSelector, useOnPageLoad, useOnPageUnload} from "../../../../../general/redux/hooks";

function FilledCartBar() {

    const dispatch: any = useAppDispatch();
    const orders = useAppSelector((state) => state.order.items);
    const orderSum = useAppSelector((state) => state.order.orderSum);


    const handleIncrement = (menuItemId: string) => {
        dispatch(incrementOrderItemAmount(menuItemId));
    };

    const handleDecrement = (menuItemId: string) => {
        dispatch(decrementOrderItemAmount(menuItemId));
    };


    const handleRemove = (menuItemId: string) => {
        dispatch(removeOrderItem(menuItemId));
    };


    // load data on page load
    useOnPageLoad(() => {
        dispatch(fetchOrdersAsync());
        dispatch(computeOrderSum());
    });


    useOnPageUnload(() => {
        dispatch(updateOrdersAsync(orders));
    });


    return (
        <div className={styles.filledCardBar}>
            <div className={styles.header}>Cart</div>
            <ul className={styles.ordersList}>
                {orders.map((item: Order) => (
                    <li className={styles.listItem} key={item.menuItemId}>
                        <img className={styles.listItemPicture} src={item.menuItemPicture} alt={item.menuItemName}/>
                        <span className={styles.listItemInfo}>
                            <span className={styles.listItemName}>{item.menuItemName}</span>
                            <span className={styles.listItemAmountAndPrice}>
                                <span className={styles.amountBtn}
                                      onClick={() => handleDecrement(item.menuItemId)}>-</span>
                                <span className={styles.orderItemAmount}>{item.menuItemAmount}</span>
                                <span className={styles.amountBtn}
                                      onClick={() => handleIncrement(item.menuItemId)}>+</span>
                                <span className={styles.listItemPrice}>{item.menuItemPrice}</span>
                                <span className={styles.listItemCurrencySymbol}>&#x20AA;</span>
                            </span>
                        </span>
                    </li>
                ))}
            </ul>
            <div className={styles.footer}>
                <span className={styles.totalPrice}>{orderSum.toFixed(2)}</span>
                <span className={styles.totalCurrencySymbol}>&#x20AA;</span>
                <Link to={"/categories/cart"} className={styles.link}>
                    <button className={styles.checkOutBtn} onClick={() => dispatch(updateOrdersAsync(orders))}>Checkout</button>
                </Link>
            </div>
        </div>
    );
}


export default FilledCartBar;
