import React, { useState } from "react";
import data from "./data";

import { useGlobalContext } from "./Context";

function CartItems() {
  const { phone, setPhone, removeItem, increaseAmount, decreaseAmount, getTotal } = useGlobalContext();
  const {amount, total} = getTotal()
  return (
    <section>
      {phone.map((items) => {
        const { id, title, price, img, amount } = items;

        return (
          <div className="cart-items" key={id}>
            <img src={img} alt="" />
            <div className="description">
              <h4 className="title">{title}</h4>
              <h4 className="price">{price}</h4>
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
            <div className="arrow">
              <button onClick={() => increaseAmount(id)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                </svg>
              </button>
              <span>{amount}</span>
              <button onClick={() => decreaseAmount(id)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
            </div>
          </div>
        );
      })}

      {/* {console.log(getTotal())}; */}

      <hr size="3" />
      <div className="total">
        <span>Total</span>
        <span className="total-amount">{total}</span>
      </div>

      <button className="clear-cart" onClick={() => setPhone([])}>
        clear cart
      </button>
    </section>
  );
}

export default CartItems;
