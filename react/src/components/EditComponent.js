import { useState } from "react";
import NavBarComponent from "./NavbarComponent";
import axios from "axios";
import Swal from "sweetalert2"

const EditComponent=()=>{
    const [state,setState] = useState({
        title:"",
        content:"",
        author:""
    })
    const {title,content,author} = state
    const inputValue=name=>event=>{
        //console.log(name,"=",event.target.value)
        setState({...state,[name]:event.target.value})
    }

    const submitForm=(e)=>{
       // e.preventDefault();
       // console.table({title,content,author});
       // console.log("API URL = ",process.env.REACT_APP_API)
       // axios
       // .post(`${process.env.REACT_APP_API}/create`,{title,content,author})
       // .then(reponse=>{
            //alert("CREATE NEW BLOG COMPLETE")
       //     Swal.fire(
       //         'Good job!',
       //         'You create new Blog complete!',
       //         'success'
       //     )
       //     setState({...state,title:"",content:"",author:""})
       // })
       // .catch(err=>{
          //alert(err.response.data.error)
       //   Swal.fire(
       //     'Sorry!',
       //     err.response.data.error,
       //     'error'
       //   )
       // })
    }
    return (
        <div className="container p-5">
            <NavBarComponent/>
            <h1>Edit Blog</h1>
            {JSON.stringify(state)}
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
                    <textarea className="form-control" 
                        value={content} 
                        onChange={inputValue("content")} 
                    />
                </div>
                <div className="form-group pb-2">
                    <label>Author</label>
                    <input type="text" className="form-control" 
                        value={author} 
                        onChange={inputValue("author")} 
                    />
                </div>
                <input type="submit" value="SAVE" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default EditComponent;