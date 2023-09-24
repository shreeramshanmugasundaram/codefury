import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Sign from "./Pages/Sign";
import Profile from "./Pages/Profile";
import ChatRooms from "./Pages/ChatRooms";
import Room from "./Pages/Room";
import DoctorRooms from "./Pages/DoctorRooms";
import DoctorDetails from "./Pages/DoctorDetails";
import NotFound from "./Pages/NotFound";
import Nav from "./Components/Commons/Nav";
import Footer from "./Components/Commons/Footer";
import MentorRegister from "./Pages/MentorRegister";
import MentorUser from "./Pages/MentorUser";
import LoginProtect from "./ProtectRoute/LoginProtect";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/redirect" element={<MentorUser />} />
          <Route path="/" element={<LoginProtect />}>
            <Route path="/chatrooms" element={<ChatRooms />} />
            <Route path="/room/:roomid" element={<Room />} />
            <Route path="/doctors" element={<DoctorRooms />} />
            <Route path="/doctors/:drid" element={<DoctorDetails />} />
          </Route>
          <Route path="/mentorregister" element={<MentorRegister />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
