function Sneacker(){
    return( <div className="sneaker">
        <div className="sneaker__favorite-wrapper">
            <img src="/img/unliked.png" alt="" className="sneaker__favorite"/>
        </div>
        <img src="/img/sneaker1.jpg" alt="" className="sneaker__img"/>
        <h2 className="sneaker__model">Мужские Кроссовки Nike Blazer Mid Suede</h2>
        <div className="sneaker__wrapper">
            <p className="sneaker__price">
                <p>Цена</p>
                <span>12 999 руб.</span>
            </p>
            <button className="sneaker__add">
                +
            </button>
        </div>
    </div>)
}
export default Sneacker