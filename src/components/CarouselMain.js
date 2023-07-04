import {Carousel} from './Carousel'
import { Link } from 'react-router-dom'

import sale from '../img/index-page/single-perfume-sale.png'
import available from '../img/index-page/available.png'
import PerfumesShortData from './PerfumesShortData'
import { colors } from '@material-ui/core'
import { useState } from 'react'
import { useSelector } from 'react-redux';



export default function CarouselMain() {
  const [oldCost, setoldCost] = useState(true);
  const theme = useSelector(state => state.theme);

  return (
    <Carousel>
            
        {PerfumesShortData.map((par) => (
          <Link to={par.linkto} className="linktosingleperfume slider-single-perf">
            <div className="slider-single-perf slider-single-perf2">
            <img className="main-page-sale" src={sale} />
            <img className="slider-perf-img" src={par.img_src} />  
            <h1 className="slider-perf-h1">{par.name}</h1>
            <h2 className="slider-perf-h2">{par.country}</h2>
            <div className="perfume-available-container">
                <img src={available} />
                <h3>В наличии</h3>
            </div>
            <div className="perfume-cost">
            {/* style={{color: theme ? 'white' : '#787878'}} */}
                <h2  className="perfume-cost-old">{par.old_cost}</h2>
                <h2 className="perfume-cost-new">{par.new_cost}</h2>
            </div>
        </div>
        </Link>
        
        ))}
                        
                        
        {/* <div className="item item-1">Item 1</div>
        <div className="item item-2">Item 2</div>
        <div className="item item-3">Item 3</div> */}
    </Carousel>
          
    
  )
}