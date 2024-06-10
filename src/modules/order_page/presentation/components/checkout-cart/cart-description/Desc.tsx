import './checkout_description.scss';
import {FC} from "react";

interface IDesc {
    total: number,
    delivery: number
}

const Desc: FC<IDesc> = ({total, delivery}) => {
    return (
        <div className={'description_container'}>
            <div className={'discount'}>
                <span>Discount</span><span>0</span>
            </div>
            <hr/>
            <div className={'delivery'}>
                <span>Delivery</span><span>{delivery === 0 ? "Free" : delivery + ` ₪`}</span>
            </div>
            <hr/>
            <div className={'total'}>
                <span>Total</span><span>{total} &#x20AA;</span>
            </div>
        </div>
    )
}

export default Desc;