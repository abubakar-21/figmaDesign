import React, { useState } from "react";
import styles from "./Navbar.module.scss";

function Navbar({ cartItems, clicked, pay, empty, remove }) {
  const [openCart, setOpenCart] = useState(false);

  const close = () => {
    setOpenCart(false);
  };

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  const handleCloseCart = () => {
    setOpenCart(false);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.infoContainer}>
        <ul>
          <li>
            <h2> Sneakers </h2>
          </li>
          <li className={styles.hovers}>
            <a href="#">Collections</a>
          </li>
          <li className={styles.hovers}>
            <a href="#">Men</a>
          </li>
          <li className={styles.hovers}>
            <a href="#">Women</a>
          </li>
          <li className={styles.hovers}>
            <a href="#">About</a>
          </li>
          <li className={styles.hovers}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.side} onClick={handleOpenCart}>
        <ul>
          <li>
            <span className={styles.counter}>{cartItems}</span>
            <p className={styles.amount}>
              <img className={styles.icon} src="./navbarImages/Shape.png" alt="Cart Icon" />
            </p>
          </li>
          <li>
            <p>
              <img className={styles.pic} src="./navbarImages/Oval.png" alt="User Icon" />
            </p>
          </li>
        </ul>
        {openCart && (
          <div className={styles.wrapper}>
            <h3 className={styles.cart}>Cart</h3>
            <div className={styles.item}>
              {clicked && (
                <div>
                  <div className={styles.all}>
                    <h4>
                      <img src="./navbarImages/Rectangle.png" alt="Product Image" />
                    </h4>
                    <div className={styles.written}>
                      <p className={styles.hed}>Fall Limited Edition Sneakers</p>
                      <p className={styles.hed}>
                        $125.00 x {cartItems} <span className={styles.count}>${pay}</span>
                      </p>
                    </div>
                    <button className={styles.remove} onClick={remove}>
                      <img src="./navbarImages/Mask.png" alt="Remove Icon" />
                    </button>
                  </div>
                  <button className={styles.checkout}>Checkout</button>
                </div>
              )}
              <p className={styles.empty}>{empty && <span>Your cart is empty</span>}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
