import { ProductsService } from "../../Services/products-service";
import {Metadata} from 'next';
import '../../Styles/Productdetail.css'
import Addtocartbutton from '../../Components/Addtocartbutton'
export async function generateMetadata(props:any){
    const productId=props.params.productid;
    var product;
    if(productId){
        product=await ProductsService.getProductById(productId); 
    return{
        title:product.title
    }
    }
    return{
        title:"product detail page"
    }
}
export default async function Productdetail(props:any){
    const productId=props.params.productid;
    var productDetails;
    if(productId){
        productDetails=await ProductsService.getProductById(productId);
    }
    
    return(
        <div className="detail">
            <div className="detail-img">
        <img src={productDetails.image} height={400}/>
        </div>
        <div className="detail-text">
            <h4>{productDetails.title}</h4>
            <p>⭐️⭐️⭐️⭐️⭐️{productDetails.rating.rate}</p>
            <hr/>
            <p className="price">Rs. {productDetails.price}</p>
            <div>
                <h5>Available offers</h5>
                <ul>
                    <li>10% instant discount on ICICI Credit Cards</li>
                    <li>No cost EMI available on orders above Rs. 3000</li>
                    <li>Get extra Rs. 200 off with UPI payment</li>
                    <li>Axis Bank 5% Cashback on Shopaholic Axis Credit Card</li>
                </ul>
            </div>
            <hr/>
            <h5>About this item</h5>
            <p className="description">{productDetails.description}</p>
            <Addtocartbutton product={productDetails}/>
        </div>      
        </div>
    )
}