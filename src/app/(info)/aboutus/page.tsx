import Image from "next/image"

export default function Aboutus(){
    return(
        <div style={{ marginTop:"70px",color:'white', position: 'relative',width:"100%",height:"100vh" }}>
          <Image
            src="/images/bgaboutus.jpeg"
            alt="Background image"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
              zIndex: -1, 
            }}
          />
          <div style={{marginLeft:"500px"}}>
            <h2 style={{paddingTop:"100px"}}>We deliver the best...Thank you for choosing us!</h2>
         <h2>We're driven by a passion for customer satisfaction <br/>and a commitment to 
            delivering the best...</h2>
            <p>Welcome to Shopaholic, your go-to destination for everything you love to shop!
            We're more than just an online store - we're your everyday shopping companion. From trending gadgets 
        and stylish fashion to home essentials and unbeatable deals, we bring together quality and convenience
        in one seamless experience.</p>
        <p>At Shopaholic, we believe shopping should be simple, fun and stress-free. That's why we're committed
        to:</p>
        <ul>
            <li>Handpicking a wide range of products you'll love</li>
            <li>Offering pocket-friendly prices and exclusive discounts.</li>
            <li>Delivering fast,safe and reliable service at your doorstep</li>
        </ul>
        <p>Whether you are a trend-seeker, a smart saver, or a little bit of both- Shopaholic is made just for you.
        Start shopping smarter with Shopaholic - where style meets savings.</p>
          </div>
         
    </div>
)
    
}