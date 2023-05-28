// import React from "react";
// import "../Style/Style.css";

// const ProductPage = () => {
//   return (
//     <div className="product-page">
//       <div className="product-image">
//         <img src="/sneaker.png" alt="Product image" />
//       </div>
//       <div className="product-info">
//         <h2>Nike Air Max</h2>
//         <p className="product-description">
//           En klassisk löparsko med Air-dämpning för optimal stötdämpning. Perfekt för både träning och vardagsbruk.
//         </p>
//         <p className="product-price">1 000 kr</p>
//         <div className="quantity">
//           <button className="minus-btn">-</button>
//           <span className="product-count">1</span>
//           <button className="plus-btn">+</button>
//         </div>
//         <button className="add-to-cart-btn">Lägg i varukorgen</button>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;




import React from 'react';
import "../Style/Style.css";
import sneakerImage from './sneaker.png';
import { ShoppingCart, AccountCircle } from '@material-ui/icons';

const Product = () => {
  return (
    <div>
      <header>
        <nav>
          <h1 className="">Sneakers</h1>
          <ul>
            <li><a href="#">Collection</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="cart">
            <ShoppingCart className="cart-icon" />
            <AccountCircle className="profile-icon" />
        </div>
      </header>

      <main>
        <div className="product">
          <div className="product-image">
            <div className="main-image">
                <img src={sneakerImage} alt="Product image" />
            </div>
            {/* <div className="preview-images">
                <img src={sneakerImage} alt="Preview image 1" />
                <img src={sneakerImage} alt="Preview image 2" />
                <img src={sneakerImage} alt="Preview image 3" />
                <img src={sneakerImage} alt="Preview image 4" />
            </div> */}
          </div>

          <div className="product-info">
            <h2>Nike Air Max</h2>
            <p>En klassisk löparsko med Air-dämpning för optimal stötdämpning. Perfekt för både träning och vardagsbruk.</p>
            <p className="price">1 000 kr</p>
            <div className="cont">
              <div className="quantity">
                <button className="minus-btn">-</button>
                <span className="product-count">1</span>
                <button className="plus-btn">+</button>
              </div>
              <div className="add-to-cart">
                <ShoppingCart className="cart-icon" />
                Add to cart
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Product;
