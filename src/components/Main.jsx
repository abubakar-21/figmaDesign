import React, { useState } from "react";
import styles from "./Main.module.scss";

function Main({ cartItems, increment, decrement, productCount }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={styles.main}>
      {openModal && (
        <div className={styles.wrapper}>
          <p>
            <img src="./mainImages/Left.png" className={styles.btnLeft} alt="Left" />
          </p>
          <div className={styles.imgWidth}>
            <p>
              <img
                src="./mainImages/Close.jpg"
                className={styles.btnClose}
                onClick={handleCloseModal}
                alt="Close"
              />
            </p>
            <h2>
              <img src="./mainImages/Rectangle.png" alt="Rectangle" />
            </h2>
            <ul>
              <li>
                <p>
                  <img src="./mainImages/Rectangle1.png" alt="Rectangle 1" />
                </p>
              </li>
              <li>
                <p>
                  <img src="./mainImages/Rectangle2.png" alt="Rectangle 2" />
                </p>
              </li>
              <li>
                <p>
                  <img src="./mainImages/Rectangle3.png" alt="Rectangle 3" />
                </p>
              </li>
              <li>
                <p>
                  <img src="./mainImages/Rectangle4.png" alt="Rectangle 4" />
                </p>
              </li>
            </ul>
          </div>
          <p>
            <img src="./mainImages/Right.png" className={styles.btnRight} alt="Right" />
          </p>
        </div>
      )}
      <div className={styles.imageContainer} onClick={handleOpenModal}>
        <h2>
          <img src="./mainImages/Rectangle.png" alt="Rectangle" />
        </h2>
        <ul>
          <li>
            <p>
              <img src="./mainImages/Rectangle1.png" alt="Rectangle 1" />
            </p>
          </li>
          <li>
            <p>
              <img src="./mainImages/Rectangle2.png" alt="Rectangle 2" />
            </p>
          </li>
          <li>
            <p>
              <img src="./mainImages/Rectangle3.png" alt="Rectangle 3" />
            </p>
          </li>
          <li>
            <p>
              <img src="./mainImages/Rectangle4.png" alt="Rectangle 4" />
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.textCont}>
        <div className={styles.text}>
          <h6>Sneaker company</h6>
          <h1>Fall Limited Edition Sneakers</h1>
          <h5>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they withstand everything
            the weather can offer.
          </h5>
        </div>
        <div>
          <div className={styles.newPrice}>
            <h2>$125.00</h2>
            <p>50%</p>
            <p>Available: {productCount}</p> // Display remaining product quantity
          </div>
          <div className={styles.oldPrice}>
            <h5>$250.00</h5>
          </div>
        </div>
        <div className={styles.buying}>
          <div className={styles.button}>
            <button disabled={cartItems === 0} onClick={decrement}>-</button>
            <p>{cartItems}</p>
            <button disabled={productCount === 0} onClick={increment}>+</button>
          </div>
          <div>
            <button disabled={productCount === 0} onClick={increment} className={styles.cart}>
              <img src="./mainImages/Cart.png" alt="Cart" />
              <h5>Add to Cart</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
