// Компонент погоды

export default function Weather() {
  return (
    <div className="weather">
        <a href="#" className="weather_title titles">Погода</a>
        <div className="weather_info">
            <img src="https://ugrakor.ru/images/sun_day_rays_sun.png" alt="WEATHER" className="weather_img" />
            <span className="weather_now">+30°</span>
            <div className="weather_day">
                <p className="weather_today">Утром +23</p>
                <p className="weather_today">Вечером +21</p>
            </div>
        </div>
    </div>
  )
}
