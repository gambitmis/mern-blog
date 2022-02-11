import { useState,useEffect } from "react";
import NavBarComponent from "./NavbarComponent";
import axios from "axios";
import Swal from "sweetalert2"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditComponent=(props)=>{
    const [state,setState] = useState({
        title:"",
        //content:"",
        author:"",
        slug:""
    })
    const {title,author,slug} = state
    
    const [content,setContent] = useState('')

    const sumbitContent=(event)=>{
        setContent(event)
    }

    //get edit blog
    useEffect(()=>{
        axios
        .get(`${process.env.REACT_APP_API}/blog/${props.match.params.slug}`)
        .then(response=>{
            console.log(response.data)
            const {title,content,author,slug} = response.data
            setState({...state,title,author,slug})
            setContent(content)
        })
        .catch(err=>alert(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const inputValue=name=>event=>{
        //console.log(name,"=",event.target.value)
        setState({...state,[name]:event.target.value})
    }

    const showUpdateForm=()=>(
        <form onSubmit={submitForm}>
        <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" 
                value={title} 
                onChange={inputValue("title")} 
            />
        </div>
        <div className="form-group">
            <label>Content</label>
            <ReactQuill 
                        theme="snow"
                        value={content}
                        onChange={sumbitContent} 
                        className="pb-5 mb-3"
                        style={{border:'1px solid #666'}}
            />
        </div>
        <div className="form-group pb-2">
            <label>Author</label>
            <input type="text" className="form-control" 
                value={author} 
                onChange={inputValue("author")} 
            />
        </div>
        <input type="submit" value="UPDATE" className="btn btn-primary" />
        </form>
    )

    const submitForm=(e)=>{
       e.preventDefault();
       console.table({title,content,author});
       console.log("API URL = ",process.env.REACT_APP_API)
       axios
       .put(`${process.env.REACT_APP_API}/blog/${slug}`,{title,content,author})
       .then(response=>{
            //alert("CREATE NEW BLOG COMPLETE")
            Swal.fire('Good job!','Update Blog complete!','success')
            const {title,content,author,slug} = response.data
            setState({...state,title,author,content,slug})
            
            //setState({...state,title:"",content:"",author:""})
        })
        .catch(err=>{
            //alert(err.response.data.error)
            Swal.fire('Sorry!',err.response.data.error,'error')
        })
    }
    return (
        <div className="container p-5">
            <NavBarComponent/>
            <h1>Edit Blog</h1>
            {showUpdateForm()}

        </div>
    )
}

export default EditComponent;