import perfume1 from '../img/single-perfumes/perfume1/1-main.jpg'
import perfume2 from '../img/single-perfumes/perfume2/1-main.jpg'
import perfume3 from '../img/single-perfumes/perfume3/1-main.jpg'
import perfume4 from '../img/single-perfumes/perfume4/1-main.jpg'
import perfume5 from '../img/single-perfumes/perfume5/1-main.jpg'
import perfume6 from '../img/single-perfumes/perfume6/1-main.jpg'
import perfume7 from '../img/single-perfumes/perfume7/1-main.jpg'
import perfume8 from '../img/single-perfumes/perfume8/1-main.jpg'
import perfume9 from '../img/single-perfumes/perfume9/1-main.jpg'

import available from '../img/index-page/available.png'
import sale from '../img/index-page/single-perfume-sale.png'

import { Link, Route } from 'react-router-dom'

const PerfumesData = [
    {
        id: 1,
        name: "VERSACE bright crystal",
        content: 
        
        <div className="single-perfume">
        <img className="sale" src={sale} />
        <div className="perfume-img-container">
            <img className="perfume-img" src={perfume1} />
        </div>
        <h2 className="perfume-name">VERSACE bright crystal</h2>
        <div className="perfume-available-container">
            <img src={available} />
            <h3>В наличии</h3>
        </div>
        <div className="perfume-paragraph-container">
            <p>
                Манящий и роскошный аромат для женщины <strong>Versace.</strong>
            </p>
            <p>
                верхние ноты: <strong>юзу и гранат</strong>
            </p>
            <p>
                средние ноты: <strong>лотос, магнолия и пион</strong>
            </p>
            <p>
                базовые ноты: <strong>мускус, махагони</strong>
            </p>
            <p>
                страна бренда: <strong>Италия</strong>
            </p>
            
        </div>
        <div className="perfume-cost perfume-cost1">
            <h2 className="perfume-cost-old">284 р.</h2>
            <h2 className="perfume-cost-new">255,60 р.</h2>
        </div>
        
        <Link className="linktosingleperfume" to="/perfume1">
            <div className="order-button-container">
                <button className="order-button order-button1">Подробнее</button>
            </div>
        </Link>
        
        
    </div>
        
    },
    {
        id: 2,
        name: "BYREDO bal d'afrique",
        content: 
        
        <div className="single-perfume">
        <img className="sale" src={sale} />
        <div className="perfume-img-container">
            <img className="perfume-img" src={perfume2} />
        </div>
        <h2 className="perfume-name">BYREDO bal d'afrique</h2>
        <div className="perfume-available-container">
            <img src={available} />
            <h3>В наличии</h3>
        </div>
        <div className="perfume-paragraph-container">
            <p>
                <strong>Bal d’Afrique</strong> – страстная смесь теплых и романтических нот ветивера. 
            </p>
            <p>
                страна бренда: <strong>Швеция</strong>
            </p>
            {/* <p>
                средние ноты: <strong>лотос, магнолия и пион</strong>
            </p> */}
            <p>
                <strong>Композиция:</strong> бергамот, лимон, нероли, африканская календула, фиалка, лепестки жасмина, черный янтарь, мускус, ветивер, марроканский кедр.
            </p>
        </div>
        <div className="perfume-cost">
            <h2 className="perfume-cost-old">879,33 р.</h2>
            <h2 className="perfume-cost-new">791,39 р.</h2>
        </div>
        <Link className="linktosingleperfume" to="/perfume2">
            <div className="order-button-container">
                <button className="order-button order-button1">Подробнее</button>
            </div>
        </Link>
        
    </div>
        
    },
    {
        id: 3,
        name: "YSLAURENT black opium",
        content: 
        
        <div className="single-perfume">
        <img className="sale" src={sale} />
        <div className="perfume-img-container">
            <img className="perfume-img" src={perfume3} />
        </div>
        <h2 className="perfume-name">YSLAURENT black opium</h2>
        <div className="perfume-available-container">
            <img src={available} />
            <h3>В наличии</h3>
        </div>
        <div className="perfume-paragraph-container">
            <p>
                <strong>Black Opium</strong> - аромат в стиле глэм-рок, который вызывает настоящую зависимость!
            </p>
            <p>
                верхние ноты: <strong>груша, жасмин, розовый перец</strong>
            </p>
            <p>
                средние ноты: <strong>лотос, магнолия и пион</strong>
            </p>
            {/* <p>
                базовые ноты: <strong>ваниль, пачули, белый кедр</strong>
            </p> */}
            <p>
                страна бренда: <strong>Франция</strong>
            </p>
        </div>
        <div className="perfume-cost">
            <h2 className="perfume-cost-old">588,75  р.</h2>
            <h2 className="perfume-cost-new">529,87 р.</h2>
        </div>
        <Link className="linktosingleperfume" to="/perfume3">
            <div className="order-button-container">
                <button className="order-button order-button1">Подробнее</button>
            </div>
        </Link>
        
    </div>
        
    },
    {
        id: 4,
        name: "ESCENTRIC MOLECULES molecule 02",
        content:

        <div className="single-perfume">
                    <img className="sale" src={sale} />
                    <div className="perfume-img-container">
                        <img className="perfume-img" src={perfume4} />
                    </div>
                    <h2 className="perfume-name">ESCENTRIC MOLECULES molecule 02</h2>
                    <div className="perfume-available-container">
                        <img src={available} />
                        <h3>В наличии</h3>
                    </div>
                    <div className="perfume-paragraph-container">
                        <p>
                            Природный афродизиак, он никого не оставляет равнодушным, все мысли и желания окружающи х только о Вас.
                        </p>
                        <p>
                            верхние ноты: <strong>амброксан</strong>
                        </p>
                        <p>
                            базовые ноты: <strong>ваниль, пачули</strong>
                        </p>
                        <p>
                            страна бренда: <strong>Германия</strong>
                        </p>
                    </div>
                    <div className="perfume-cost">
                        <h2 className="perfume-cost-old">357,55 р.</h2>
                        <h2 className="perfume-cost-new">321,79 р.</h2>
                    </div>
                    <Link className="linktosingleperfume" to="/perfume4">
                        <div className="order-button-container">
                            <button className="order-button order-button1">Подробнее</button>
                        </div>
                    </Link>
                    
                </div>
    },
    {
        id: 5,
        name: "LANCOME la vie est belle",
        content:

        <div className="single-perfume">
                    <img className="sale" src={sale} />
                    <div className="perfume-img-container">
                        <img className="perfume-img" src={perfume5} />
                    </div>
                    <h2 className="perfume-name">LANCÔME la vie est belle</h2>
                    <div className="perfume-available-container">
                        <img src={available} />
                        <h3>В наличии</h3>
                    </div>
                    <div className="perfume-paragraph-container">
                        <p>
                            Этот утонченный, изысканный букет понравится аристократичным особам
                        </p>
                        <p>
                            верхние ноты: <strong>черная смородина, груша, апельсин</strong>
                        </p>
                        <p>
                            базовые ноты: <strong>пачули, бобы тонка, ваниль, кедр</strong>
                        </p>
                        <p>
                            страна бренда: <strong>Франция</strong>
                        </p>
                    </div>
                    <div className="perfume-cost">
                        <h2 className="perfume-cost-old">534,21 р.</h2>
                        <h2 className="perfume-cost-new">480,78 р.</h2>
                    </div>
                    <Link className="linktosingleperfume" to="/perfume5">
                        <div className="order-button-container">
                            <button className="order-button order-button1">Подробнее</button>
                        </div>
                    </Link>
                    
                </div>
    },
    {
        id: 6,
        name: "VILHELM PARFUMERIE mango skin",
        content:

        <div className="single-perfume">
                    <img className="sale" src={sale} />
                    <div className="perfume-img-container">
                        <img className="perfume-img" src={perfume6} />
                    </div>
                    <h2 className="perfume-name">VILHELM PARFUMERIE mango skin</h2>
                    <div className="perfume-available-container">
                        <img src={available} />
                        <h3>В наличии</h3>
                    </div>
                    <div className="perfume-paragraph-container">
                        <p>
                            Обилие красок и ароматов, жаркое солнце и, конечно, любовь!
                        </p>
                        <p>
                            верхние ноты: <strong>апельсин</strong>
                        </p>
                        <p>
                            базовые ноты: <strong>франжипани</strong>
                        </p>
                        <p>
                            средние ноты: <strong>фиалка, лотос, магнолия</strong>
                        </p>
                        <p>
                            страна бренда: <strong>Франция</strong>
                        </p>
                    </div>
                    <div className="perfume-cost">
                        <h2 className="perfume-cost-old">477,93 р.</h2>
                        <h2 className="perfume-cost-new">430,13 р.</h2>
                    </div>
                    <Link className="linktosingleperfume" to="/perfume6">
                        <div className="order-button-container">
                            <button className="order-button order-button1">Подробнее</button>
                        </div>
                    </Link>
                    
                </div>
    },
    {
        id: 7,
        name: "TOM FORD black orchid parfum",
        content:

        <div className="single-perfume">
                    
                    <div className="perfume-img-container">
                        <img className="perfume-img perfume-img2" src={perfume7} />
                    </div>
                    <h2 className="perfume-name">TOM FORD black orchid parfum</h2>
                    <div className="perfume-available-container">
                        <img src={available} />
                        <h3>В наличии</h3>
                    </div>
                    <div className="perfume-paragraph-container">
                        <p>
                        Для кого: унисекс
                        </p>
                        <p>
                            верхние ноты: <strong>трюфель, слива</strong>
                        </p>
                        <p>
                            базовые ноты: <strong>пачули</strong>
                        </p>
                        <p>
                            средние ноты: <strong>черная орхидея, иланг-иланг, ром</strong>
                        </p>
                        <p>
                            страна бренда: <strong>Соединенные Штаты</strong>
                        </p>
                    </div>
                    <div className="perfume-cost">
                        <h2 className="perfume-cost-new">628,97 р.</h2>
                    </div>
                    <Link className="linktosingleperfume" to="/perfume7">
                        <div className="order-button-container">
                            <button className="order-button order-button1">Подробнее</button>
                        </div>
                    </Link>
                    
                </div>
    },
    {
        id: 8,
        name: "TOM FORD black orchid parfum",
        content:

        <div className="single-perfume">
                    
                    <div className="perfume-img-container">
                        <img className="perfume-img" src={perfume8} />
                    </div>
                    <h2 className="perfume-name">MEMO PARIS marfa</h2>
                    <div className="perfume-available-container">
                        <img src={available} />
                        <h3>В наличии</h3>
                    </div>
                    <div className="perfume-paragraph-container">
                        <p>
                        Для кого: унисекс
                        </p>
                        <p>
                            верхние ноты: <strong>апельсиновый цвет и мандарин</strong>
                        </p>
                        <p>
                            базовые ноты: <strong>сандал, белый кедр, мускус и ваниль</strong>
                        </p>
                        <p>
                            средние ноты: <strong>тубероза, агава и иланг-иланг</strong>
                        </p>
                        <p>
                            страна бренда: <strong>Франция</strong>
                        </p>
                    </div>
                    <div className="perfume-cost">
                        <h2 className="perfume-cost-new">886,65 р.</h2>
                    </div>
                    <Link className="linktosingleperfume" to="/perfume8">
                        <div className="order-button-container">
                            <button className="order-button order-button1">Подробнее</button>
                        </div>
                    </Link>
                    
                </div>
    },
    {
        id: 9,
        name: "TOM FORD black orchid parfum",
        content:

        <div className="single-perfume">
                    
                    <div className="perfume-img-container">
                        <img className="perfume-img" src={perfume9} />
                    </div>
                    <h2 className="perfume-name">CHOPARD vetiver d'haiti</h2>
                    <div className="perfume-available-container">
                        <img src={available} />
                        <h3>В наличии</h3>
                    </div>
                    <div className="perfume-paragraph-container">
                        <p>
                        Для кого: унисекс
                        </p>
                        <p>
                            верхние ноты: <strong>зеленый чай и амбра</strong>
                        </p>
                        <p>
                            базовые ноты: <strong>древесные ноты и мускус</strong>
                        </p>
                        <p>
                            средние ноты: <strong>таитянский ветивер и белый кедр</strong>
                        </p>
                        <p>
                            страна бренда: <strong>Швейцария</strong>
                        </p>
                    </div>
                    <div className="perfume-cost">
                        <h2 className="perfume-cost-new">761,33 р.</h2>
                    </div>
                    <Link className="linktosingleperfume" to="/perfume9">
                        <div className="order-button-container">
                            <button className="order-button order-button1">Подробнее</button>
                        </div>
                    </Link>
                    
                </div>
    }
]
export default PerfumesData;