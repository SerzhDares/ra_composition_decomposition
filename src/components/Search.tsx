// Компонент поисковой строки

export default function Search() {
  return (
    <form className="search_form">
        <img className="search_img" src="https://cs9.pikabu.ru/post_img/2020/09/10/4/1599717185171481225.jpg" alt="SERACH"></img>
        <input className="search_input" type="search"></input>
        <button className="search_button">Найти</button>
    </form>
  )
}
