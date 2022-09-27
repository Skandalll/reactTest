import {useState} from "react";
import axios from "axios";
function Sneacker({imgUrl,name,price,onAddToCart}){
    const [isFavorite,setIsFavorite]=useState(false)
    const [buttonValue,setButton] = useState("+")
    const onClickFavorite =()=>{
            if(isFavorite==true){
                setIsFavorite(false)

            }else{
                axios.post("https://632f2a8db7314fc02f513c8d.mockapi.io/favorites",{imgUrl, name, price})
                setIsFavorite(true)
            }
    }
    function added()
        {
            if(buttonValue==="+"){
                onAddToCart({imgUrl, name, price})
                setButton(<img src="/img/added.svg"></img>)


            }else{
                setButton("+")

            }
        }
    return(<div className="sneaker">
        <div className="sneaker__favorite-wrapper" onClick={onClickFavorite}>
            {isFavorite?<img src="/img/liked.png" alt="" className="sneaker__favorite"/>:<img src="/img/unliked.png" alt="" className="sneaker__favorite"/>}
        </div>
        <img src={imgUrl} alt="" className="sneaker__img"/>
        <h2 className="sneaker__model">{name}</h2>
        <div className="sneaker__wrapper">
            <p className="sneaker__price">
                <span>Цена</span> <br/>
                <span>{price} руб.</span>
            </p>
            <button className="sneaker__add" onClick={added}>
                {buttonValue}
            </button>
        </div>
    </div>)
}
export default Sneacker