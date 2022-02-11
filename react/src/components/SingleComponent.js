import axios from "axios";
import { useState,useEffect } from "react"
import NavBarComponent from "./NavbarComponent";
import renderHTML from 'react-render-html'; 

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
            {blog && 
            <div>
                <h1>{blog.title}</h1>
                <div>{renderHTML(blog.content)}</div>
                <p className="text=muted">Author: {blog.author} , Published : {new Date(blog.createdAt).toLocaleString()} , Updated: {new Date(blog.updatedAt).toLocaleString()}</p>
            </div>
            }
        </div>
    )
}
export default SingleComponent;