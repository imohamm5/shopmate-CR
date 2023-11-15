import "./ProductCard.css";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
export const ProductCard = ({ product }) => {
  const { id,name, price, image } = product;
  const { addToCart,removeFromCart, cartList } = useCart();
  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    const productInInCart = cartList.find((cartIteam) => cartIteam.id === id);
    if (productInInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList,id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? <button className="remove"  onClick={()=>removeFromCart(product)}>
          Remove
        </button> : <button  onClick={()=>addToCart(product)}>
          Add To Cart
        </button> }
       
      </div>
    </div>
  );
};
