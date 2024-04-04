import React from 'react';
import styles from './pages.module.css'
import CategoryHeader from "../components/category-header/category_header";
const CategoryPage = () => {

    return (
        <main className={styles.category_container}>
            <CategoryHeader/>
        </main>
    );
};

export default CategoryPage;