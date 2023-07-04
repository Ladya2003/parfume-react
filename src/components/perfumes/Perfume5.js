import { Link } from 'react-router-dom'

import '../../style/single-perfumes.css'
import nav_arrow from '../../img/index-page/nav-arrow.png'
import available from '../../img/index-page/available.png'

import vert_img_1 from '../../img/single-perfumes/perfume5/1.jpg'
import vert_img_2 from '../../img/single-perfumes/perfume5/2.jpg'
import vert_img_3 from '../../img/single-perfumes/perfume5/3.jpg'
import vert_img_4 from '../../img/single-perfumes/perfume5/4.jpg'

import perfume_main_img from '../../img/single-perfumes/perfume5/1.jpg'

const Perfume5 = () => {

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
                <h4 className="nav-part-h4">LANCÔME la vie est belle</h4>
            </div>


            <h1 className="header-h1">LANCÔME la vie est belle</h1>


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
                    для кого: женский
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    группа ароматов: цветочные
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    страна бренда: Франция
                    </p>
                    <hr className="perfume-main-text-hr"/>
                    <p className="perfume-main-text-p">
                    верхние ноты: черная смородина, груша
                    </p>
                    <p className="perfume-main-text-p">
                    средние ноты: ирис, жасмин, апельсиновый цвет
                    </p>
                    <p className="perfume-main-text-p">
                    базовые ноты: пачули, бобы тонка, ваниль
                    </p>
                </div>


                <div className="perfume-order-container">
                <div className="perfume-cost-container">
                    <h2 className="perfume-cost-old2">534,21  р.</h2>
                    <h2 className="perfume-cost-new2">480,78 р.</h2>
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
                            Парфюмерная вода La Vie Est Belle представляет единственный и уникальный в своем роде аромат ольфактивной группы «гурманский ирис». Виртуозы парфюмерного искусства сотворили этот шедевр, взяв в основу драгоценные компоненты для создания концентрата роскоши и великолепия. Аромат получил свою совершенную гармонию благодаря использованию исключительно натуральных компонентов. Этот утонченный, изысканный букет понравится аристократичным особам, ценящим искусство и понимающим сложную, многогранную эстетику парфюмерного мастерства. Комбинация элегантного Ириса Паллида, проникновенной и чувственной Пачули, романтичного Жасмина и сладкого цветка Апельсина украшена соблазнительными ароматами Ванили, сладкой Карамели, экзотических Бобов Тонка, миндального Пралине и фруктово-пряной Смородины. Это головокружительное благоухание способно увлечь в неведанные дали фантазии и арома-наслаждения. Жизнеутверждающий, радостный аромат парфюмерной воды La Vie Est Belle словно декларация счастья. Да, жизнь прекрасна и в этом нет ничего удивительного!
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
                        <h3 className="main-description-h3-2">LANCÔME</h3>
                        <p className="main-description-p main-description-p2">
                        Бренд Lancôme был основан в 1935 году Арманом Петижаном, галантным аристократом и тонким ценителем женской красоты. Он воплощает в себе свободный французский стиль, утонченную женственность и безупречный вкус. Петижан всегда верил, что истинная женская красота кроется в ее искренних эмоциях.
                        </p>
                        <p className="main-description-p main-description-p2">
                        Продукция Lancôme пользуется популярностью более, чем в 135 странах мира. В портфеле бренда множество средств ухода и макияжа, а также шедевров парфюмерии. Формулы бренда — это передовые научные разработки, ароматы дарят наслаждение, а текстуры — комфорт.
                        Lancôme объединяет 16 исследовательских центров, где трудятся более 3000 дерматологов, биофизиков, биохимиков и специалистов других профилей и сотрудничает со знаменитыми университетами. Среди уникальных разработок особо следует отметить активатор молодости Génifique Advanced, получивший более 170 международных наград, и линию роскошного ухода Absolue, в формуле которой запатентованные молекулы Pro-Xylane™, а также ассамбляж из трех сортов роз, выведенных специально для Lancôme.

                        </p>
                </div>
            </div>
            </div>
        </>
    )
}
export {Perfume5}