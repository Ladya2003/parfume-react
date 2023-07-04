import { Link } from 'react-router-dom'

import '../../style/single-perfumes.css'
import nav_arrow from '../../img/index-page/nav-arrow.png'
import available from '../../img/index-page/available.png'

import vert_img_1 from '../../img/single-perfumes/perfume1/1.jpg'
import vert_img_2 from '../../img/single-perfumes/perfume1/2.jpg'
import vert_img_3 from '../../img/single-perfumes/perfume1/3.jpg'
import vert_img_4 from '../../img/single-perfumes/perfume1/4.jpg'

import perfume_main_img from '../../img/single-perfumes/perfume1/1.jpg'

const Perfume1 = () => {

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
                <h4 className="nav-part-h44">VERSACE bright crystal</h4>
            </div>


            <h1 className="header-h1">VERSACE bright crystal</h1>


            <div className="perfume-main-content">

                <div className="vertical-images-container">
                    <button className="vertical-image-button" onClick={clickChacnge}><img className="vertical-image vertical-image2" src={vert_img_1}/></button>
                    <button className="vertical-image-button" onClick={clickChacnge}><img className="vertical-image vertical-image2" src={vert_img_2}/></button>
                    <button className="vertical-image-button" onClick={clickChacnge}><img className="vertical-image vertical-image2" src={vert_img_3}/></button>
                    <button className="vertical-image-button" onClick={clickChacnge}><img className="vertical-image vertical-image2" src={vert_img_4}/></button>
                </div>
                <div id="perfume-main-image" className="perfume-main-image-container perfume-main-image-container2">
                    <img className="perfume-main-image" src={perfume_main_img} />
                </div>


                <div className="perfume-main-text">
                    <p className="perfume-main-text-p">
                    тип продукта: туалетная вода

                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    для кого: женский

                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    группа ароматов: цветочные

                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    страна бренда: Италия

                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    верхние ноты: юзу и гранат
                    </p>
                    <p className="perfume-main-text-p">
                    средние ноты: лотос, магнолия и пион
                    </p>
                    <p className="perfume-main-text-p">
                    базовые ноты: мускус, махагони и амбра

                    </p>
                </div>


                <div className="perfume-order-container">
                <div className="perfume-cost-container">
                    <h2 className="perfume-cost-old2">284  р.</h2>
                    <h2 className="perfume-cost-new2">255,60 р.</h2>
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
                            Всепоглощающая страсть, кристальная прозрачность, яркое великолепие. Манящий и роскошный аромат для женщины Versace, сильной и уверенной, и в то же время очень женственной и чувственной, и всегда эффектной. Для женщины, которой понравится окутывающая дымка аромата с деликатными нотками яркого и сочного граната, ледяной свежести и сверкающего юзу. В сердце аромата непревзойденный по чистоте и роскоши звучания аккорд магнолии, пиона и цветов лотоса, а в шлейфе — утонченная чувственность и притягательная сила амбры, красного дерева и мускуса. Аромат заключён в элегантный флакон и увенчан великолепной крышкой, ограненной как бриллиант
                        </p>
                    </div>  

                    <div className="perfume-additional-description">
                        <p className="main-additional-descr-p">
                            страна-производитель:<br />
                            Италия
                        </p>
                        <p className="main-additional-descr-p">
                            изготовитель<br />
                            Factory EU - France Fapagau (Gauchy), 2, rue Jules Vercruysse - 02430 Gauchy
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export {Perfume1}