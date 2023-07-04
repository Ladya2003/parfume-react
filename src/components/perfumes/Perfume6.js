import { Link } from 'react-router-dom'

import '../../style/single-perfumes.css'
import nav_arrow from '../../img/index-page/nav-arrow.png'
import available from '../../img/index-page/available.png'

import vert_img_1 from '../../img/single-perfumes/perfume6/1.jpg'
import vert_img_2 from '../../img/single-perfumes/perfume6/2.jpg'
import vert_img_3 from '../../img/single-perfumes/perfume6/3.jpg'
import vert_img_4 from '../../img/single-perfumes/perfume6/4.jpg'

import perfume_main_img from '../../img/single-perfumes/perfume6/1.jpg'

const Perfume6 = () => {

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
                <h4 className="nav-part-h4">VILHELM PARFUMERIE mango skin</h4>
            </div>


            <h1 className="header-h1">VILHELM PARFUMERIE mango skin</h1>


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
                    тип продукта: парфюмерная вода
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    для кого: унисекс
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    группа ароматов: фруктовые
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    страна бренда: Франция
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    верхние ноты: апельсин
                    </p>
                    <p className="perfume-main-text-p">
                    средние ноты: фиалка, иланг-иланг
                    </p>
                    <p className="perfume-main-text-p">
                    базовые ноты: франжипани
                    </p>
                </div>


                <div className="perfume-order-container">
                <div className="perfume-cost-container">
                    <h2 className="perfume-cost-old2">477,93  р.</h2>
                    <h2 className="perfume-cost-new2">430,13 р.</h2>
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
                        “Эта композиция - средоточие удовольствий! Во вкусе манго для меня есть все: флирт, любовь, игра, солнце, радость и, главное, ощущение бесконечного счастья. Я задумал создать аромат, который стал бы источником удовольствия для каждого, кто нанесет его на кожу или просто от кого-нибудь услышит” Ян Вильгельм Альгрен Аромат Mango Skin вдохновлен путешествием по Южной Африке. Для Яна Альгрена это было открытие нового мира – яркого и прекрасного. Обилие красок и ароматов, жаркое солнце и, конечно, любовь!
                        </p>
                    </div>  

                    <div className="perfume-additional-description">
                        <p className="main-additional-descr-p">
                            страна-производитель:<br />
                            Швейцария
                        </p>
                        <p className="main-additional-descr-p">
                            изготовитель<br />
                            VILHELM PERFUMES SA, 8 rue Saint-Léger, 2205 Geneva, Switzerland
                        </p>
                    </div>
                </div>

                <div className="perfume-single-description perfume-single-description2">
                        <h3 className="main-description-h3">О бренде</h3>
                        <h3 className="main-description-h3-2">VILHELM PARFUMERIET</h3>
                        <p className="main-description-p main-description-p2">
                        Vilhelm Parfumerie - это не просто парфюмерия, это настоящая библиотека ароматов. И если обычные ароматы молчат, то в Vilhelm Parfumerie они рассказывают прекрасные истории. Внутри одинаковых флаконов абсолютно разные и многогранные композиции, затрагивающие все наши чувства. Роскошные стеклянные флаконы со спиральным узором созданы легендарным дизайнером Пьером Динаном. Их украшают этикетки цвета шафрана, которые напоминают кусочек бакелита, найденный на парижском антикварном рынке.
                        </p>
                        <p className="main-description-p main-description-p2">
                        Северное сияние и голливудские огни. Север и Юг. Свежескошенная трава и чувственный уд. Бодрящая свежесть и обжигающее тепло летнего солнца. Простые удовольствия и изобилие. Каждый аромат является кульминацией свободного творческого процесса, построенного на уникальном союзе винтажа и современных взглядов на парфюмерию.

Vilhelm Parfumerie – это современная эстетика ольфакторного языка, сочетающая в себе инновационные ароматы, винтажный дизайн и художественный стиль, которые затрагивают наши эмоции и воспоминания.

                        </p>
                </div>
            </div>
            </div>
        </>
    )
}
export {Perfume6}