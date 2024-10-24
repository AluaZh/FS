import "./style.css"

export default function Header () {
    return (
        <header className="header">
            <div className="header__wrapper">

            <h1 className="header__title">
                <strong>Цветы <em></em></strong><br />
                красивые
            </h1>

            <div className="header__text">
                <p></p>
            </div>

            <a href="#" className="btn">Заказать</a>

            </div>
        </header>
    )
}