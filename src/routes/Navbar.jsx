
import Logo from "../assets/logo.png";
import './Navbar.css'
import { FaUserCircle} from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
// import { Grid, Image } from "@chakra-ui/react";
// import Card from "./Card";
// import { Link } from "react-router-dom";


function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const menuRef = useRef(null);
  const profileRef = useRef(null);
  const menus = ['Home', 'List UMKM', 'Gallery UMKM', 'Contact'];
  const profmenus = ['Account', 'Log Out'];

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(false);
    }
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setOpenProfile(false);
    }
  };

  return (
    <>
    <div className='header'>
      <div className='container'>
        <div className="imgs">
          <div className="container-image">
            <img src={Logo} alt="logo" className="logo"/>
          </div>
        </div>
        <ul className='nav-menu ml-auto cursor-pointer'>
          <li>
            <div className="relative left-16" ref={menuRef}>
              <h1 className='dash' href='/' onClick={() => setOpenMenu(!openMenu)}>Menu</h1>
              {openMenu && (
                <div className="bg-slate-300 opacity-80 m-3 p-4 w-64 shadow-lg absolute text-center -left-32 top-16 rounded-lg">
                  <ul>
                    {menus.map((menu) => (
                      <li className="font-bold p-2 text-lg cursor-pointer rounded hover:bg-white " key={menu}>
                        {menu}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li>
            <div className="relative left-14" ref={profileRef}>
              <FaUserCircle  size='3rem' color='gray' onClick={() => setOpenProfile(!openProfile)}/>
              {openProfile && (
                <div className="bg-slate-300 opacity-80 m-3 p-4 w-46 shadow-lg absolute text-center -left-20 top-16 rounded-lg">
                  <ul>
                    {profmenus.map((menu) => (
                      <li className="font-bold p-2 text-lg cursor-pointer rounded hover:bg-white" key={menu}>
                        {menu}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Navbar;