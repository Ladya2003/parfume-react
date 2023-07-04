import './style/App.css';
import loupe from './img/index-page/search-el2.png'
import shopping_cart from './img/index-page/shopping-cart-icon.png'
import footer_registration from './img/index-page/footer-registration.png'

import pay1 from './img/index-page/pay/pay-1.png'
import pay2 from './img/index-page/pay/pay-2.png'
import pay3 from './img/index-page/pay/pay-3.png'
import pay4 from './img/index-page/pay/pay-4.png'
import pay5 from './img/index-page/pay/pay-5.png'
import pay6 from './img/index-page/pay/pay-6.png'
import pay7 from './img/index-page/pay/pay-7.png'
import pay8 from './img/index-page/pay/pay-8.png'

import { useState } from 'react';
import React, { useEffect } from 'react';
import { Routes, Route, Link, Router } from 'react-router-dom'
import {WomanPerfume} from './components/WomanPerfume'
import {Mainpage} from './components/Mainpage'
import {ManPerfume} from './components/ManPerfume'
import {OrderPage} from './components/OrderPage'

import {Perfume1} from './components/perfumes/Perfume1'
import {Perfume2} from './components/perfumes/Perfume2'
import {Perfume3} from './components/perfumes/Perfume3'
import {Perfume4} from './components/perfumes/Perfume4'
import {Perfume5} from './components/perfumes/Perfume5'
import {Perfume6} from './components/perfumes/Perfume6'

import {Perfume7} from './components/perfumes/Perfume7'
import {Perfume8} from './components/perfumes/Perfume8'
import {Perfume9} from './components/perfumes/Perfume9'


import PerfumesShortData from './components/PerfumesShortData'
import sale from './img/index-page/single-perfume-sale.png'
import available from './img/index-page/available.png'

import Toggle from './components/Toogle'



function App() {
  const [searchValue, setSearchValue] = useState("");
  const [isShown, setIsShown] = useState(true);

  // ф-ия для показа блока результата поиска
  const searchHide = current => {
    // 👇️ toggle visibility
    setIsShown(current => !current);
  };
  const SearchHide2 = (current) => {
    setTimeout(() => setIsShown(current => !current), 200);
  };

  return (
    <div className="App">
      <nav className="main-nav">
        <div className="tools1-container">
          <Link className="navLink" to="/order"><h3>Оплата</h3></Link>
          <Link className="navLink" to="/order"><h3>Доставка</h3></Link>
          <a className="nav-a" href="#main-footer"><h3>Контакты</h3></a>
        </div>

        <div className="tools2-container">
          <a className="nav-a" href="https://vk.com/aesxanax"><h1>ELENA</h1></a>
          <div className="search-container">
            <input 
                type="text"
                placeholder="Поиск товара"
                onChange={(event) => setSearchValue(event.target.value)} 
                onClick={searchHide}
                onBlur={SearchHide2}
                data-testid="searchInput"
                />
            <img src={loupe} />
          </div>
          <div className="shopping-cart">
            <div className="shopping-cart-container"><img src={shopping_cart} />
            <Link className="navLink" to="/order"><h2>Заказать</h2></Link>
            </div>
            <div className="">
            <Toggle className="toggle-container" />
            </div>
          </div>
        </div>

        <div className="tools3-container">
          <Link className="navLink" to="*"><h3>Главная</h3></Link>
          <Link className="navLink" to="/woman"><h3>Женский парфюм</h3></Link>
          <Link className="navLink" to="/man"><h3>Мужской парфюм</h3></Link>
        </div>
      </nav>


      <div id="search-block" style={{display: isShown ? 'none' : 'block'}} className="search-resault-container">
        <h1 className="search-res-h1">Результат поиска: </h1>
        <div className="search-resault-container2">
          {PerfumesShortData.filter((val) => {
                if (searchValue == "") {
                  return 0;
                }
                else if (val.name.toLowerCase().includes(searchValue.toLowerCase())) {
                  return val
                }
          }).map((val) => {
            return (
              <>
                <div className="slider-single-perf" key={val.id}>
                            <img style={{display: val.saleState ? 'block' : 'none'}}className="main-page-sale" src={sale} />
                            <Link className="linktosingleperfume" to={val.linkto}><img className="slider-perf-img" src={val.img_src} /> </Link>
                            <h1 className="slider-perf-h1">{val.name}</h1>
                            <h2 className="slider-perf-h2">{val.country}</h2>
                            <div className="perfume-available-container">
                                <img src={available} />
                                <h3>В наличии</h3>
                            </div>
                            <div className="perfume-cost">
                                <h2 className="perfume-cost-old">{val.old_cost}</h2>
                                <h2 className="perfume-cost-new">{val.new_cost}</h2>
                            </div>
                  </div>
              </>
            )})}
        </div>
      </div>
      

      <Routes>
        <Route path="*" element={<Mainpage />}></Route>
        <Route path="woman" element={<WomanPerfume />}></Route>
        <Route path="man" element={<ManPerfume />}></Route>
        <Route path="order" element={<OrderPage />}></Route>

        <Route path="perfume1" element={<Perfume1 />}></Route>
        <Route path="perfume2" element={<Perfume2 />}></Route>
        <Route path="perfume3" element={<Perfume3 />}></Route>

        <Route path="perfume4" element={<Perfume4 />}></Route>
        <Route path="perfume5" element={<Perfume5 />}></Route>
        <Route path="perfume6" element={<Perfume6 />}></Route>

        <Route path="perfume7" element={<Perfume7 />}></Route>
        <Route path="perfume8" element={<Perfume8 />}></Route>
        <Route path="perfume9" element={<Perfume9 />}></Route>
      </Routes>

      <footer id="main-footer" className="main-footer">
        <div className="footer-info1">
          <div className="footer-info1-1">
            <h1>ELENA</h1>
            <p>
              г. Минск, пр-т Победителей, 135<br />
              График работы салона AEG:<br />
              Пн-Пт: 10:00 - 20:00, <br />
              Сб-Вс: 11:00 - 18:00
            </p>
            <p>
              +375 (29) 116-11-91
            </p>
          </div>
          <div className="footer-info1-2">
            <h2>Каталог</h2>
            <Link className="navLink" to="/woman"><h3>Женский парфюм</h3></Link>
            <Link className="navLink" to="/man"><h3>Мужской парфюм</h3></Link>
            <Link className="navLink" to="*"><h3>Акционные предложения</h3></Link>
          </div>
          <div className="footer-info1-2">
            <Link className="navLink" to="/order"><h2>Как купить</h2></Link>
            <Link className="navLink" to="/order"><h3>Оплата</h3></Link>
            <Link className="navLink" to="/order"><h3>Доставка</h3></Link>
          </div>
        </div>
        <div className="footer-info2">
          <hr />
          <div className="pay-container">
            <img src={pay1} />
            <img src={pay2} />
            <img src={pay3} />
            <img src={pay4} />
            <img src={pay5} />
            <img src={pay6} />
            <img src={pay7} />
            <img src={pay8} />
          </div>
          <div className="registration-container">
            <img className="footer_registration" src={footer_registration} />
            <p>
              Парфюмист. Дата регистрации в Торговом реестре: 22.01.2019 г., № 438632
              Свидетельство о регистрации №190579786, выдано 11.11.2004 г. Мингорисполком. УНП 190579786.
              Юр.адрес: 220092, г. Минск, ул.Берута, 3б, пом. №16, Время работы: Пн-Пт: 08:00-20:00, Сб-Вс: 10:00-19:00 
            </p>
          </div>
          <hr />
          <p>
          <a className="nav-a" href="https://vk.com/aesxanax">© Выполнено студенткой ФИТа ИСиТа 2-1 Повшок Александрой Игоревной. Все права защищены.</a> 
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
