import {useContext, useRef} from 'react';
import styles from './Search.module.scss'
import debounce from 'lodash.debounce'
import {SearchContext} from "../../App";
import {useSelector,useDispatch} from "react-redux";
import {setInputValue,clearInputValue} from "../../redux/slices/searchSlice";

function Search() {
    const inputValue = useSelector((state)=>state.search.value)

    const setValue = e => dispatch(setInputValue(e.target.value))
    const debouncedSetValue = debounce(setValue,500 )

    const dispatch= useDispatch()
    const inputRef = useRef()
    return (
        <div className={styles.root} >
            <svg className={styles.findIcon} enableBackground="new 0 0 32 32"
                 height="25px" id="Layer_1"
                 version="1.1" viewBox="0 0 32 32"
                 width="25px"
                 xmlns="http://www.w3.org/2000/svg">
                <g id="search_1_">
                    <path d="M20,0.005c-6.627,0-12,5.373-12,12c0,2.026,0.507,3.933,1.395,5.608l-8.344,8.342l0.007,0.006   C0.406,26.602,0,27.49,0,28.477c0,1.949,1.58,3.529,3.529,3.529c0.985,0,1.874-0.406,2.515-1.059l-0.002-0.002l8.341-8.34   c1.676,0.891,3.586,1.4,5.617,1.4c6.627,0,12-5.373,12-12C32,5.378,26.627,0.005,20,0.005z M4.795,29.697   c-0.322,0.334-0.768,0.543-1.266,0.543c-0.975,0-1.765-0.789-1.765-1.764c0-0.498,0.21-0.943,0.543-1.266l-0.009-0.008l8.066-8.066   c0.705,0.951,1.545,1.791,2.494,2.498L4.795,29.697z M20,22.006c-5.522,0-10-4.479-10-10c0-5.522,4.478-10,10-10   c5.521,0,10,4.478,10,10C30,17.527,25.521,22.006,20,22.006z" fill="#333333"/>
                    <path d="M20,5.005c-3.867,0-7,3.134-7,7c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5c0-3.313,2.686-6,6-6   c0.275,0,0.5-0.224,0.5-0.5S20.275,5.005,20,5.005z" fill="#333333"/>
                </g>
            </svg>
            <input
                ref = {inputRef}
                onChange={(e)=>{debouncedSetValue(e)}}
                className={styles.input} placeholder="Поиск пиццы..."/>
            {inputValue&&<svg onClick={()=>{
                dispatch(setInputValue(""))
                inputRef.current.value=""
                inputRef.current.focus()
            }}
                             className={styles.deleteIcon}
                             version="1.1"
                             viewBox="0 0 512 512"
                             width="25px"
                             xmlns="http://www.w3.org/2000/svg" >
                <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/>
            </svg>}
        </div>


    );
}

export default Search;