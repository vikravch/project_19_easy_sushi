import React, {useEffect, useRef, useState} from 'react';
import styles from './category_header.module.css';
import setLogo from "../../mock_data/icons/sets.png";
import {mockData} from "../../mock_data/mock_data";
import CategoryCard from "../category-card/category_card";
import {useTranslation} from"react-i18next";
import {languages} from "../../../../../utils/common";
import {changeCurrentLanguage} from "../../../../../utils/common-redux/languageSlice";
import {useAppDispatch, useAppSelector} from "../../../../../general/redux/hooks";
import useCloseByEscape from "../../utils/useCloseByEscape";
import useCloseOnClickOutside from "../../utils/useCloseOnClickOutside";

const CategoryHeader = () => {
    const dispatch = useAppDispatch();

    const {language} = useAppSelector(state => state.language);

    const [lang, setLang] = useState(language === 'En' ? 'He' : 'En')
    const {t, i18n} = useTranslation();

    const [isActive, setIsActive] = useState(false);

    const menuRef = useRef<HTMLUListElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    useCloseByEscape(setIsActive);
    useCloseOnClickOutside(isActive, setIsActive, menuRef, menuButtonRef);

    const toggleLanguage = (l: string) => {
        l === languages[0] ? setLang(languages[1]) : setLang(languages[0]);
        dispatch(changeCurrentLanguage(l));
        i18n.changeLanguage(l);
    }
    const toggleMenu = () => {
        setIsActive(prevState => !prevState);
    }
    return (
        <>
            <div className={styles.category_header}>
                <div className={styles.category_heading}>
                    <img className={styles.logo_container} src={setLogo} alt="set logo"/>
                    <h1 className={styles.category_name}>{t('sets')}</h1>
                    <button type={'button'} onClick={() => {toggleLanguage(lang); setIsActive(false)}}>{lang}</button>
                </div>
                <div className={styles.choice_container}>
                    <div className={styles.sorting_menu}>
                        <button type={'button'}
                                ref={menuButtonRef}
                                onClick={toggleMenu} className={`${styles.sort_button} ${ styles.active }`}>
                            <p className={styles.sorting}>{t('sorting')}</p>
                            <div className={styles.sort_container}>
                                <p className={styles.sort_header}>{t('default')}</p>
                                <span className={styles.arrow}></span>
                            </div>
                        </button>
                        {isActive && (
                            <ul ref={menuRef} className={`${styles.dropdown_list} ${isActive ? styles.dropdown_active : styles.dropdown_hidden}`}>
                                <li className={styles.dropdown_list_item} data-value={'default'}>{t('default')}</li>
                                <li className={styles.dropdown_list_item} data-value={'name'}>{t('name')}</li>
                                <li className={styles.dropdown_list_item} data-value={'lowPrice'}>{t('lower')}</li>
                                <li className={styles.dropdown_list_item} data-value={'highPrice'}>{t('higher')}</li>
                                <li className={styles.dropdown_list_item} data-value={'quantity'}>{t('quantity')}</li>
                                <li className={styles.dropdown_list_item} data-value={'weight'}>{t('weight')}</li>
                            </ul>
                        )}
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


