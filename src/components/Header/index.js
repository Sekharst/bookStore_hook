import { Link } from "react-router-dom";
import './index.css'

const Header = () => {


  
  return (
    // <nav className="nav-header">
    //   <div className="nav-content">
    //     <div className="nav-bar-mobile-logo-container">
    //       <Link to="/">
    //         <img
    //           className="website-logo"
    //           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
    //           alt="website logo"
    //         />
    //       </Link>

    //       <button
    //         type="button"
    //         className="nav-mobile-btn"
            
    //       >
    //         <img
    //           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
    //           alt="nav logout"
    //           className="nav-bar-img"
    //         />
    //       </button>
    //     </div>

    //     <div className="nav-bar-large-container">
    //       <Link to="/">
    //         <img
    //           className="website-logo"
    //           src="Brand-name.jpg"
    //           alt="website logo"
    //         />
    //       </Link>
    //       <ul className="nav-menu">
    //         <li className="nav-menu-item">
    //           <Link to="/" className="nav-link">
    //             Home
    //           </Link>
    //         </li>

    //         <li className="nav-menu-item">
    //           <Link to="/products" className="nav-link">
    //             Products
    //           </Link>
    //         </li>

    //         <li className="nav-menu-item">
    //           <Link to="/about" className="nav-link">
    //             About Us
    //           </Link>
    //         </li>
    //       </ul>
          
    //     </div>
    //   </div>
    //   <div className="nav-menu-mobile">
    //     <ul className="nav-menu-list-mobile">
    //       <li className="nav-menu-item-mobile">
    //         <Link to="/" className="nav-link">
    //           <img
    //             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
    //             alt="nav home"
    //             className="nav-bar-img"
    //           />
    //         </Link>
    //       </li>

    //       <li className="nav-menu-item-mobile">
    //         <Link to="/product" className="nav-link">
    //           <img
    //             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
    //             alt="nav products"
    //             className="nav-bar-img"
    //           />
    //         </Link>
    //       </li>
    //       <li className="nav-menu-item-mobile">
    //         <Link to="/about" className="nav-link">
    //           <img
    //             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
    //             alt="nav cart"
    //             className="nav-bar-img"
    //           />
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <div className="header-container">
    <div className="header-website-logo1">
    <Link to="/">
  
        <img
          className="header-website-logo"
          src="https://res.cloudinary.com/dkxxgpzd8/image/upload/v1647190320/Group_7731_v0p1nt_gjeokw.png"
          alt="website logo"
        />
  
    </Link>
  </div>
  <ul className="tabs-container">
            <Link className="link" to="/">
              <li>
                Home
              </li>
            </Link>
            <Link className="link" to="/shelf">
              <li>
                Bookshelves
              </li>
            </Link>
            <Link className="link" to="/favorite">
              <li>
                MyFavorites
              </li>
            </Link>
            
          </ul>
        </div>
  )
}

export default Header