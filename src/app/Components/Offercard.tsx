import '../Styles/Offercard.css'
function Offercard(props:any){
    return (
        <div className="card">
           <h4>{props.title}</h4>
           <div className='container'>
            <div>
           <div className='image-container'>
           <img src={props.image[0]}/>
           </div>
           <div className='amazon-card-title'>
           <p>{props.subtitle[0]}</p>
           </div>
           </div>
           <div>
           <div className='image-container'>
            <img src={props.image[1]}/>
            </div>
            <div className='amazon-card-title'>
            <p>{props.subtitle[1]}</p>
            </div>
            </div>
            <div>
           <div className='image-container'>
            <img src={props.image[2]}/>
            </div>
            <div className='amazon-card-title'>
            <p>{props.subtitle[2]}</p>
            </div>
            </div>
            <div>
           <div className='image-container'>
            <img src={props.image[3]}/>
            </div>
            <div className='amazon-card-title'>
            <p>{props.subtitle[3]}</p>
           </div>
           </div>
           </div>
           <a href="">Shop now</a>
        </div>
    )
}
export default Offercard;