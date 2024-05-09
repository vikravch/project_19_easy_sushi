import React from 'react';
import styles from "./EmptyCartBar.module.css"

function EmptyCartBar() {
    return (
        <div className={styles.emptyCart}>
            <span className={styles.emptyCartTop}>
                <span className={styles.emptyCartTopHeader}>Your cart is empty</span>
                <h4>Add something quickly!</h4>
            </span>
            <span className={styles.emptyCartBottom}>
                <span className={styles.emptyCartBottomText}>Free delivery orders over 150 ₪</span>
            </span>
        </div>
    );
}

export default EmptyCartBar;