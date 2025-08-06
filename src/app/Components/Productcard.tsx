'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../Styles/Productcard.css'
function Productcard(props:any){
    const router=useRouter();
    function star(){
    var st="";
    for(var i=0;i<Math.round(props.product.rating.rate);i++){
        st=st+'⭐️';
    }
    return st;
}

    return(
        
        <div className="prodcard">
            <img src={props.product.image} width="200px" className='image'/>
            <Link href={"/productlist/"+props.product.id} ><h4 className='title'>{props.product.title}</h4></Link>
            <p className='description'>{props.product.description.slice(0,80)+'...'}</p>   
            <p className='price'>Rs. {props.product.price}</p>    
            <span>{star()}{props.product.rating.rate}</span>   
            <div><button className='cart' onClick={()=>{
                router.push(`/productlist/${props.product.id}`);
            }}>More Details</button> </div> 
        </div>
    )
}
export default Productcard;