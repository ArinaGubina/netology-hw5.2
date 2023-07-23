/**
 * Компонент Новостного блока.
 */

import { NewsItem } from "./NewsItem";
import { RatesItem } from "./RatesItem";
import { Country } from "./Country";
import NewsList from "./NewsList";
import Exchange from "./Exchange";

interface News{
  items : NewsItem[]
  exchange : RatesItem[];
  country : Country;
}

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const week = (day : number) => {
  switch(day){
    case 1 : return 'понедельник';
    case 2 : return 'вторник';
    case 3 : return 'среда';
    case 4 : return 'четверг';
    case 5 : return 'пятница';
    case 6 : return 'суббота';
    case 7 : return 'воскресенье';
    default: return '';
  }
}
const month = (num : string) => {
  switch(num){
    case '01' : return 'января';
    case '02' : return 'февраля';
    case '03' : return 'марта';
    case '04' : return 'апреля';
    case '05' : return 'мая';
    case '06' : return 'июня';
    case '07' : return 'июля';
    case '08' : return 'августа';
    case '09' : return 'сентября';
    case '10' : return 'октября';
    case '11' : return 'ноября';
    case '12' : return 'декабря';
    default: return '';
  }
}

function News(props : News) {
  return (
    <div className="news">
      <div className="news_filters-line">
        <div className="news_filter-item news_filter-item__selected">Сейчас в СМИ</div>
        <div className="news_filter-item">{props.country.title}</div>
        <div className="news_filter-item">Рекомендуем</div>
        <div className="news_date">{today.toLocaleString("default", { day: "2-digit" })} {month(today.toLocaleString("default", { month: "2-digit" }))}, {week(today.getDay())} {today.toTimeString().split(' ')[0]}</div>
      </div>
      <NewsList list={props.items}/>
      <Exchange list={props.exchange}/>
    </div>
  );
}

export default News