import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ActivityPage from "./modules/activity_page/presentation/ActivityPage";
import NavigationBar from "./modules/nav_cart/presentation/NavigationBar";
import CartBar from "./modules/nav_cart/presentation/CartBar";

function App() {
  return (
      <div className={'App'}>
          <div className={'Nav'}><NavigationBar/></div>
          <div className={'Main'}>
              <Routes>
                  <Route path={'/activity'} element={<ActivityPage/>}/>
                  <Route path={'*'} element={<ActivityPage/>}/>
              </Routes>
          </div>
          <div className={'Cart'}>
              <CartBar/>
          </div>
      </div>

  );
}

export default App;
