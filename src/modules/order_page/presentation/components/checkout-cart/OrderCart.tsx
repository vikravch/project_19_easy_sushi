import {useAppSelector, useOnPageLoad} from "../../../../../general/redux/hooks";
import {fetchOrdersAsync} from "../../../../nav_cart/presentation/cart_bar/redux/ordersAsyncThunk";
import {useDispatch, useSelector} from "react-redux";
import './order_cart.scss';
import ItemsList from "./cart-items/ItemsList";
import Desc from "./cart-description/Desc";

const OrderCart = () => {

    const dispatch: any = useDispatch();
    const orders = useSelector((state: any) => state.order.items);
    const orderSum = useAppSelector(state => state.order.orderSum);
    // TODO
    const delivery = 0;
    const total = 0;

    useOnPageLoad(() => {
        dispatch(fetchOrdersAsync());
    });

    return (
        <div className={'cart_checkout_container'}>
            <div className={'upper_part'}>
                <div className={'header'}>Cart</div>
                <ItemsList orders={orders}/>
            </div>
            <div>
                <Desc total={orderSum} delivery={delivery}/>
            </div>
        </div>
    )
}

export default OrderCart;