/**
 * Компонент Поисковой строки.
 */

import { Filter } from "./Filter";

interface Search{
  filter : Filter;
}

function Search(props : Search) {
  const filters = props.filter.items.map((item, key) => {
    return(
      <a href="#" key={key}>{item.title}</a>
    )
  });
  return (
    <div className="search">
      <div className="filters">{filters}</div>
      <div className="search-row">
        <img className="logo-yandex" src="#" alt="Яндекс"/>
        <div className="search-row_container">
          <input className="search-inp"/>
          <button className="search-btn">Найти</button>
        </div>
      </div>
      <div className="search-example"><span className="search-example_text">Найдётся всё. Например, </span>{props.filter.default}</div>
    </div>
  );
}

export default Search