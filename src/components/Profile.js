import React from "react";

export default function Profile() {
    const [profile, setProfile] = React.useState("");
  
    function handleChange(e) {
      setProfile((prev) => (prev = e.target.value));
    }
  
console.log(profile)

    return (
      <div className="profile">
        <fieldset>
          <legend>PROFILE</legend>
          <textarea
            name="profile"
            rows="9"
            cols="10"
            value={profile}
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
            onChange={handleChange}
          ></textarea>
        </fieldset>
      </div>
    );
  }