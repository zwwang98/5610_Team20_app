import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../services/users/users-thunks";
import { useQuery } from "react-query";
import axios from "axios";
import CourseList from "./course-list";
import AdminEditAllUsers from "../admin-edit-all-users";

const debug = false;

const AdminLoggedInHome = () => {
  const { currentUser } = useSelector((state) => state.users);
  debug && console.log("currentUser", currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);

  const { isLoading, error, data } = useQuery("profile", async () => {
    return axios
      .get(
        process.env.REACT_APP_BASE_API
          ? `${process.env.REACT_APP_BASE_API}/api/users`
          : "http://localhost:4001/api/users"
      )
      .then((response) => {
        debug && console.log("Loding data use react-query", response.data);
        return response.data;
      });
  });

  return (
    <>
      {" "}
      <div className="d-flex flex-column justify-content-center align-items-center fs-3 mt-5">
        <CourseList />
        <div>
          <img
            src="/images/wikis-icon.png"
            width={48}
            height={48}
            className="me-3"
          />
          Click course above to manage course!
        </div>
      </div>
      <AdminEditAllUsers />
      {/* All user list */}
      {/* <div>
        <ul className="list-group">
          {!isLoading &&
            data.map((user) => (
              <li className="list-group-item fs-6">{user.username}</li>
            ))}
        </ul>
      </div> */}
    </>
  );
};

export default AdminLoggedInHome;
