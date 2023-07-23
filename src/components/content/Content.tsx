/**
 * Компонент Контента.
 * Выводит заголовок и содержание блока.
 */

interface Content{
  title : string;
  children : string | JSX.Element | JSX.Element[]
}

function Content(props : Content) {
  return(
    <div className="content-item">
      <div className="content-title">{props.title}</div>
      {props.children}
    </div>
  )
}

export default Content