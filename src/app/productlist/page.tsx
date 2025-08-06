import Productcard from '../Components/Productcard'
import { ProductsService } from '../Services/products-service';

export default async function Productspage(){
    var products=await ProductsService.getProducts();
    return(
        <div>
         <h3>Product List</h3>
         <div style={{marginTop:"70px",display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginBottom:"20px"}}>
            {
                products.map((p:any)=>{
                    return <Productcard key={p.id} product={p}/>
                })
            }
         </div>

        </div>
    )
}