import React from 'react';
import styles from "../../navigation_bar/NavigationBar.module.css";
import {Link} from "react-router-dom";

const mockJson = [
    {
        "menu_id": "1111",
        "picture_link": "https://esushi.md/files/2022-11-11/images/medium/380_a1000-_-1668176636.png",
        "menu_order": "Philadelphia and Salmon",
        "price": "120.99 U+20AA"
    },
    {
        "menu_id": "2222",
        "picture_link": "https://esushi.md/files/2023-01-06/images/medium/f_b_i14614-_-1673014147.png",
        "menu_order": "Salmon Combination",
        "price": "150.99 U+20AA"
    },
    {
        "menu_id": "3333",
        "picture_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiD4o_5C-UEmiZUHFKqoNA-hzMHadRfB40-VxO5bjqHSyJKO-yRxDJjp9AAZfpw-3fm4&usqp=CAU",
        "menu_order": "Biggest Philadelphia",
        "price": "180.99"
    }
]

function orderItemAmountSetter()  {
    return (
        <span className={styles.orderItemAmountSetter}>
        <span className={styles.btnDecr}>-</span>
        {/*<span className={styles.orderItemAmount}>{orderAmount}</span>*/}
        <span className={styles.btnIncr}>+</span>
    </span>
    );
}

//TODO async order requests and put instead of mockJson
const ordersList = mockJson.map(item => {
    return <li className={styles.listItem} key={Math.random()}>
        <span>{item.picture_link}</span>
        <span>{item.menu_order}</span>
        <span>{orderItemAmountSetter()}</span>
        <span>{item.price}</span><span>U+20AA</span>
    </li>
})

function proceedToCheckOut() {
    return undefined;
}

function FilledCartBar() {
    return (
        <>
            <div className={styles.header}>Cart</div>
            <span className={styles.total}></span>
            <Link to={"/cart"} className={styles.link}>
                <span className={styles.checkOutBtn} onClick={proceedToCheckOut()}>Checkout</span>
            </Link>
        </>
    );
}

export default FilledCartBar;