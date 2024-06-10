import {Order} from "../../../../../nav_cart/entity/cart_bar/Order";
import Item from "./Item";
import {FC} from "react";
import './checkout_orders.scss';

interface Props {
    orders: Order[]
}

const ItemsList: FC<Props> = ({orders}) => {
    return (
        <div className={'checkout_orders_container'}>
            {orders.map((item: Order) =>
                <Item name={item.menuItemName} picture={item.menuItemPicture} price={item.menuItemPrice} amount={item.menuItemAmount} key={item.menuItemId}/>
            )}
        </div>
    )
}

export default ItemsList;