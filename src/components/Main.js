import GeneralDetails from "./GeneralDetails";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Preview from "./Preview";
import { Route, Routes } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/generaldetails" element={<GeneralDetails />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/skill" element={<Skills />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/preview" element={<Preview />}></Route>
      </Routes>
      
    </main>
  );
}
