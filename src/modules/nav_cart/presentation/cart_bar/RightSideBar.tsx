import EmptyCartBar from "./empty_cart_bar/EmptyCartBar";
import FilledCartBar from "./filled_cart_bar/FilledCartBar";
import DeliveryTimeChecker from "./delivery_time_checker/DeliveryTimeChecker";
import DeliveryTimeResult from "./delivery_time_result/DeliveryTimeResult";
import styles from "./RightSideBar.module.css"
import {fetchOrdersAsync} from "./redux/ordersAsyncThunk";
import {useAppDispatch, useAppSelector, useOnPageLoad} from "../../../../general/redux/hooks";


function RightSideBar() {
    const dispatch: any = useAppDispatch();
    const orders = useAppSelector((state) => state.order.items);

    useOnPageLoad(() => {
        dispatch(fetchOrdersAsync());
    });

    return (
        <div className={styles.rightSideBar}>
            {orders.length > 0 ? <FilledCartBar/> : <EmptyCartBar/>}
            <DeliveryTimeChecker/>
            <DeliveryTimeResult/>
        </div>
    );
}

export default RightSideBar;