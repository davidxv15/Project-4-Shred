import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
export default function NavBar({ user, setUser }) {
  function handleLogout() {
    userService.logout();
    setUser(null);
  }
  return (
    <div className="">
      {user ? (

        <nav className="navbar navbar-expand-lg bg-dark ">
          
          <div className="container-fluid d-flex justify-content-around">

            <Link to='/' className="text-light link-offset-2 link-offset-3-hover
       link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover navbar-brand">SHRED</Link>

            <div className="nav-item dropdown ">
              <Link className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-exapanded="false">
                Workout Plan </Link>
              <div className="dropdown-menu">
                <div><Link className="dropdown-item" to="/workout">My Workout Plan</Link></div>
                <div><Link className="dropdown-item" to="/">Edit Workout Plan</Link></div>
              </div>
            </div>

              
            <div className="nav-item dropdown ">
              <Link className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-exapanded="false">
                Exercises </Link>
              <div className="dropdown-menu">
                <div><Link className="dropdown-item " to="/exercise">Available Exercises</Link></div>
                <div><Link className="dropdown-item " to="/create-exercise">Add Exercise</Link></div>
              </div>
            </div>
           
            <div className="nav-item dropdown ">
              <Link className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-exapanded="false">
                  {user && user.name} </Link>
              <div className="dropdown-menu">
                <div><Link className="dropdown-item " onClick={handleLogout} to="/login">Logout</Link></div>
                </div>
              </div>
            
          </div>

        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <Link to='/' className="text-light link-offset-2 link-offset-3-hover
       link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover navbar-brand">SHRED</Link>
            <Link to="/exercise" className="text-light link-offset-2 link-offset-3-hover 
      link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover">Exercises</Link>

            <Link to="/login" className="text-light link-offset-2 link-offset-3-hover 
      link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover">Login</Link>
          </div>
        </nav>)
      }

    </div >
  );
}
