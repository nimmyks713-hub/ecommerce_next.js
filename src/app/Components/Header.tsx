import '../Styles/Header.css'
import Link from 'next/link'
function Header(){
    
    return (
        <div>
          <nav className="navbar bg-dark navbar-expand-lg fixed-top" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand brand" href="#"><img src="/images/Logo.png" width="50" height="40"/>Shopaholic</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link href={"/"} className="nav-link" style={{color:"white"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href={"/productlist"} style={{color:"white"}}>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href={"/aboutus"} style={{color:"white"}}>About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href={"/contactus"} style={{color:"white"}}>Contact Us</Link>
        </li>
      <li className="nav-item">
          <Link className="nav-link" href={"/cart"} style={{color:"white"}}><img src="/images/cart.png" width="50" height="40"/>Cart</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Header;