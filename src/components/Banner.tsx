/**
 * Компонент Баннера.
 */

interface Banner{
  url : string;
  banner : string;
}

function Banner(props : Banner) {
  return(
    <a className='banner' href={props.url}>
      <img src={props.banner} alt='Рекламный баннер' />
    </a>
  )
}

export default Banner