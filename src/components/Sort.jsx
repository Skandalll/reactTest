import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSortType} from "../redux/slices/filterSlice";

function  Sort(){
    const sortType = useSelector((state)=>state.filter.sortType)
    const dispatch = useDispatch()
    const [sortVisibility,setSortVisibility]= useState(false)
    const sortRef= useRef()
    const sortList=["Популярности","Цене","Алфавиту"]
    useEffect(()=>{
        const handleClick = (e)=>{
            if(!e.path.includes(sortRef.current)){
                setSortVisibility(false)
            }
        }
        document.body.addEventListener("click",handleClick)
        return ()=>{document.body.removeEventListener("click",handleClick)}

    },[])
    return (<div className="sort">
        <div ref={sortRef} onClick={()=>setSortVisibility((prev)=>!prev)} className="sort__label unselectable" >
            <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                />
            </svg>
            <b >Сортировка по:</b>
            <span>популярности</span>
        </div>
        {
            sortVisibility && (<div className="sort__popup unselectable">
                <ul>
                    {
                        sortList.map((item,i)=>{
                            return (
                                <li key={i} onClick={()=>dispatch(setSortType(i))} className={i===sortType?"active":""}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>)
        }
    </div>)
}
export default Sort