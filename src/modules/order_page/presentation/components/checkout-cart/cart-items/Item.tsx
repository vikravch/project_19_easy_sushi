import {FC} from "react";
import './checkout_orders.scss';

interface IItem {
    name: string,
    picture: string,
    price: string,
    amount: string
}

const Item: FC<IItem> = ({name, picture, price, amount}) => {
    return (
        <div className={'checkout_orders_item'}>
            <img src={picture} alt={name} width={'80px'} height={'80px'}/>
            <div className={'item_description'}>
                <span className={'item_name'}>{name}</span>
                <div className={'item_sum'}>
                    <span>Amount: {amount}</span>
                    <span>{price}&#x20AA;</span>
                </div>

            </div>
        </div>
    );
}

export default Item;