// import React from "react";
// import ReactDOM from "react-dom/client";
// // import './index.css';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>

// //   </React.StrictMode>
// // );

// const root = document.getElementById("root");

// const text = <p id="123">some text</p>;

// const div = (
//   <div id="123" className="qwerty">
//     {text}
//   </div>
// );

// console.log("div :>> ", div);

// ReactDOM.createRoot(root).render(div);

/**
  |============================
  | 
  |============================
*/

import ReactDOM from "react-dom/client";
const imageUrl =
  "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
const productPrice = 10.99;
const product = (
  <div>
    <img src={imageUrl} alt="Tacos With Lime" width="640" />
    <h2>Tacos With Lime</h2>
    <p>Price: {productPrice}$</p>
    <button type="button">Add to cart</button>
  </div>
);
ReactDOM.createRoot(document.getElementById("root")).render(product);
