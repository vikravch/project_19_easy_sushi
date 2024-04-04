import React from 'react';
import styles from './category-card.module.css'
import {TProductCard} from "../../types";

const CategoryCard = ({id, category, img, name, weight, quantity, price}: TProductCard) => {
    const cardImage = <div className={styles.img_wrapper}><img className={styles.card_image} src={img} alt={name}/></div>
    const cardHeader = <h2 className={styles.card_header}>{name}</h2>
    const cardDescr = <p className={styles.card_descr}>{`${weight} gram, ${quantity} pieces`}</p>
    const cardBottom = <div className={styles.card_bottom}>
        <p className={styles.card_price}>{`${price}`} &#8362;</p>
        <button className={styles.card_button}>Add</button>
    </div>
    return (
        <>
            <div className={styles.card_wide}>
                <div className={styles.card_subWrapper}>
                    {cardImage}
                    {cardHeader}
                    {cardDescr}
                </div>
                <div className={styles.card_line}></div>
                {cardBottom}
            </div>
            <div className={styles.card_mobile}>
                {cardImage}
                <div className={styles.card_mobile_info}>
                    {cardHeader}
                    {cardDescr}
                    {cardBottom}
                </div>
            </div>
        </>

    );
};

export default CategoryCard;