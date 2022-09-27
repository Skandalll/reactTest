import Sneacker from "./modules/Sneacker";
import Find from "./modules/Find";
import Cart from "./modules/Cart";
import {useEffect} from "react";
import {useState} from "react";
import Header from "./modules/Header";
import axios from "axios";
import FavoriteMenu from "./modules/FavoriteMenu";


function App() {
    const [favoriteList,setFavoriteList] = useState([])
    const [isFavoriteMenuOpened,setFavoriteMenu]=useState(false);
    const [items,setItems] = useState([]);
    let [cartItems,setCartItems] = useState([]);
    const [cartOpened,setCartOpened]= useState(false);
    const [input,setInput] = useState("")
    const onChangeSearchInput=(event)=>{
        setInput(event.target.value)
    }
    const clearInput=()=>{
        setInput("")
    }
    const onAddToCart=(obj)=>{
        console.log(cartItems)
        axios.post('https://632f2a8db7314fc02f513c8d.mockapi.io/cart',obj);
        setCartItems((prev)=>[...prev,obj])
    }
    const onRemoveItem=(id)=>{
        console.log(id)
        axios.delete(`https://632f2a8db7314fc02f513c8d.mockapi.io/cart/${id}`);
        setCartItems((prev)=>{
            console.log(prev)
            console.log(prev.filter((item)=>item.id != id))
            return(prev.filter((item)=>item.id != id))
            })
    }
    useEffect(()=>{
        axios.get('https://632f2a8db7314fc02f513c8d.mockapi.io/sneakers').then(res =>{
            setItems(res.data)
            axios.get('https://632f2a8db7314fc02f513c8d.mockapi.io/cart').then(res =>{
                setCartItems(res.data)
            });
        });
    },[])
  return (
      <div className="wrapper">
          {cartOpened?<Cart
            cardItems={cartItems}
            onRemove={onRemoveItem}
            onClickOverlay={()=>{setCartOpened(false)}}/>:null
          }

        <Header
            isFavoriteMenuOpened={isFavoriteMenuOpened}
            onClickFavoriteMenu={setFavoriteMenu}
            onClickCart={()=>{setCartOpened(true)
        }}/>
          <Find setFavoriteList={setFavoriteList} isFavoriteMenuOpened={isFavoriteMenuOpened} inputValue={input} input={onChangeSearchInput} clearInput={clearInput}/>

        {isFavoriteMenuOpened?<FavoriteMenu favoriteList={favoriteList} setFavoriteList={setFavoriteList}/>:
            <div className="content">
            {
                items.filter((i)=>{
                    return (i.name.toLowerCase().includes(input.toLowerCase())?i:null)
                }).map((val,index)=>(
                    <Sneacker name={val.name}
                              price={val.price}
                              imgUrl={val.imgUrl}
                              onPlus={onAddToCart}
                              key={index}
                              onAddToCart={onAddToCart}/>))
            }
            </div>}

      </div>
  );
}

export default App;
