import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import ActivityPage from "./modules/activity_page/presentation/ActivityPage";
import NavigationBar from "./modules/nav_cart/presentation/NavigationBar";
import CartBar from "./modules/nav_cart/presentation/CartBar";
import CategoryPage from "./modules/category_page/presentation/pages/categoryPage";
import {getLangFromStorage, setLangInStorage} from "./utils/common";
import i18n from "i18next";
import OrderPage from "./modules/order_page/presentation/pages/OrderPage";

function App() {

    const currentLang = getLangFromStorage();
    // const {language} = useAppSelector(state => state.languageSlice);
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Move scroll to the top of the page if route changes
    }, [pathname]);
    // useEffect(() => {
    //     if(!currentLang) {
    //         setLangInStorage('En')
    //     }
    //     i18n.changeLanguage(language);
    // }, [language]);
    useEffect(() => {
        if(!currentLang) {
            setLangInStorage('En')
        }
    }, []);
  return (
      <div className={'App'}>
          <div className={'Nav'}><NavigationBar/></div>
          <div className={'Main'}>
              <Routes>
                  <Route path={'/activity'} element={<ActivityPage/>}/>
                  <Route path={'*'} element={<ActivityPage/>}/>
                  <Route path={'/category'} element={<CategoryPage/>}/>
                  <Route path={'/order'} element={<OrderPage />} />
              </Routes>
          </div>
          <div className={'Cart'}>
              <CartBar/>
          </div>
      </div>
  );
}
export default App;
