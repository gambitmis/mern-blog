import { useState } from "react";

const FormComponent=()=>{
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
    return (
        <div className="container p-5">
            <h1>Form Component</h1>
            {JSON.stringify(state)}
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" value={title} onChange={inputValue("title")} />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" value={content} onChange={inputValue("content")} />
                </div>
                <div className="form-group pb-2">
                    <label>Author</label>
                    <input type="text" className="form-control" value={author} onChange={inputValue("author")} />
                </div>
                <input type="submit" value="SAVE" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default FormComponent;