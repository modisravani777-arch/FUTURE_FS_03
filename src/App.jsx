import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <Routes>
        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Main app */}
        <Route
          path="/*"
          element={
            <>
              <Navbar /> {/* unchanged */}
              <div className="h-[90%] flex">
                <Sidebar /> {/* unchanged */}
                <Display /> {/* uses your original nested Routes */}
              </div>
              <Player />
              <audio ref={audioRef} src={track.file} preload="auto" />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
