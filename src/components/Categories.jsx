import {useState} from "react";

function Categories({categoryId,setCategoryId}){
    const setIndexClick = (index)=>{
        setCategoryId(index)
    }
    const menuTabsList = [
        {name:"Все",id:1},
        {name:"Мясные",id:2},
        {name:"Вегетарианская",id:3},
        {name:"Гриль",id:4},
        {name:"Острые",id:5},
        {name:"Закрытые",id:6}]
    return (<div className="categories">
        <ul>
            {
                menuTabsList.map((tab,i)=>{
                    return(
                        <li key={i} onClick={()=>setIndexClick(tab.id)} className={categoryId===tab.id?"active":""}>{tab.name}</li>
                    )
                })
            }
        </ul>
    </div>)
}
export default Categories