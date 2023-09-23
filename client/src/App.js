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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chatrooms" element={<ChatRooms />} />
          <Route path="/room/:roomid" element={<Room />} />
          <Route path="/chatrooms" element={<ChatRooms />} />
          <Route path="/doctors" element={<DoctorRooms />} />
          <Route path="/doctors/:drid" element={<DoctorDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
