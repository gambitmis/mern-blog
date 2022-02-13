import NavBarComponent from "./NavbarComponent"
import { useState, useEffect } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { authenticate, getUser } from "../service/authorize"
import { withRouter } from "react-router-dom"

const LoginComponent=(props)=>{
    const [state,setState] = useState({
        username:"",
        password:""
    })
    const {username,password} = state

    const inputValue=name=>event=>{
        setState({...state,[name]:event.target.value})
    }

    const submitForm=(e)=>{
        e.preventDefault();
        console.table({username,password})
        axios
        .post(`${process.env.REACT_APP_API}/login`,{username,password})
        .then(response=>{
            console.log(response)
            authenticate(response,props.history.push("/create"))
        }).catch(err=>{
            console.log(err.response.data.error)
            Swal.fire(
                'Sorry!',
                err.response.data.error,
                'error'
              )
        })
    }
    useEffect(()=>{
        getUser() && props.history.push("/")
    },[])
    return(
        <div className="container p-5">
        <NavBarComponent/>
        <h1>LOGIN | Administrator</h1>
        <form onSubmit={submitForm}>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" 
                    value={username} 
                    onChange={inputValue("username")} 
                />
            </div>
            <div className="form-group pb-2">
                <label>Password</label>
                <input type="password" className="form-control" 
                    value={password} 
                    onChange={inputValue("password")} 
                />
            </div>
            <input type="submit" value="LOGIN" className="btn btn-primary" />
        </form>
        </div>
    )
}
export default withRouter(LoginComponent)