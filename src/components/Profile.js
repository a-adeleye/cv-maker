import React from "react";
import { useDispatch } from 'react-redux';
import { addProfile } from "../resumeSlice";
import FormNavigation from "./FormNavigation";

export default function Profile() {

  const dispatch = useDispatch();
  
  const [data, setData] = React.useState("");
  
    function handleChange(e) {
      setData((prev) => (prev = e.target.value));
    }
 
    return (
      <div className="profile">
        <fieldset>
          <legend>PROFILE</legend>
          <textarea
            name="profile"
            rows="9"
            cols="10"
            value={data}
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
            onChange={handleChange}
          ></textarea>
        </fieldset>
        <FormNavigation back="/resumeform/generaldetails" onClick={() => dispatch(addProfile(data))} next="/resumeform/education" text="NEXT"/>
      </div>
    );
  }