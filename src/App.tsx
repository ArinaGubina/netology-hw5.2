/**
 * Компонент Главной страницы Яндекса.
 * Здесь подключаются компоненты Новостей, Поиска, Рекламы и Контента
 */

import './App.css'
import News from './components/news/News.tsx'
import Advert from './components/AdvertView.tsx'
import Content from './components/content/Content.tsx'
import Search from './components/search/Search.tsx'
import Banner from './components/Banner.tsx'

const country = {
  title : 'В России',
  code : 'russia'
};

const newsActual = [
  {
    img_code : 'news-icon_1',
    title : 'Путин упростил получение мобильных номеров',
    url : '#url1'
  },
  {
    img_code : 'news-icon_1',
    title : 'В команде Зеленского раскрыли план реформ в Украине',
    url : '#url2'
  },
  {
    img_code : 'news-icon_2',
    title : '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
    url : '#url3'
  },
  {
    img_code : 'news-icon_3',
    title : 'Суд закрыл дело Демпартии США против России',
    url : '#url4'
  },
  {
    img_code : 'news-icon_4',
    title : 'В Украине призвали создать ракеты для удара по Москве',
    url : '#url5'
  },
];

const exchangeRates = [
  {
    title : 'USD MOEX',
    value : '90.85',
    delta : '+0.19'
  },
  {
    title : 'EUR MOEX',
    value : '101.83',
    delta : '+0.09'
  },
  {
    title : 'Нефть',
    value : '80.27',
    delta : '-0.09'
  }
];

const advertCurrent = {
  img : '#img-src',
  url : '#advert-url',
  title : 'Работа над ошибками',
  subtitle : 'Смотрите на Яндексе и запоминайте'
}

const filterActual = {
  default : 'фаза луны сегодня',
  items : [
    {
      title : 'Видео',
      code : 'video'
    },
    {
      title : 'Картинки',
      code : 'images'
    },
    {
      title : 'Новости',
      code : 'news'
    },
    {
      title : 'Карты',
      code : 'maps'
    },
    {
      title : 'Маркет',
      code : 'shop'
    },
    {
      title : 'Переводчик',
      code : 'translate'
    },
    {
      title : 'Эфир',
      code : 'ether'
    },
    {
      title : 'Спецоперация',
      code : 'svo'
    }
  ],
  selectedFilter : ''
}

const bannerActual = {
  url : '#banner-url',
  banner : '#banner-src'
}

const weather = {
  title : 'Погода',
  additional : {
    current : '+17',
    morning : '+17',
    day : '+20',
    img : '#img-weather'
  }
};
const popular = {
  title : 'Посещаемое',
  additional : {
    items : [
      {
        title : 'Недвижимость',
        description : 'о сталинках',
        url : '#popular-url-1'
      },
      {
        title : 'Маркет',
        description : 'люстры и светильники',
        url : '#popular-url-2'
      },
      {
        title : 'Авто.ру',
        description : 'привод 4x4 до 500 000',
        url : '#popular-url-3'
      },
    ]        
  }
};
const map = {
  title : 'Карта России',
  additional : {
    title : 'Расписания',
    link : '#map-link'
  }
};
const tv = {
  title : 'Телепрограмма',
  additional : {
    items : [
      {
        time : '02:00',
        title : 'ТНТ.Best',
        channel : 'THT International'
      },
      {
        time : '02:15',
        title : 'Джинглики',
        channel : 'Карусель INT'
      },
      {
        time : '02:25',
        title : 'Наедине со всеми',
        channel : 'Первый'
      },
    ]
  }
};
const ether = {
  title : 'Эфир',
  additional : {
    items : [
      {
        title : 'Управление как искусство',
        channel : 'Успех'
      },
      {
        title : 'Ночь. Мир в это время',
        channel : 'earthTV'
      },
      {
        title : 'Андрей Возн...',
        channel : 'Совершенно секретно'
      },
    ]
  }
};

function App() {
  const popularList = popular.additional.items.map((item, key) => {
    return(
      <a key={key} className='popular-item' href={item.url}><span className='popular-item_title'>{item.title}</span> - {item.description}</a>
    )
  });
  const tvList = tv.additional.items.map((item, key) => {
    return(
      <div key={key} className='tv-item'>{item.time} {item.title} <span className='tv-item_channel'>{item.channel}</span></div>
    )
  });
  const etherList = ether.additional.items.map((item, key) => {
    return(
      <div key={key} className='ether-item'><img src='#ether-play'/> {item.title} <span className='ether-item_channel'>{item.channel}</span></div>
    )
  });

  return (
    <>
      <section className='news_section'>
        <News items={newsActual} exchange={exchangeRates} country={country}/>
        <Advert item={advertCurrent}/>
      </section>

      <section className='search_section'>
        <Search filter={filterActual}/>
      </section>

      <section className='banner_section'>
        <Banner url={bannerActual.url} banner={bannerActual.banner}/>
      </section>

      <section className='content_section'>
        <Content title={weather.title}>
          <div className='weather-container'>
            <img src={weather.additional.img}/>
            <div className='weather-current'>{weather.additional.current}</div>
            <div className='weather-daily'>
              <div>Утром {weather.additional.morning},</div>
              <div>днём {weather.additional.day}</div>
            </div>
          </div>
        </Content>

        <Content title={map.title}>
          <a className='map-link' href={map.additional.link}>{map.additional.title}</a>
        </Content>

        <Content title={ether.title}>
          <div className='content-list'>
            {etherList}
          </div>
        </Content>

        <Content title={popular.title}>
          <div className='content-list'>
            {popularList}
          </div>
        </Content>

        <Content title={tv.title}>
          <div className='content-list content-tv'>
            {tvList}
          </div>
        </Content>
      </section>
    </>
  )

}

export default App
