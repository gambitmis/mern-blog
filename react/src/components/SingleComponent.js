import axios from "axios";
import { useState,useEffect } from "react"
import NavBarComponent from "./NavbarComponent";

const SingleComponent=(props)=>{
    const [blog,setBlog] = useState('')
    useEffect(()=>{
        axios
        .get(`${process.env.REACT_APP_API}/blog/${props.match.params.slug}`)
        .then(response=>{
            setBlog(response.data)
        })
        .catch(err=>alert(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <div className="container p-5">
            <NavBarComponent/>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p className="text=muted">Author: {blog.author} , Published : {new Date(blog.createdAt).toLocaleString()} , Updated: {new Date(blog.updatedAt).toLocaleString()}</p>
        </div>
    )
}
export default SingleComponent;