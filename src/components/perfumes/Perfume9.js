import { Link } from 'react-router-dom'

import '../../style/single-perfumes.css'
import nav_arrow from '../../img/index-page/nav-arrow.png'
import available from '../../img/index-page/available.png'

import vert_img_1 from '../../img/single-perfumes/perfume9/1.jpg'
import vert_img_2 from '../../img/single-perfumes/perfume9/2.jpg'
import vert_img_3 from '../../img/single-perfumes/perfume9/3.jpg'
import vert_img_4 from '../../img/single-perfumes/perfume9/4.jpg'

import perfume_main_img from '../../img/single-perfumes/perfume9/1.jpg'

const Perfume9 = () => {

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
                <h4 className="nav-part-h4">CHOPARD vetiver d'haiti au the vert</h4>
            </div>


            <h1 className="header-h1">CHOPARD vetiver d'haiti au the vert</h1>


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
                    группа ароматов: древесные
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    страна бренда: Швейцария
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    верхние ноты: зеленый чай и амбра
                    </p>
                    <p className="perfume-main-text-p">
                    средние ноты: таитянский ветивер и белый кедр
                    </p>
                    <p className="perfume-main-text-p">
                    базовые ноты: древесные ноты и мускус
                    </p>
                </div>


                <div className="perfume-order-container">
                <div className="perfume-cost-container">
                    <h2 className="perfume-cost-new2">761,33 р.</h2>
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
                        Парфюмерная вода Chopard Vtiver d hati au th vert — чувственный аромат для мужчин и женщин, на создание которого вдохновила чарующая атмосфера каннского фестиваля. Верхние ноты композиции раскрываются нежностью зеленого чая, удачно дополненного амбреттой. В сердце Vtiver d hati au th vert — теплый ветивер, оттененный кедровыми акцентами. В шлейфе парфюмерной воды переливается изящный мускусный аккорд.
                        </p>
                    </div>  

                    <div className="perfume-additional-description">
                        <p className="main-additional-descr-p">
                            страна-производитель:<br />
                            Италия
                        </p>
                        <p className="main-additional-descr-p">
                            изготовитель<br />
                            "PFCH LUXE SA" Rue de Veyrot 14, 1217 Meyrin, Geneva, Switzerland“
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export {Perfume9}