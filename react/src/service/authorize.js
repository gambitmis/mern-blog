// keep token from jwt in session storage
export const authenticate=(response,next)=>{
    if(window !=="undefinded"){
        sessionStorage.setItem("token",JSON.stringify(response.data.token))
        sessionStorage.setItem("user",JSON.stringify(response.data.username))
    }
    next()
}

// read token from session storage

export const getToken=()=>{
    if(window !=="undefined"){
        if(sessionStorage.getItem("token")){
            return JSON.parse(sessionStorage.getItem("token"))
        }else{
            return false
        }
    }
}

// read user from session storage

export const getUser=()=>{
    if(window !=="undefined"){
        if(sessionStorage.getItem("user")){
            return JSON.parse(sessionStorage.getItem("user"))
        }else{
            return false
        }
    }
}

export const logout=(next)=>{
    if(window !=="undefined"){
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("user")
    }
    next()
}