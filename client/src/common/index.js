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
    
}

export default summaryApi