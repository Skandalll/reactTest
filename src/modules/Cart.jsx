function Cart(){
    return(
        <div className="overlay">
            <div className="cart__window">
                <div className="cart__added-items">
                    <h1>Корзина</h1>
                    <div className="cart-item">
                        <img src="/img/sneaker2.png" alt="" className="cart-sneaker"/>
                        <div className="cart__item-text">
                            <p className="cart__sneaker-name">Мужские Кроссовки Nike Air Max 270</p>
                            <span className="cart-price">
                                12 999 руб.
                            </span>
                        </div>
                        <button className="cart__delete-button"><p>+</p>
                        </button>
                    </div>
                </div>
                <div className="cart__bottom-wrapper">
                    <div className="cart__sum-wrapper">
                        <p>Итого</p>
                        <span>21000</span>
                    </div>
                    <div className="cart__sum-wrapper">
                        <p>Налог</p>
                        <span>1000</span>
                    </div>
                    <button className="cart__commit">
                        Оформить заказ
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Cart