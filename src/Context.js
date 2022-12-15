import React, { useState, useContext, useEffect } from "react";
import data from "./data";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [phone, setPhone] = useState(data);

  const removeItem = (id) => {
    const newItem = phone.filter((item) => item.id !== id);
    setPhone(newItem);
  };

  // if (action.type === 'REMOVE') {
  //   return {
  //     ...state,
  //     cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
  //   }
  // }

  // if (action.type === 'INCREASE') {
  //   let tempCart = state.cart.map((cartItem) => {
  //     if (cartItem.id === action.payload) {
  //       return { ...cartItem, amount: cartItem.amount + 1 }
  //     }
  //     return cartItem
  //   })
  //   return { ...state, cart: tempCart }
  // }

  const increaseAmount = (id) => {
    let tempCart = phone.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return setPhone(tempCart);
  };

  // if(item.amount >= 0){

  // } else {
  //   item.filter
  // }

  const decreaseAmount = (id) => {
    const tempAmount = phone
      .map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return setPhone(tempAmount);
  };

  const getTotal = () => {
    let { total, amount } = phone.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    // console.log(total, amount);
    return {amount, total}
  };
  useEffect(() => {
    getTotal();
  }, [phone]);  


  // const decreaseAmount = (id) => {
  //   const tempAmount = phone.map((item) => {
  //     if(item.id === id){
  //       if(item.amount !== 0){}
  //       return {...item, amount: item.amount - 1}
  //     }
  //     return item
  //   })
  //   return setPhone(tempAmount)
  // }

  return (
    <AppContext.Provider
      value={{
        phone,
        setPhone,
        removeItem,
        increaseAmount,
        decreaseAmount,
        getTotal,

      }}
    >
      {children}
    </AppContext.Provider>

    //custom hook
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
