const backendDomain='http://localhost:8080'

const summaryApi={
    signUp:{
        url: `${backendDomain}/api/signup`,
        method: "post"
    },
    login:{
        url: `${backendDomain}/api/login`,
        method: "post"
    },
    currentUser:{
        url: `${backendDomain}/api/user-details`,
        method: "get"
    },
    userLogout:{
        url: `${backendDomain}/api/user-logout`,
        method: "get"
    },
    allUsers:{
        url: `${backendDomain}/api/all-users`,
        method: "get"
    },
    updateUser:{
        url: `${backendDomain}/api/user-update`,
        method:"post"
    }
    
}

export default summaryApi