import ProtoTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import useWindowPosition from "../../Hooks/useWindowPosition";
import axios from "axios";
import {useSelector} from 'react-redux'

function Header({ className, logo, joinBtn, search }) {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [activeMobileSubMenu, setActiveSubMobileMenu] = useState(false);
  const windowPosition = useWindowPosition();
  const auth = useSelector(state => state.auth)
  const {isLogged} = auth
  const logoutHandler = async () => {
    try {
        await axios.get('/api/user/logout')
        localStorage.removeItem('firstLogin')
        window.location.reload(false);
        window.location.href = "/";
    } catch (err) {
        //window.location.href = "/";
        console.log(err)
    }
    //window.location.reload()
  }
  return (
    <header
      className={`${className ? className : "header-01"} sticky ${
        windowPosition > 0 && "fix-header animated fadeInDown"
      } `}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              {/* logo Start */}
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="" />
                <img
                  className="sticky-logo"
                  src="assets/images/logo4.png"
                  alt=""
                />
              </Link>
              {/* logo End */}

              {/* Moblie Btn Start  */}
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setActiveMobileMenu(!activeMobileMenu)}
              >
                <i className="fal fa-bars"></i>
              </button>
              {/*  Moblie Btn End  */}

              {/* Nav Menu Start  */}
              <div
                className="collapse navbar-collapse"
                style={{ display: activeMobileMenu && "block" }}
              >
                <ul className="navbar-nav">
                  <li
                    className="menu-item-has-children"
                    onClick={() =>
                      setActiveSubMobileMenu(
                        activeMobileSubMenu === "home" ? false : "home"
                      )
                    }
                  >
                    <Link to="/">Accueil</Link>
                    <span className="submenu-toggler">
                      <i
                        className={`fal ${
                          activeMobileSubMenu === "home"
                            ? "fa-minus"
                            : "fa-plus"
                        }`}
                      ></i>
                    </span>
                 
                  
                      
                    
                  </li>
                  <li
                    className="menu-item-has-children"
                    onClick={() =>
                      setActiveSubMobileMenu(
                        activeMobileSubMenu === "course" ? false : "course"
                      )
                    }
                  >
                    
                    <Link to="/course-1">Formation</Link>
                    <span className="submenu-toggler">
                      <i
                        className={`fal ${
                          activeMobileSubMenu === "course"
                            ? "fa-minus"
                            : "fa-plus"
                        }`}
                      ></i>
                    </span>
                 
                    
                  </li>
                  <li
                    className="menu-item-has-children"
                    name="pages"
                    onClick={(e) => {
                      setActiveSubMobileMenu(
                        e.target.name
                          ? e.target.name === activeMobileSubMenu
                            ? "pages"
                            : e.target.name
                          : activeMobileSubMenu === "pages"
                          ? false
                          : "pages"
                      );
                    }}
                  >
                     <Link to="/about-1">À Propos</Link>
                   
                   
                  </li>
                  
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                 {isLogged && <li>
                    <Link to="/listFormationAdmin">Modification</Link>
                  </li>}
                 
                 
                </ul>
              </div>
              {/* Nav Menu End  */}

              {/*  User Btn  */}
              {className !== "header-02" && (
                <a href="#" className="user-btn">
                  <i className="ti-user"></i>
                </a>
              )}
              {/*  User Btn  */}

              {/* Join Btn  */}
              {joinBtn && (
                <a href="/listFormationAdmin" className="join-btn">
                  Connexion
                </a>
              )}
          {/*  User Btn  */}
   
              {/*  User Btn  */}

              {/* Join Btn  */}
              {joinBtn && isLogged && (
                <a href="/formation" className="join-btn" onClick={logoutHandler}>
                  Déconnexion 
                </a>
              )}
              {/* Join Btn   */}
              {search &&isLogged && (
                <form className="search-box" method="post" action="#">
                  <input
                    type="search"
                    name="s"
                    placeholder="Search Courses..."
                  />
                  <button type="submit">
                    <i className="ti-search"></i>
                  </button>
                </form>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  className: ProtoTypes.string,
  logo: ProtoTypes.string,
  joinBtn: ProtoTypes.bool,
  search: ProtoTypes.bool,
};

export default Header;
