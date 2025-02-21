import React, { useState } from "react";
import ROLE from "../common/role";
import { IoMdClose } from "react-icons/io";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const ChangeUserRole = ({
  username,
  email,
  role,
  userId,
  onClose,
  callFunc,
}) => {
  const [userRole, setUserRole] = useState(role);

  const handleOnChangeSelect = (e) => {
    setUserRole(e.target.value);
    console.log("Change User: ", e.target.value);
  };

  const updateUserRole = async () => {
    try {
      const fetchResponse = await fetch(SummaryApi.updateUser.url, {
        method: SummaryApi.updateUser.method,
        credentials: "include", 
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          role: userRole,
        }),
      });

      if (!fetchResponse.ok) {
        // Check for HTTP errors (status codes outside 200-299)
        const errorText = await fetchResponse.text(); // Get the error message from the server
        throw new Error(
          `HTTP error ${fetchResponse.status}: ${
            errorText || fetchResponse.statusText
          }`
        );
      }

      const dataApi = await fetchResponse.json();
      console.log("Response: ", dataApi);

      if (dataApi && dataApi.success) {
        // Check if dataApi is not null AND dataApi.success is true
        toast.success(dataApi.message);
        onClose();
        callFunc();
      } else if (dataApi && dataApi.message) {
        // Handle API errors if success is false but message exists
        toast.error(dataApi.message);
      } else {
        toast.error("An unexpected error occurred."); // Generic error message
        console.error("API Response:", dataApi); // Log the full response for debugging
      }
    } catch (error) {
      // Catch any errors that occurred during the fetch or processing
      console.error("Error updating user role:", error);
      toast.error(error.message || "An error occurred during the update."); // Display the error message to the user
    }
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center bg-slate-200 bg-opacity-50">
      <div className="mx-auto bg-white shadow-md p-4 w-full max-w-sm">
        <button className="block ml-auto" onClick={onClose}>
          <IoMdClose />
        </button>

        <h1 className="pb-4 text-center text-lg font-medium">Change User Role</h1>

        <p>Name : {username}</p>
        <p>Email : {email}</p>

        <div className="flex items-center gap-2 my-3">
          <p>Role :</p>
          <select
            className="border px-4 py-1"
            value={userRole}
            onChange={handleOnChangeSelect}
          >
            {Object.values(ROLE).map((el) => {
              return (
                <option value={el} key={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>

        <button
          className="w-fit mx-auto block  py-1 px-3 rounded-full bg-blue-600 text-white hover:bg-black hover:text-blue-600"
          onClick={updateUserRole}
        >
          Change Role
        </button>
      </div>
    </div>
  );
};

export default ChangeUserRole;
