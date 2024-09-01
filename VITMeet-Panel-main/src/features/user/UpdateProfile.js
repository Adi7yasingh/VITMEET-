import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { showNotification } from "../common/headerSlice";
import InputText from "../../components/Input/InputText";
import TextAreaInput from "../../components/Input/TextAreaInput";
import ToogleInput from "../../components/Input/ToogleInput";
// import { API_URL } from "../../utils/constant";
import axios from "axios";
import toast from "react-hot-toast";
// import { storage } from "../../firebase";
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import React from "react";

function UpdateProfile() {
  const [data, setData] = useState({
    //name: "",
    //age: "",
    //doj: "",
    //designation: "",
    //dob: "",
    //gender: "",
    //currentpost: "",
    //aadharno: "",
    //pancardno: "",
    //emailId: "",
    //mobileNumber: "",
    //password: "",
    //profilePic: "",
  });

  const [image, setImage] = useState(null);
  const [sitelocations, setsitelocations] = useState([]);
  const [progresspercent, setProgresspercent] = useState(0);
  const refs = React.useRef();

  useEffect(() => {
    // fetchSiteLocation();
  }, []);

//   const fetchSiteLocation = async () => {
//     // Fetch countries from your API
//     axios.get(`${API_URL}/getSiteLocation`).then((response) => {
//       setsitelocations(response.data);
//     });
//   };

  function clearFile() {
    refs.current.value = "";
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const dispatch = useDispatch();

  const addUser = async () => {
    console.log("addUser - Data:", data);
  
    // Log keys in the data object
    console.log("addUser - Data Keys:", Object.keys(data));
  
    // List of required keys
    const requiredKeys = [
      "name",
      "age",
      "doj",
      "designation",
      "dob",
      "gender",
      "currentPostedAt",
      "adharNo",
      "panCardNos",
      "emailId",
      "registeredMobileNo",
      "employeeId",
      "password",
    ];
  
    // Find missing keys
    const missingKeys = requiredKeys.filter((key) => !data[key]);
  
    // Validation checks
    if (missingKeys.length > 0) {
      console.log("Validation Failed. Missing keys:", missingKeys);
      toast.error("Please fill in all required fields");
      return;
    }
  
    try {
    //   axios.post(`${API_URL}/addUser`, { UserData: data }).then((response) => {
    //     toast.success("User added successfully");
    //     setData({
    //       name: "",
    //       age: "",
    //       doj: "",
    //       designation: "",
    //       dob: "",
    //       gender: "",
    //       currentPostedAt: "",
    //       adharNo: "",
    //       panCardNos: "",
    //       emailId: "",
    //       registeredMobileNo: "",
    //       employeeId: "",
    //       password: "",
    //     });
    //   });
    } catch (error) {
      console.log(error);
      toast.error("Failed to add user");
    }
  };
  

  return (
    <>
      <TitleCard title="User Details" topMargin="mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`form-control w-full`}>
            <label className="label">
              <span className={"label-text text-base-content "}>Name</span>
            </label>
            <input
              type="text"
              className="input  input-bordered w-full"
              name="name"
              value={data.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={`form-control w-full`}>
            <label className="label">
              <span className={"label-text text-base-content "}>Age</span>
            </label>
            <input
              type="number"
              className="input  input-bordered w-full"
              name="age"
              value={data.age}
              onChange={handleInputChange}
            />
          </div>
          
          <div className={`form-control w-full`}>
            <label className="label">
              <span className={"label-text text-base-content "}>DOB</span>
            </label>
            <input
              type="date"
              className="input  input-bordered w-full"
              name="dob"
              value={data.dob}
              onChange={handleInputChange}
            />
          </div>
          <div className={`form-control w-full`}>
            <label className="label">
              <span className={"label-text text-base-content "}>Gender</span>
            </label>
            <select
              className="select select-bordered w-full"
              name="gender"
              value={data.gender}
              onChange={handleInputChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          
          <div className={`form-control w-full`}>
            <label className="label">
              <span className={"label-text text-base-content "}>Email Id</span>
            </label>
            <input
              type="text"
              className="input  input-bordered w-full"
              name="emailId"
              value={data.emailId}
              onChange={handleInputChange}
            />
          </div>
          {/* <div className={`form-control w-full`}>
            <label className="label">
              <span className={"label-text text-base-content "}>Password</span>
            </label>
            <input
              type="text"
              className="input  input-bordered w-full"
              name="password"
              value={data.password}
              onChange={handleInputChange}
            />
          </div> */}
          <div className={`form-control w-full`}>
            <label className="label">
              <span className={"label-text text-base-content "}>
                Phone number
              </span>
            </label>
            <input
              type="text"
              className="input  input-bordered w-full"
              name="registeredMobileNo"
              value={data.registeredMobileNo}
              onChange={handleInputChange}
            />
          </div>
          <div className={`form-control w-full`}>
            <label className="label">
              <span className={"label-text text-base-content "}>User Id</span>
            </label>
            <input
              type="text"
              className="input  input-bordered w-full"
              name="employeeId"
              value={data.employeeId}
              onChange={handleInputChange}
            />
          </div> <br/>
          <div className={`form-control w-full`}>
  <label className="label">
    <span className={"label-text text-base-content "}>About</span>
  </label>
  <input
    type="text"
    className="input input-bordered w-full h-40" // Increased height (adjust as needed)
    name="about"
    value={data.about}
    onChange={handleInputChange}
  />
</div>

        </div>
        {/* <div className="divider"></div> */}
        {/* <input
          type="file"
          refs={refs}
          className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
          onChange={handleImageChange}
        /> */}
        <div className="mt-16">
          {/* <progress
            className="progress progress-secondary w-56"
            value={progresspercent}
            max="100"
          ></progress>
          <p>{progresspercent}%</p> */}
          <button
            className="btn btn-primary float-right"
            onClick={() => addUser()}
          >
            Add
          </button>
        </div>
      </TitleCard>
    </>
  );
}

export default UpdateProfile;
