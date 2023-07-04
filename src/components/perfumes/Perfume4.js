import { Link } from 'react-router-dom'

import '../../style/single-perfumes.css'
import nav_arrow from '../../img/index-page/nav-arrow.png'
import available from '../../img/index-page/available.png'

import vert_img_1 from '../../img/single-perfumes/perfume4/1.jpg'
import vert_img_2 from '../../img/single-perfumes/perfume4/2.jpg'
import vert_img_3 from '../../img/single-perfumes/perfume4/3.jpg'
import vert_img_4 from '../../img/single-perfumes/perfume4/4.jpg'

import perfume_main_img from '../../img/single-perfumes/perfume4/1.jpg'

const Perfume4 = () => {

    const clickChacnge = (event) => {
        const big_img = document.getElementById("perfume-main-image");
        const vert_img = event.currentTarget; 
        big_img.innerHTML = vert_img.innerHTML;
    }
    
    return (
        <>
            <div className="main-content">


            <div className="nav-part nav-part2">
                <h3 className="nav-part-h3">Главная</h3>
                <img src={nav_arrow} />
                <h3 className="nav-part-h3">Женская парфюмерия</h3>
                <img src={nav_arrow} />
                <h4 className="nav-part-h4">ESCENTRIC MOLECULES molecule 02</h4>
            </div>


            <h1 className="header-h1">ESCENTRIC MOLECULES molecule 02</h1>


            <div className="perfume-main-content">

                <div className="vertical-images-container">
                    <button className="vertical-image-button" onClick={clickChacnge}><img className="vertical-image" src={vert_img_1}/></button>
                    <button className="vertical-image-button" onClick={clickChacnge}><img className="vertical-image" src={vert_img_2}/></button>
                    <button className="vertical-image-button" onClick={clickChacnge}><img className="vertical-image" src={vert_img_3}/></button>
                    <button className="vertical-image-button" onClick={clickChacnge}><img className="vertical-image" src={vert_img_4}/></button>
                </div>
                <div id="perfume-main-image" className="perfume-main-image-container">
                    <img className="perfume-main-image" src={perfume_main_img} />
                </div>


                <div className="perfume-main-text">
                    <p className="perfume-main-text-p">
                    Природный афродизиак, он никого не оставляет равнодушным, все мысли и желания окружающих только о Вас.
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    тип продукта: туалетная вода
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    для кого: унисекс
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    группа ароматов: амбровые
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    страна бренда: Германия
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    верхние, средние и базовые ноты: амброксан
                    </p>
                </div>


                <div className="perfume-order-container">
                <div className="perfume-cost-container">
                    <h2 className="perfume-cost-old2">357,55 р.</h2>
                    <h2 className="perfume-cost-new2">321,79 р.</h2>
                </div>
                <div className="perfume-available-container">
                    <img src={available} />
                    <h3>В наличии</h3>
                </div>
                <Link className="linktosingleperfume" to="/order">
                    <div className="order-button-container">
                        <button className="single-perfume-order-button">Купить в 1 клик</button>
                    </div>
                </Link>
                </div>
            </div>


            <div className="perfume-main-description-container">
                <div className="perfume-single-description-container1">
                    <div className="perfume-single-description">
                        <h3 className="main-description-h3">Описание</h3>
                        <p className="main-description-p">
                        Природный афродизиак, он никого не оставляет равнодушным, все мысли и желания окружающих только о Вас.
∙ Чистый, прозрачный, он полон животной сексуальности.
∙ Аромат словно настоящий любовный эликсир - тайное средство обольщения и соблазна.

                        </p>
                    </div>  

                    <div className="perfume-additional-description">
                        <p className="main-additional-descr-p">
                            страна-производитель:<br />
                            Russia
                        </p>
                        <p className="main-additional-descr-p">
                            изготовитель<br />
                            "This Company LTD» 8 PERCY STREET, LONDON, W1T 1DJ"
                        </p>
                    </div>
                </div>

                <div className="perfume-single-description perfume-single-description2">
                        <h3 className="main-description-h3">О бренде</h3>
                        <h3 className="main-description-h3-2">ESCENTRIC MOLECULES</h3>
                        <p className="main-description-p main-description-p2">
                        Имеет ли возможность аромат совершить прорыв, символизировать переворот и гарантию изменения прежнего мира? Escentric Molecules — это и есть та исключительная революция. Благоухание, которое вышло за рамки стандартного мира парфюмерного искусства.
                        </p>
                        <p className="main-description-p main-description-p2">
                        Основой революционного переворота является оригинальная молекула Iso E Super, результат 12 лет кропотливых научных исследований Geza Schoen’а. Магическая частица владеет качествами, сопоставимыми с феромонами, летучими хемосигналами, которые вырабатываются телом человека и формируют индивидуальный запах каждого. Geza Schoen доказал, что Iso E Super в несколько раз усиливает влияние феромонов. Escentric Molecules – это не духи, это нечто, во что Вам хочется быть укутанным, то чем хочется всегда дышать.
                        </p>
                </div>
            </div>
            </div>
        </>
    )
}
export {Perfume4}