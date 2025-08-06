'use client'
import '../Styles/Addtocartbutton.css'
export default function addToCartButton(props:any){
    const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(props.product);
    localStorage.setItem('cart', JSON.stringify(cart));
  };
    return(
     <button className="addtocart" onClick={handleAddToCart}>Add To Cart</button>
    )
}