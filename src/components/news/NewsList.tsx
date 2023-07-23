/**
* Компонент списка актуальных новостей
*/

import { NewsItem } from "./NewsItem"
import  NewsItemView  from "./NewsItemView.tsx"

interface NewsList{
  list : NewsItem[]
}

function NewsList(props : NewsList) {
  const items = props.list.map((item, index) => {
    return(
      <NewsItemView key={index} item={item}/>
    )
  });
  return (
    <div className="news-list">{items}</div>
  );
}

export default NewsList