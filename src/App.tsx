import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import ActivityPage from "./modules/activity_page/presentation/ActivityPage";
import RightSideBar from "./modules/nav_cart/presentation/cart_bar/RightSideBar";
import NavigationBar from "./modules/nav_cart/presentation/navigation_bar/NavigationBar";
import CategoryPage from "./modules/category_page/presentation/pages/categoryPage";
import {getLangFromStorage, setLangInStorage} from "./utils/common";
import {useAppSelector} from "./general/redux/hooks";
import i18n from "i18next";
import OrderPage from "./modules/order_page/presentation/pages/OrderPage";

function App() {
    const currentLanguage = getLangFromStorage();
    if(!currentLanguage)
        setLangInStorage('En');
    const {pathname} = useLocation();
    const {language} = useAppSelector(state => state.language);
    useEffect(() => {
        i18n.changeLanguage(language)
    }, [language]);
    useEffect(() => {
        window.scrollTo(0, 0); // Move scroll to the top of the page if route changes
    }, [pathname]);
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
              <RightSideBar/>
          </div>
      </div>
  );
}
export default App;
