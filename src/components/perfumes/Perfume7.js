import { Link } from 'react-router-dom'

import '../../style/single-perfumes.css'
import nav_arrow from '../../img/index-page/nav-arrow.png'
import available from '../../img/index-page/available.png'

import vert_img_1 from '../../img/single-perfumes/perfume7/1.jpg'
import vert_img_2 from '../../img/single-perfumes/perfume7/2.jpg'
import vert_img_3 from '../../img/single-perfumes/perfume7/3.jpg'
import vert_img_4 from '../../img/single-perfumes/perfume7/4.jpg'

import perfume_main_img from '../../img/single-perfumes/perfume7/1.jpg'

const Perfume7 = () => {

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
                <h4 className="nav-part-h4">TOM FORD black orchid parfum</h4>
            </div>


            <h1 className="header-h1">TOM FORD black orchid parfum</h1>


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
                    группа ароматов: амбровые
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    страна бренда: Соединенные Штаты
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    верхние ноты: трюфель, слива
                    </p>
                    <p className="perfume-main-text-p">
                    средние ноты: черная орхидея, иланг-иланг, ром
                    </p>
                    <p className="perfume-main-text-p">
                    базовые ноты: пачули
                    </p>
                </div>


                <div className="perfume-order-container">
                <div className="perfume-cost-container">
                    <h2 className="perfume-cost-new2">628,97 р.</h2>
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
                        Представляем Tom Ford Black Orchid Parfum — обновленную интенсивную версии выдающегося соблазнительного аромата в роскошном золотистом флаконе. Дурманящие ноты иланг-иланга звучат еще насыщеннее в сочетании с выразительными акцентами ромового абсолюта и черной сливы, подчеркивая чувственность и притягательность новой композиции. Полностью золотистый флакон, от таблички и до колпачка, символизирует роскошную природу этого загадочного и желанного нового аромата.
                        </p>
                    </div>  

                    <div className="perfume-additional-description">
                        <p className="main-additional-descr-p">
                            страна-производитель:<br />
                            Швейцария
                        </p>
                        <p className="main-additional-descr-p">
                            изготовитель<br />
                            “Estee Lauder B.V.”, Nijverheidsstraat 15, B-2260 Oevel-Westerlo, Belgium“
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export {Perfume7}