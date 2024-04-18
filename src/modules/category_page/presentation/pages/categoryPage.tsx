import React from 'react';
import styles from './pages.module.css'
import CategoryHeader from "../components/category-header/category_header";
import {useAppSelector} from "../../../../general/redux/hooks";
import languageSlice from "../../../../utils/common-redux/languageSlice";
const CategoryPage = () => {

    const {language} = useAppSelector(state => state.language);
    return (
        <main className={`${styles.category_container} ${language === 'He' ? styles.hebrew : ''}`}>
            <CategoryHeader/>
        </main>
    );
};

export default CategoryPage;