import OrderHeader from "../components/order-header/OrderHeader";
import './order-page.scss';
import OrderForm from "../components/order-form/OrderForm";
import OrderCart from "../components/checkout-cart/OrderCart";

const OrderPage = () => {

    return (
        <div className={'pages_order_container'}>
            <div className={'pages_order_form'}>
                <OrderHeader />
                <OrderForm />
            </div>
            <div className={'pages_order_cart'}>
                <OrderCart />
            </div>
        </div>
    );
}

export default OrderPage;