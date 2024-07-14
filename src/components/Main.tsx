// Основной компонент страницы, объединяющий все компоненты-составляющие

import '../App.css';
import NavSections from './NavSections';
import CurrentDate from './CurrentDate';
import News from './News';
import ExchangeRates from './ExchangeRates';
import Search from './Search';
import Banner from './Banner';
import Weather from './Weather';
import BottomSection from './BottomSection';

// Верхняя строка разделов
const newsSections = [
    {title: 'Сейчас в СМИ', link: '#'},
    {title: 'В Германии', link: '#'},
    {title: 'Рекомендуем', link: '#'},
]

// Новости
const news = [
    {title: 'Новость № 1', link: '#'},
    {title: 'Новость № 2', link: '#'},
    {title: 'Новость № 3', link: '#'},
    {title: 'Новость № 4', link: '#'},
    {title: 'Новость № 5', link: '#'},
]

// Разделы над поисковой строкой
const themeSections = [
    {title: 'Видео', link: '#'},
    {title: 'Картинки', link: '#'},
    {title: 'Новости', link: '#'},
    {title: 'Карты', link: '#'},
    {title: 'Маркет', link: '#'},
    {title: 'Переводчик', link: '#'},
    {title: 'Эфир', link: '#'},
    {title: 'еще', link: '#'},
]

// Посещаемое
const visitedSection = [
    {title: 'Недвижимость - о сталинках'},
    {title: 'Маркет - люстры и светильники'},
    {title: 'Авто.ру - привод 4х4 до 500 000'},
]

// Телепрограмма
const tvSection = [
    {title: '02:00 ТНТ.Best'},
    {title: '02:15 Джинглики'},
    {title: '02:25 Наедине со всеми'},
]

// Эфир
const etherSection = [
    {img: 'https://clipground.com/images/google-play-store-logo-clipart-1.png', title: 'Управление как искусство'},
    {img: 'https://clipground.com/images/google-play-store-logo-clipart-1.png', title: 'Ночь. Мир в это время'},
    {img: 'https://clipground.com/images/google-play-store-logo-clipart-1.png', title: 'Мир. Ночь в это время'},
]


export default function Main() {

  return (
    <div className="container">
        <div className="top_block">
            <NavSections navSections={newsSections}/>
            <CurrentDate/>
        </div>
        <News newsProps={news}/>
        <ExchangeRates USD={63.52} USDChange={'+0.09'} EUR={70.86} EURChange={'+0.14'} oil={64.90} oilChange={'+1,63%'}/>
        <NavSections navSections={themeSections}/>
        <Search/>
        <Banner/>
        <div className="bottom_sections">
            <div className="bottom_sections_block">
                <Weather/>
                <BottomSection title={'Посещаемое'} content={visitedSection}/>
            </div>
            <div className="bottom_sections_block">
                <BottomSection title={'Карта Германии'} content={[{title: 'Расписание'}]}/>
                <BottomSection title={'Телепрограмма'} content={tvSection}/>
            </div>
            <div className="bottom_sections_block">
                <BottomSection title={'Эфир'} content={etherSection}/>
            </div>
        </div>
    </div>
  )
}
