const cloudName = import.meta.env.VITE_CLOUD_NAME_CLOUDINARY;

console.log("Cloudinary Cloud Name:", cloudName);

if (!cloudName) {
    console.error("❌ Cloudinary cloud name is missing. Check your .env file.");
}

const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
console.log("Cloudinary Upload URL:", url); 

const uploadImage = async (image) => {
    console.log("📤 Uploading Image:", image); // Debugging log

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "MJ_Ecommerce");

    console.log("📂 FormData:", formData); 

    try {
        const dataResponse = await fetch(url, {
            method: "POST",
            body: formData
        });

        const data = await dataResponse.json();
        console.log("✅ Cloudinary Response:", data); 

        return data;
    } catch (error) {
        console.error("❌ Upload Failed:", error);
        return null;
    }
};

export default uploadImage;



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