import '../style/orderpage.css';
import nav_arrow from '../img/index-page/nav-arrow.png'
import { useState } from 'react';

import FormAutoFill from './FormAutoFill'

const OrderPage = () => {
    return (
        <div className="main-content2">
            <div className="nav-part">
                <h3>Главная</h3>
                <img src={nav_arrow} />
                <h3>Заказ</h3>
            </div>
            <h1 className="header-h1">Заказ</h1>
            <div className="main-content3">
            <div className="contacts-container">
                <h3 className="contacts-h3">Контактные данные</h3>
                <FormAutoFill></FormAutoFill>
            </div>
            </div>
        </div>
    )
}

export {OrderPage}