import { Link } from 'react-router-dom'

import '../../style/single-perfumes.css'
import nav_arrow from '../../img/index-page/nav-arrow.png'
import available from '../../img/index-page/available.png'

import vert_img_1 from '../../img/single-perfumes/perfume8/1.jpg'
import vert_img_2 from '../../img/single-perfumes/perfume8/2.jpg'
import vert_img_3 from '../../img/single-perfumes/perfume8/3.jpg'
import vert_img_4 from '../../img/single-perfumes/perfume8/4.jpg'

import perfume_main_img from '../../img/single-perfumes/perfume8/1.jpg'

const Perfume8 = () => {

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
                <h4 className="nav-part-h4">MEMO PARIS marfa</h4>
            </div>


            <h1 className="header-h1">MEMO PARIS marfa</h1>


            <div className="perfume-main-content">

                <div className="vertical-images-container">
                    <button className="vertical-image-button" onClick={clickChacnge}><img className="vertical-image vertical-image2" src={vert_img_1}/></button>
                    <button className="vertical-image-button" onClick={clickChacnge}><img className="vertical-image vertical-image2" src={vert_img_2}/></button>
                    <button className="vertical-image-button" onClick={clickChacnge}><img className="vertical-image vertical-image2" src={vert_img_3}/></button>
                    <button className="vertical-image-button" onClick={clickChacnge}><img className="vertical-image vertical-image2" src={vert_img_4}/></button>
                </div>
                <div id="perfume-main-image" className="perfume-main-image-container">
                    <img className="perfume-main-image" src={perfume_main_img} />
                </div>


                <div className="perfume-main-text">
                    <p className="perfume-main-text-p">
                    тип продукта: парфюмерная вода
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    для кого: унисекс
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    группа ароматов: цитрусовые
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    страна бренда: Франция
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    верхние ноты: апельсиновый цвет и мандарин
                    </p>
                    <p className="perfume-main-text-p">
                    средние ноты: тубероза, агава и иланг-иланг
                    </p>
                    <p className="perfume-main-text-p">
                    базовые ноты: сандал, белый кедр, мускус и ваниль
                    </p>
                </div>


                <div className="perfume-order-container">
                <div className="perfume-cost-container">
                    <h2 className="perfume-cost-new2">886,65 р.</h2>
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
                        Эта красочная, романтичная парфюмерная композиция, принадлежит цветочной, древесно-мускусной группе ароматов Она выпущена в 2016 году французским нишевым брендом Memo при участии парфюмера Aleonor Massenet, в качестве универсального аромата для мужчин и женщин. Вдохновением для создания данного аромата, у знаменитого парфюмера, послужил романтичный американский город Marfa в штате Техас, который является привлекательным местом для туристов, характеризируется минимализмом в архитектуре и живописной панорамой. Уже с первых нот парфюм интригует красочностью и тонкостью аромата апельсинового цвета, заманивая, и как будто приглашая ощутить захватывающие ноты авантюрного ароматического путешествия. Насыщенное, цветочное благоухание двух самобытных, оригинальных цветков ириса и туберозы, делает его вдохновляющим и романтичным, а глубокий, изысканный, уютный шлейф из дорогой, свежей, ароматной древесины придает парфюму роскошь звучания и магический шарм.
                        </p>
                    </div>  

                    <div className="perfume-additional-description">
                        <p className="main-additional-descr-p">
                            страна-производитель:<br />
                            Швейцария
                        </p>
                        <p className="main-additional-descr-p">
                            изготовитель<br />
                            MEMO INTERNATIONAL SA, 12 Rue du Lac, 1207 Geneva, Switzerland; 18 Chemin des Hauts-crêts CH-1223 
                        </p>
                    </div>
                </div>

                <div className="perfume-single-description perfume-single-description2">
                        <h3 className="main-description-h3">О бренде</h3>
                        <h3 className="main-description-h3-2">MEMO PARIS</h3>
                        <p className="main-description-p main-description-p2">
                        Vilhelm Parfumerie - это не просто парфюмерия, это настоящая библиотека ароматов. И если обычные ароматы молчат, то в Vilhelm Parfumerie они рассказывают прекрасные истории. Внутри одинаковых флаконов абсолютно разные и многогранные композиции, затрагивающие все наши чувства. Роскошные стеклянные флаконы со спиральным узором созданы легендарным дизайнером Пьером Динаном. Их украшают этикетки цвета шафрана, которые напоминают кусочек бакелита, найденный на парижском антикварном рынке.
                        </p>
                        <p className="main-description-p main-description-p2">
                        Парижский парфюмерный дом был основан в 2007 году Кларой Моллой и ее супругом Джоном, для которых ароматы были необыкновенным предлогом для странствий. Мемо — собрание самых острых воспоминаний, привезенных из различных уголков мира, сокровища различных стран. Великое путешествие привело к созданию совершенной пары: она — поэтесса с каталонскими корнями из Парижа, он — спортивный ирландец, путешествующий по миру. Memo — это память. Это сувенир. 5 коллекций ароматов представляют оригинальный путеводитель по странам мира. Это вселенная чувственного восприятия.

Когда мы вдыхаем аромат, то будто ощущаем неведомые ранее чувства, вплетая их в собственные души. Девиз Мемо: Цель путешествия — само путешествие!

                        </p>
                </div>
            </div>
            </div>
        </>
    )
}
export {Perfume8}