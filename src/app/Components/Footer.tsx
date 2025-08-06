import '../Styles/Footer.css'
function Footer(){
    var links1=["About Us","Careers","Press Releases","Shopaholic Science"];
    var links2=["Facebook","Instagram","Twitter"];
    var links3=["Sell on Shopaholic","Protect and build your brand","Supply to Shopaholic","Advertise your products"];
    var links4=["Your Account","Returns Center","App Download","Help"];
    return(
        <div className="main">
            <div>
          <ul>
        <p>Get to know us</p>
            {
           links1.map((l1)=>{
            return <li key={l1}><a href="">{l1}</a></li>
           })
            }
          </ul>
          </div>
          <div>
          <ul>
            <p>Connect With Us</p>
            {
            links2.map((l2)=>{
                return <li key={l2}><a href="">{l2}</a></li>
            })
            }
          </ul>
          </div>
          <div>
            <ul>
            <p>Make Money with Us</p>
                {
                    links3.map((l3)=>{
                        return <li key={l3}><a href="">{l3}</a></li>
                    })
                }
            </ul>
          </div>
          <div>
            <ul>
                <p>Let Us Help You</p>
                {
                    links4.map((l4)=>{
                        return <li key={l4}><a href="">{l4}</a></li>
                    })
                }
            </ul>
          </div>
        </div>
    )
}
export default Footer;