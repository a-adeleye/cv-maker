import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProfile, selectProfile} from "../resumeSlice";

export default function Profile() {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  const [data, setData] = React.useState("");

  function handleChange(e) {
    setData(prev => prev = e.target.value);
  }

  React.useEffect(() => {
    setData(profile)
  },[])

  function add() {
    dispatch(addProfile(data));
    console.log(profile)
  }

  function ProfileNavigation() {
    return (
      <div className="formNavigation">
        <Link
          to="/resumeform/generaldetails"
          style={{ textDecoration: "none" }}
        >
          <button>BACK</button>
        </Link>

        <Link to="/resumeform/education" style={{ textDecoration: "none" }}>
          <button className="next" onClick={add}>NEXT</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="profile">
      <fieldset className="one-column">
        <legend>PROFILE SUMMARY</legend>

        <textarea
          name="profile"
          rows="9"
          cols="10"
          value={data}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
          onChange={handleChange}
        ></textarea>
      </fieldset>
      <ProfileNavigation />
    </div>
  );
}
