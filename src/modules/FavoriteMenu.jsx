import axios from "axios";
import {useEffect} from "react";

function FavoriteMenu({favoriteList,setFavoriteList}){
    useEffect(()=>{
        axios.get("https://632f2a8db7314fc02f513c8d.mockapi.io/favorites").then((res)=>{
            setFavoriteList(res.data)
        })
    },[])
    return(
        <div className="favorite">
            {
                favoriteList.map((item)=>{
                    return(
                        <div className="sneaker">
                            <img src={item.imgUrl} alt="" className="sneaker__img"/>
                            <h2 className="sneaker__model">{item.name}</h2>
                            <div className="sneaker__wrapper">
                                <p className="sneaker__price">
                                    <span>Цена</span> <br/>
                                    <span>{item.price} руб.</span>
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default FavoriteMenu