import React, { useState, useEffect } from "react";
import "./cart.css";

function Cart() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    setTotal(sum);
  }, [cart]);

  const updateCart = (updated) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const increaseQty = (id) => {
    updateCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    updateCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      items: cart,
      user: user.email,
      date: new Date().toLocaleString()
    };

    localStorage.setItem("orders", JSON.stringify([...orders, newOrder]));
    localStorage.removeItem("cart");

    alert("Order Placed Successfully ✅");
    setCart([]);
  };

  if (!user) {
    return <h2 className="cart-empty-msg">Please login to view cart</h2>;
  }

  return (
    <div className="cart-page">

      <h1>Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <h2>Your cart is empty 😢</h2>
        </div>
      ) : (
        <div className="cart-layout">

          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-card" key={item.id}>

                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  <div className="cart-qty">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <button
                    className="cart-remove"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>

              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ₹{total}</h2>
            <button onClick={handlePlaceOrder}>
              Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;