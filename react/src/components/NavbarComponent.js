import {Link,withRouter} from "react-router-dom"
import { getUser,logout } from "../service/authorize";
const NavBarComponent=({history})=>{

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Blog</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link " aria-current="page" to="/">Home</Link>
                  
                  {
                    !getUser() && (
                      <Link className="nav-link " to="/login">Login</Link>
                    )
                  }
                  {
                    getUser() && (
                      <buttom className="nav-link" onClick={()=>logout(()=>history.push("/"))}>logout</buttom>
                    )
                  }
                  {
                    getUser() && (
                      <Link className="nav-link " to="/create">New Blog</Link>
                    )
                  }
                </div>
              </div>
            </div>
          </nav>
        )
}

export default withRouter(NavBarComponent);