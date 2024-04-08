import OrderHeader from "../components/order-header/OrderHeader";
import './order-page.scss';
import OrderForm from "../components/order-form/OrderForm";

const OrderPage = () => {
    return (
        <div className={'pages_order_container'}>
            <OrderHeader />
            <OrderForm />
        </div>
    );
}

export default OrderPage;