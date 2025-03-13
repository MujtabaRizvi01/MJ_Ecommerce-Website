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
    },
    uploadProduct:{
        url:`${backendDomain}/api/upload-product`,
        method:"post"
    },
    allProducts:{
        url:`${backendDomain}/api/all-products`,
        method:"get"
    },
    updateProduct:{
        url:`${backendDomain}/api/update-product`,
        method:"post"
    },
    categoryProduct : {
        url : `${backendDomain}/api/get-categoryProduct`,
        method : 'get'
    }
    
}

export default summaryApi