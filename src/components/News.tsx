// Компонент новостной ссылки

import { Props } from './PropsInterface';

interface navSectionsProps {
    newsProps: Props[]
}

export default function News({newsProps}: navSectionsProps) {
  return (
    <>
    {newsProps.map(item => (
        <div className="news_item" key={item.title}>
            <img className="icon" src={'https://sun6-22.userapi.com/s/v1/ig2/MZI_LcY7ZOcCGea5s6idGkK8PBOJeGj_O2DhxSWD0_ZHStc0Y6xBWiS78pmo3a5nconrd6YFuXjtlriKJ0RH6v2y.jpg?size=1009x1009&quality=96&crop=35,35,1009,1009&ava=1'} 
            alt="icon"></img>
            <a className="news_link" href={item.link}>{item.title}</a>
        </div>
    ))}
    </>
  )
}
