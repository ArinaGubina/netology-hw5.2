/**
 * Компонент объявления.
 */

import { Advert } from './Advert'

interface AdvertView{
  item : Advert;
}

function AdvertView(props : AdvertView) {
  return(
    <a className='advert' href={props.item.url}>
      <img src={props.item.img} alt="Объявление"/>
      <div className='advert-title'>{props.item.title}</div>
      <div className='advert-subtitle'>{props.item.subtitle}</div>
    </a>
  )
}

export default AdvertView