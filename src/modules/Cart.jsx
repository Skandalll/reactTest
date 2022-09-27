
function Cart({onClickOverlay,cardItems=[],onRemove}){
    return(
        <div className="overlay" >
            <div className="cart__window">
                <div className="cart__added-items">
                    <h1>Корзина</h1>
                    {cardItems.map((obj)=>{
                        return (<div className="cart-item">
                            <img src={obj.imgUrl} alt="" className="cart-sneaker"/>
                            <div className="cart__item-text">
                                <p className="cart__sneaker-name">{obj.name}</p>
                                <span className="cart-price">
                                {obj.price}
                            </span>
                            </div>
                            <button onClick={()=>{onRemove(obj.id)}} className="cart__delete-button"><p>+</p>
                            </button>

                        </div>)
                    })}

                    <button className="cart__close" onClick={onClickOverlay}><p>+</p></button>

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