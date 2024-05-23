import EmptyCartBar from "./empty_cart_bar/EmptyCartBar";
import FilledCartBar from "./filled_cart_bar/FilledCartBar";
import DeliveryTimeChecker from "./delivery_time_checker/DeliveryTimeChecker";
import DeliveryTimeResult from "./delivery_time_result/DeliveryTimeResult";
import styles from "./RightSideBar.module.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchOrdersAsync} from "./redux/ordersAsyncThunk";
import {useEffect} from "react";


function RightSideBar() {
    const dispatch: any = useDispatch();
    const orders = useSelector((state: any) => state.order.items);

    useEffect(() => {
        dispatch(fetchOrdersAsync());
    }, [dispatch]);

    return (
        <div className={styles.rightSideBar} >
            {orders.length > 0 ? <FilledCartBar/> : <EmptyCartBar/>}
            <DeliveryTimeChecker/>
            <DeliveryTimeResult/>
        </div>
    );
}

export default RightSideBar;