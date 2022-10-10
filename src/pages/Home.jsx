import Skeleton from "../components/Skeleton";
import PizzaBlock from "../components/Pizza";
import {useState} from "react";
import {useEffect} from "react";
import Sort from "../components/Sort";
import Categories from "../components/Categories";


export const Home = ()=>{
    const [sortType,setSortType]=useState(0);
    const [pizzasDB,setPizzasDB] = useState([{},{},{},{},{},{},{},{}])
    const [isLoading,setIsLoading] = useState(true)
    const [categoryId,setCategoryId] = useState(1)

    useEffect(()=>{
        fetch("https://633d74927e19b178290ecbd0.mockapi.io/pizzas").then(res=>{return res.json();}).then((arr)=>{

            setPizzasDB(prevState => {prevState=[]})
            setIsLoading(false)
            setPizzasDB(arr)
        })
    },[])
    return(
        <>
            <h2>Все пиццы</h2>
            <br/>
            <div className="content__top">
                <Categories categoryId={categoryId} setCategoryId={setCategoryId}/>
                <Sort sortType={sortType} setSortType={setSortType}/>
            </div>
            <br/>


        <div className="content__wrapper">
            <div className="content__items">
                {

                    pizzasDB.sort((item,sItem)=> {
                            if(sortType===0){
                                return item.rating - sItem.rating
                            } else if(sortType===1){
                                return item.price - sItem.price
                            } else{
                                return (sItem.name > item.name?-1:1)
                            }
                        }
                    ).map((item)=>{
                        console.log(item)
                        return(isLoading?<Skeleton/>:<PizzaBlock name = {item.name}
                                                                 key = {item.id}
                                                                 sizes = {item.sizes}
                                                                 imageUrl = {item.imageUrl}
                                                                 types = {item.types}
                                                                 price={item.price}


                        />)
                    })}
            </div>
        </div></>)
}
