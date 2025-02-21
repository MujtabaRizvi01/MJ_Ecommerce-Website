
const url=`https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME_CLOUDINARY}/image/upload`

const uploadImage= async(image)=>{
    const formData =new FormData()
    formData.append("file",image)
    formData.append("upload_preset","MJ_Ecommerce")


    const dataResponse=await fetch(url,{
        method:"post",
        body:formData
    })

    return dataResponse.json()
}

export default uploadImage

// import React from 'react';

// const uploadImage = async (image) => {
//     const formData = new FormData();
//     formData.append("image", image); // 'image' must match the server's handling
//     // ... other form data if needed

//     try {
//         const response = await fetch('/api/upload', { // Your server endpoint
//             method: 'POST',
//             body: formData,
//         });

//         if (!response.ok) {
//             const errorData = await response.json(); // Try to get error details
//             throw new Error(errorData.error || 'Upload failed'); // Throw error with details
//         }

//         const data = await response.json();
//         return data; // Cloudinary response data
//     } catch (error) {
//         console.error("Upload error:", error);
//         // Handle error (e.g., display message to user)
//         throw error; // Re-throw the error so the calling function can handle it
//     }
// };

// // const uploadImage = () => {
// //     const handleImageUpload = async (event) => {
// //         const file = event.target.files[0];
// //         try {
// //             const result = await uploadImage(file);
// //             console.log("Cloudinary response:", result);
// //             // ... update UI or state with the Cloudinary data
// //         } catch (error) {
// //             // ... handle error
// //         }
// //     };

// //     return (
// //         <input type="file" onChange={handleImageUpload} />
// //         // ... rest of your component
// //     );
// // };

// export default uploadImage;