
import { Outlet, NavLink } from "react-router-dom"


const Layout = () => {
 
  return(
  <>
  <header style={{backgroundColor:"blue",color:"white"}}>
  {/* {"Ici c'est le HEADER"} */}
  <NavLink to="/" style={{color:"white"}}>Acceuil</NavLink>
  </header>
  <Outlet />
  </>
 );
};

export default Layout;