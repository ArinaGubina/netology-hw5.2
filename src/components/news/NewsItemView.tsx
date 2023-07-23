/**
 * Компонент элемента списка Новостей.
 * Выводит ссылку на новость.
 */

import { NewsItem } from "./NewsItem"

interface NewsItemView{
  key : number;
  item : NewsItem
}

function NewsItemView(props : NewsItemView) {
  return (
    <a className="news-item" key={props.key} href={props.item.url}>
      <img src={`#src-news-icon-${props.item.img_code}`}/>
      <div>{props.item.title}</div>
    </a>
  );
}

export default NewsItemView