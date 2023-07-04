import '../style/woman.css';
import nav_arrow from '../img/index-page/nav-arrow.png'
import PerfumesData from './PerfumesData'

const WomanPerfume = () => {
    return (
        <div className="main-content">
            <div className="nav-part">
                <h3>Главная</h3>
                <img src={nav_arrow} />
                <h3>Женская парфюмерия</h3>
            </div>
            <h1 className="header-h1">Парфюмерия</h1>
            <div className="perfumes-container">
                {PerfumesData.filter((val) => {
                    if(val.id <= 6) {
                        return val;
                    }
                    else 
                        return 0;
                }).map((prop) => (
                    <>{prop.content}</>
                ))}
            </div>
        </div>
    )
}
export {WomanPerfume}