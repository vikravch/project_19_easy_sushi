import React, {useState} from 'react';
import styles from './category_header.module.css';
import setLogo from "../../mock_data/icons/sets.png";
import {mockData} from "../../mock_data/mock_data";
import CategoryCard from "../category-card/category_card";

const CategoryHeader = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleSortingMenu = () => {
        setIsActive(!isActive);
    }
    return (
        <>
            <div className={styles.category_header}>
                <div className={styles.category_heading}>
                    <img className={styles.logo_container} src={setLogo} alt="set logo"/>
                    <h1 className={styles.category_name}>Sets</h1>
                </div>
                <div className={styles.choice_container}>
                    <div className={styles.sorting_menu}>
                        <button type={'button'} onClick={toggleSortingMenu} className={styles.sort_button}>
                            <p className={styles.sorting}>Sorting</p>
                            <div className={styles.sort_container}>
                                <p className={styles.sort_header}>By default</p>
                                <span className={styles.arrow}></span>
                            </div>
                        </button>
                        <ul className={`${styles.dropdown_list} ${isActive ? styles.dropdown_active : styles.dropdown_hidden}`}>
                            <li className={styles.dropdown_list_item} data-value={'default'}>By default</li>
                            <li className={styles.dropdown_list_item} data-value={'name'}>Name</li>
                            <li className={styles.dropdown_list_item} data-value={'lowPrice'}>Lower Price</li>
                            <li className={styles.dropdown_list_item} data-value={'highPrice'}>Higher Price</li>
                            <li className={styles.dropdown_list_item} data-value={'quantity'}>Quantity</li>
                            <li className={styles.dropdown_list_item} data-value={'weight'}>Weight</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.card_container}>
                {mockData.map((e) => {
                    return <CategoryCard key={e.id} {...e}/>
                })}
            </div>
        </>
    );
};

export default CategoryHeader;