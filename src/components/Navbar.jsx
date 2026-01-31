import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const handleAvatarClick = () => {
    setDropdownOpen(!dropdownOpen); // toggle dropdown
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setDropdownOpen(false);
    window.location.reload();
  };

  const handleSwitchAccount = () => {
    alert("Switch Account clicked!"); // implement later
  };

  return (
    <div className="w-full flex justify-between items-center font-semibold p-2 bg-[#121212] relative">
      {/* Back / Forward Arrows */}
      <div className="flex items-center gap-2">
        <img
          className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          src={assets.arrow_left}
          alt="back"
          onClick={() => navigate(-1)}
        />
        <img
          className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          src={assets.arrow_right}
          alt="forward"
          onClick={() => navigate(1)}
        />
        {/* Website Name */}
  <h1 className="text-white font-bold text-xl ml-4 cursor-pointer" onClick={()=>navigate('/')}>
    Spotify Clone
  </h1>
      </div>

      {/* Top-right */}
      <div className="flex items-center gap-4 relative">
        {!isLoggedIn && (
          <>
             <p
      className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer"
      onClick={() => {
        // if user clicks Explore Premium, go to login page
        navigate("/login");
      }}
    >
      Explore Premium
    </p>
            <p
              className="bg-white text-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer"
              onClick={() => alert("Install App clicked!")}
            >
              Install App
            </p>
          </>
        )}

        {isLoggedIn && (
          <div className="relative">
            <p
              className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer"
              onClick={handleAvatarClick}
            >
              M
            </p>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#242424] border border-gray-700 rounded shadow-lg z-10">
              
                <button
          className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
          onClick={handleLogout}
        >
          Logout
        </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
