import '../style/mainpage.css'
import header_img from '../img/main-page/header-img.jpg'
import calendar from '../img/main-page/salon/calendar.png'
import location from '../img/main-page/salon/location.png'
import phone from '../img/main-page/salon/phone.png'
import salonmainimg from '../img/main-page/salon/salonmainimg.jpg'

import CarouselMain from './CarouselMain'

const Mainpage = () => {
    return (
        <>
            <header className="header-container">
                <img className="header-img" src={header_img} />
                <div className="header-text-container">
                    <h1 className="main-header-h1">ELENA</h1>
                    <h2 className="main-header-h2">Скидки до 20% при покупке<br /> двух товаров и более </h2>
                    <h3 className="main-header-h3">*до 31 декабря</h3>
                </div>
            </header>
            <div className="content-container">
                <div className="bestsellers-container">
                    <h2 className="bestsellers-h2">Хиты продаж</h2>
                    <div className="slider-container">
                    <CarouselMain></CarouselMain>
                    </div>
                </div>

                <div className="main-salon-container">
                    <h2 className="bestsellers-h2">Наш фирменный салон</h2>
                    <div className="salon-container">
                        <img className="salon-main-img" src={salonmainimg} />
                        <div className="salon-text-content-container">
                            <h3 className="salon-context-h3">Магазин парфюмерии ELENA</h3>
                            <div className="salon-personalinfo-container">
                               <img className="salon-icon-img" src={location} />
                               <p className="salon-icon-text">Минск, проспект Победителей, 135</p> 
                            </div>
                            <div className="salon-personalinfo-container">
                               <img className="salon-icon-img" src={calendar} />
                               <p className="salon-icon-text">
                                    Пн-Пт: 10:00 - 20:00<br />
                                    Сб-Вс: 11:00 - 18:00
                                </p> 
                            </div>
                            <div className="salon-personalinfo-container">
                               <img className="salon-icon-img" src={phone} />
                               <p className="salon-icon-text">+375 (29) 116-11-91</p> 
                            </div>
                            <p className="salon-p-text salon-p-text1">
                            Большой ассортимент парфюмерии: как женской, так и мужской, как 
                            брендовые, так и бюджетные.
                            </p>
                            <p className="salon-p-text">
                                Вся парфюмерия ELENA – это эталон качества и высокой любви
                                к своему делу.      
                            </p>
                            <a className="nav-a" href="https://vk.com/aesxanax"><h3 className="salon-p-text salon-more-text">Подробнее</h3></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export {Mainpage}