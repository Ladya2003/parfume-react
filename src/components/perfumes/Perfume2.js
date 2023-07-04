import { Link } from 'react-router-dom'

import '../../style/single-perfumes.css'
import nav_arrow from '../../img/index-page/nav-arrow.png'
import available from '../../img/index-page/available.png'

import vert_img_1 from '../../img/single-perfumes/perfume2/1.jpg'
import vert_img_2 from '../../img/single-perfumes/perfume2/2.jpg'
import vert_img_3 from '../../img/single-perfumes/perfume2/3.jpg'
import vert_img_4 from '../../img/single-perfumes/perfume2/4.jpg'

import perfume_main_img from '../../img/single-perfumes/perfume2/1.jpg'

const Perfume2 = () => {

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
                <h4 className="nav-part-h4">BYREDO bal d'afrique</h4>
            </div>


            <h1 className="header-h1">BYREDO bal d'afrique</h1>


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
                    страна бренда: Швеция

                    </p>
                </div>


                <div className="perfume-order-container">
                <div className="perfume-cost-container">
                    <h2 className="perfume-cost-old2">879,33  р.</h2>
                    <h2 className="perfume-cost-new2">791,39 р.</h2>
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
                            Ревущие двадцатые годы… В знаменитом Мулен Руж жарче, чем в самой Африке, ведь на сцене Жозефина Бейкер! Черная жемчужина, танцующая богиня, ставшая символом эпохи! Воплощение самых смелых мужских фантазий. Bal d’Afrique – страстная смесь теплых и романтических нот ветивера, навеянная образом Парижа конца 20-х годов, африканской культурой, искусством, музыкой и танцами. Парижский авангард и африканская культура создают странное, полное энергии и страстей сочетание. Композиция: бергамот, лимон, нероли, африканская календула, фиалка, лепестки жасмина, цикламен, черный янтарь, мускус, ветивер, марроканский кедр.
                        </p>
                    </div>  

                    <div className="perfume-additional-description">
                        <p className="main-additional-descr-p">
                            страна-производитель:<br />
                            Франция
                        </p>
                        <p className="main-additional-descr-p">
                            изготовитель<br />
                            BYREDO France SAS, 5 Avenue de l'Opera 75001 Paris, France
                        </p>
                    </div>
                </div>

                <div className="perfume-single-description perfume-single-description2">
                        <h3 className="main-description-h3">О бренде</h3>
                        <h3 className="main-description-h3-2">BYREDO</h3>
                        <p className="main-description-p main-description-p2">
                            Бренд Byredo основан в 2006 году стокгольмским парфюмером Беном Горхэмом в сотрудничестве с авторами уникальных композиций Джакобетти, Эпинеттом, Альмайраком. В ароматах этой продукции удивительным образом сочетаются экстравагантность, классика, сюрреализм. Они логически завершенные. В них отражены традиции и просматриваются новые источники вдохновения.
                        </p>
                        <p className="main-description-p main-description-p2">
                            Byredo — это средства для ухода, туалетная вода, аксессуары. Они производятся в Швеции, поставляются в 15 стран. Скандинавы щепетильны в вопросах качества, поэтому процесс изготовления строго контролируется.
                        </p>
                        <p className="main-description-p main-description-p2">
                            Основатель бренда родился в семье канадского художника и актрисы из Индии. Его мироощущение — следствие влияния разных культур. Горхэм обожает современное искусство и находится в непрерывном поиске новых способов самовыражения. В своих композициях он пытается отразить многообразие действительности, именно поэтому он экспериментирует с материалами, ароматами.
                        </p>
                </div>
            </div>
            </div>
        </>
    )
}
export {Perfume2}