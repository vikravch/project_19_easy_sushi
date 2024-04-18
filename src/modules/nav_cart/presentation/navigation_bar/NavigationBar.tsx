import React from 'react';
import PizzaIcon from "./icons/PizzaIcon";
import {Link} from "react-router-dom";
import SetsIcon from "./icons/SetsIcon";
import WokIcon from "./icons/WokIcon";
import RollsIcon from "./icons/RollsIcon";
import SushiIcon from "./icons/SushiIcon";
import SaladsIcon from "./icons/SaladsIcon";
import SoupsIcon from "./icons/SoupsIcon";
import CornDogsIcon from "./icons/CornDogsIcon";
import DrinksIcon from "./icons/DrinksIcon";
import DiscountIcon from "./icons/DiscountIcon";

import styles from './NavigationBar.module.css'
import MainLogoIcon from "./icons/MainLogoIcon";

const pizzaNavItem = {id: 1, icon: <PizzaIcon/>, title: "Pizza", url: "/category/pizza"}
const setsNavItem = {id: 2, icon: <SetsIcon/>, title: "Sets", url: "/category/sets"}
const wokNavItem = {id: 3, icon: <WokIcon/>, title: "WOK", url: "/category/wok"}
const rollsNavItem = {id: 4, icon: <RollsIcon/>, title: "Rolls", url: "/category/rolls"}
const sushiNavItem = {id: 5, icon: <SushiIcon/>, title: "Sushi", url: "/category/sushi"}
const saladsNavItem = {id: 6, icon: <SaladsIcon/>, title: "Salads", url: "/category/salads"}
const soupsNavItem = {id: 7, icon: <SoupsIcon/>, title: "Soups", url: "/category/soups"}
const cornDogsNavItem = {id: 8, icon: <CornDogsIcon/>, title: "Corn dogs", url: "/category/corn-dogs"}
const drinksNavItem = {id: 9, icon: <DrinksIcon/>, title: "Drinks", url: "/category/drinks"}
const discountNavItem = {id: 10, icon: <DiscountIcon/>, title: "Discount", url: "/category/discount"}

const navBarItems = [pizzaNavItem, setsNavItem, wokNavItem, rollsNavItem, sushiNavItem, saladsNavItem, soupsNavItem, cornDogsNavItem, drinksNavItem, discountNavItem]

const navBarMenu = navBarItems.map(item => {
    return <li className={styles.listItem} key={item.id}>
        <span className={styles.icon}>{item.icon}</span>
        <Link to={item.url} className={styles.link}>
            <span className={styles.title}>{item.title}</span>
        </Link>
    </li>
})

function NavigationBar() {
    return (
        <>
            <Link to={"/"} className={styles.link}>
                <div className={styles.companyInfo}>
                    <span className={styles.companyLogo}><MainLogoIcon/></span>
                    <div className={styles.companyName}>EASYSUSHI</div>
                </div>
            </Link>
            <ul className={styles.list}>{navBarMenu}</ul>
        </>
    );
}

export default NavigationBar;