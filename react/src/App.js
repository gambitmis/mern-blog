import NavBarComponent from "./components/NavbarComponent";
import axios from "axios"
import {useState,useEffect} from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2";
import renderHTML from 'react-render-html'

function App() {
  const [blogs,setBlogs] = useState([])
  const FetchData=()=>{
    axios
    .get(`${process.env.REACT_APP_API}/blogs`)
    .then(response=>{
      setBlogs(response.data)
    })
    .catch(err=>alert(err));
  }
  useEffect(()=>{
    FetchData()
  })

  const confirmDelete=(slug)=>{
    //console.log(slug)
    Swal.fire({
      title:`Do you want to Delete ${slug}`,
      icon: "warning",
      showCancelButton:true
    }).then((result)=>{
        if(result.isConfirmed){
          //alert(slug)
          deleteBlog(slug)
        }
    })
  }

  const deleteBlog=(slug)=>{
    axios
    .delete(`${process.env.REACT_APP_API}/blog/${slug}`)
    .then(response=>{
      Swal.fire(
        "ByeBye!",
        response.data.message,
        "success"
      )
      //Refresh
      FetchData()
    }).catch(err=>console.log(err))
  }

  return (
    <div className="container p-5"> 
        <NavBarComponent/>
        {blogs.map((blog,index)=>(
          <div className="row" style={{borderBottom:'1px solid silver'}} key={index}>
              <div className="col pt-3 pb-2">
                <Link to={`/blog/${blog.slug}`}>
                <h2>{blog.title}</h2>
                </Link>
                <div className="pt-3">{renderHTML(blog.content.substring(0,250))} ...</div>
                <p className="text-muted">Author: {blog.author} , Published : {new Date(blog.createdAt).toLocaleString()} , Updated: {new Date(blog.updatedAt).toLocaleString()}</p>
                <Link className="btn btn-outline-success" to={`/blog/update/${blog.slug}`}>Update</Link>&nbsp;
                <button className="btn btn-outline-danger" onClick={()=>confirmDelete(blog.slug)}>Delete</button>
              </div>
          </div>
        ))}
    </div>
  );
}

export default App;
