import NavBarComponent from "./components/NavbarComponent";
import axios from "axios"
import {useState,useEffect} from "react"
import { Link } from "react-router-dom"

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
  return (
    <div className="container p-5"> 
        <NavBarComponent/>
        {blogs.map((blog,index)=>(
          <div className="row" style={{borderBottom:'1px solid silver'}} key={index}>
              <div className="col pt-3 pb-2">
                <Link to={`/blog/${blog.slug}`}>
                <h2>{blog.title}</h2>
                </Link>
                <p>{blog.content.substring(0,180)} ...</p>
                <p className="text-muted">Author: {blog.author} , Published : {new Date(blog.createdAt).toLocaleString()} , Updated: {new Date(blog.updatedAt).toLocaleString()}</p>
              </div>
          </div>
        ))}
    </div>
  );
}

export default App;
