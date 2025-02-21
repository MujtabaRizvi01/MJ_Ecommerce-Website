import React, { useEffect, useState } from "react";
import summaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from "../components/ChangeUserRole";

const AllUsers = () => {
  const [allUser, setAllUsers] = useState([]);
  const [openUpdateRole, setopenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    username: "",
    role: "",
    _id: "",
  });

  const fetchAllUsers = async () => {
    const fetchData = await fetch(summaryApi.allUsers.url, {
      method: summaryApi.allUsers.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();
    console.log(dataResponse);
    if (dataResponse.success) {
      setAllUsers(dataResponse.data);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="bg-white ">
      <table className="w-full userTable">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="">
          {allUser.map((el, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{el?.username}</td>
                <td>{el?.email}</td>
                <td>{el?.role}</td>
                <td>{moment(el?.createdAt).format("LL")}</td>
                <td>
                  <button
                    className="bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-black hover:text-blue-600"
                    onClick={() => {
                      setUpdateUserDetails(el);
                      setopenUpdateRole(true);
                    }}
                  >
                    <MdModeEdit />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

          {
            openUpdateRole &&(
              <ChangeUserRole 
              username={updateUserDetails.username}
              email={updateUserDetails.email}
              role={updateUserDetails.role}
              userId={updateUserDetails._id}
              onClose={()=>setopenUpdateRole(false)} 
              callFunc={fetchAllUsers}
              />
            )
          }


    </div>
  );
};

export default AllUsers;
