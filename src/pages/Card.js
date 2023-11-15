import { CartCard } from "../components"
import { useCart } from "../context/CartContext"
import { useTitles } from "../hooks/useTitles";
export const Card = () => {
  const {total,cartList} =useCart();
  useTitles("Cart");

  return (
   <main>
    <section className="cart">
<h1>Cart iteams : {cartList.length}/${total}</h1>
{cartList.map((product)=>(
<CartCard key={product.id} product={product}/>
))}   </section>
   </main>
  )
}
