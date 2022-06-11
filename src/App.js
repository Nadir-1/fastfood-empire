import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/HomePage/Home';
import Menu from './components/MenuPage/Menu';
import Contact from './components/ContactPage/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Success from './components/SuccessPage/Success';
import Footer from './components/Footer/Footer';
import MyList from './components/MyListPage/MyList';

function App() {
  const [shoppingL, setShoppingL] = useState([]);
  const [itemNBR, setItemNBR] = useState(0);
  const exist = (arr, it) => {
    if (arr.length === 0) return false;
    else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === it.id) {
          return true;
        };
      }
    }
  }
  const cartHandleNBR = (shL) => {
    let sum = 0;
    for (let i = 0; i < shL.length; i++) sum += shL[i].nbr;
    setItemNBR(sum);
  }
  const add2Cart = (id, photo, name, cat, price, nbr = 1) => {
    const shL = [...shoppingL];
    const newItem = { id, photo, name, cat, price, nbr };
    !exist(shL, newItem) && shL.push(newItem);
    cartHandleNBR(shL);
    setShoppingL(shL);

  }
  const updateHandler = (id, type) => {
    const shL = [...shoppingL];
    for (let i = 0; i < shL.length; i++) {
      if (shL[i].id === id) {
        if (type === 'inc' && shL[i].nbr < 25) {
          shL[i].nbr++;
        }
        if (type === 'dec' && shL[i].nbr > 1) shL[i].nbr--;
        break;
      }
    }
    cartHandleNBR(shL);
    setShoppingL(shL);
  }
  const rmFromCart = (id) => {
    const shL = [...shoppingL];
    const res = shL.filter((el) => el.id !== id);
    cartHandleNBR(res);
    setShoppingL(res);
  }
  return (
    <div>
      <NavigationBar number={itemNBR} />
      <Routes>
        <Route path="/" element={<Home add={add2Cart} />} />
        <Route path="/Menu" element={<Menu add={add2Cart} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/MyList" element={<MyList list={shoppingL} updateNBR={updateHandler} remove={rmFromCart} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
