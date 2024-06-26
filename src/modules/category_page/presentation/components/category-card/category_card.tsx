import React from 'react';
import styles from './category-card.module.css'
import {TProductCard} from "../../types";
import {useAppSelector} from "../../../../../general/redux/hooks";
import {useTranslation} from "react-i18next";

const CategoryCard = ({id, category, img, name, hebrew_name, weight, quantity, price}: TProductCard) => {
    const {language} = useAppSelector(state => state.language);
    const {t, i18n} = useTranslation();

    const cardImage = <div className={styles.img_container}><div className={styles.img_wrapper}><img className={styles.card_image} src={img} alt={name}/></div></div>
    const cardHeader = <h2 className={styles.card_header}>{language === 'En' ? name : hebrew_name}</h2>
    const cardDescr = <p className={styles.card_descr}>
        {`${weight} ${t('gram')}, 
        ${quantity} ${t('pieces')}`}</p>
    const cardBottom = <div className={styles.card_bottom}>
        <p className={styles.card_price}>{`${price}`} &#8362;</p>
        <button className={styles.card_button}>{t('add')}</button>
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