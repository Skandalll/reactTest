import "./scss/app.scss";

import Header from "./components/Header";
import {Route,Routes} from 'react-router-dom';
import {createContext, useContext, useEffect, useState} from "react";
import Home from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import Cart from "./pages/Cart";

export const SearchContext=createContext("")

function App() {

  const [inputValue,setInputValue]=useState("")

  return (
  <div className="wrapper">
    <SearchContext.Provider value={{inputValue,setInputValue}}>
      <Header/>
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </SearchContext.Provider>
  </div>
  );
}

export default App;
