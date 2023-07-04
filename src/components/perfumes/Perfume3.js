import { Link } from 'react-router-dom'

import '../../style/single-perfumes.css'
import nav_arrow from '../../img/index-page/nav-arrow.png'
import available from '../../img/index-page/available.png'

import vert_img_1 from '../../img/single-perfumes/perfume3/main-img.jpg'
import vert_img_2 from '../../img/single-perfumes/perfume3/vert-img-2.jpg'
import vert_img_3 from '../../img/single-perfumes/perfume3/vert-img-3.jpg'
import vert_img_4 from '../../img/single-perfumes/perfume3/vert-img-4.jpg'

import perfume_main_img from '../../img/single-perfumes/perfume3/main-img.jpg'

const Perfume3 = () => {

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
                <h4 className="nav-part-h4">YVES SAINT LAURENT black opium</h4>
            </div>


            <h1 className="header-h1">YVES SAINT LAURENT black opium</h1>


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
                        <strong>Black Opium</strong> - аромат в стиле глэм-рок, который вызывает настоящую зависимость!  
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                        верхние ноты: <strong>груша, жасмин, розовый перец</strong>
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                        базовые ноты: <strong>ваниль, пачули, белый кедр</strong>
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                        средние ноты: <strong>кофе, горький миндаль, лакричник</strong>
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                        страна бренда: <strong>Франция</strong>
                    </p>
                </div>


                <div className="perfume-order-container">
                <div className="perfume-cost-container">
                    <h2 className="perfume-cost-old2">588,75  р.</h2>
                    <h2 className="perfume-cost-new2">529,87 р.</h2>
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
                            Black Opium - аромат в стиле глэм-рок, который вызывает настоящую 
                            зависимость! Ароматы кофе и цветов провоцируют выработку адреналина,
                            ноты белых цветов соблазняют своей откровенностью, ваниль дарит сладкую
                            чувственность. Игра противоположностей - горького и сладкого, ароматов,
                            никогда ранее не использованных вместе в такой концентрации в парфюме
                            для женщин, дарит ощущение невесомости, граничащего с восторгом.
                            Окунитесь в аромат. Первая нота - кофе, пробуждает ваши чувства, дарит
                            силу. Далее, аромат смягчается, женственные аккорды цветов жасмина и 
                            апельсина захватывают ваше сознание. Ваниль и нотки кедра и пачули заполняют
                            ваше сознание, дарят элегантность и ощущение женской силы. Дерзкий?
                            Возможно. Вызывает зависимость? Безусловно.
                        </p>
                    </div>  

                    <div className="perfume-additional-description">
                        <p className="main-additional-descr-p">
                            страна-производитель:<br />
                            Франция
                        </p>
                        <p className="main-additional-descr-p">
                            изготовитель<br />
                            Factory EU - France Fapagau (Gauchy), 2, rue Jules Vercruysse - 02430 Gauchy
                        </p>
                    </div>
                </div>

                <div className="perfume-single-description perfume-single-description2">
                        <h3 className="main-description-h3">О бренде</h3>
                        <h3 className="main-description-h3-2">YVES SAINT LAURENT</h3>
                        <p className="main-description-p main-description-p2">
                            Yves Saint Laurent является синонимом стиля, выходцем из высокой моды, 
                            который доступен избранным. Марка представляет собой отражение всех 
                            тонкостей Парижа. Он интерпретируется в роскоши, свойственной нарядам Yves 
                            Saint Laurent, выделяющимся своей независимостью, широким культурным отблеском
                            и фантастической необузданностью.
                        </p>
                        <p className="main-description-p main-description-p2">
                            Уже почти 60 лет философия парижского дома высокой моды заключается в любви, 
                            жажде к жизни и непокорном духе. Данные ценности отражаются в каждом из нарядов 
                            абсолютно любой коллекции одежды, создаваемой Yves Saint Laurent, начиная с 
                            самого Ив Анри Дона Матье Сен-Лорана и заканчивая Эди Слиманом. Они также нашли 
                            свое место и в трендовых композициях, почитаемых во всем мире и выпускаемых под 
                            именем YSL.
                        </p>
                </div>
            </div>
            </div>
        </>
    )
}
export {Perfume3}