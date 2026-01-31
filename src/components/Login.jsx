import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // save login state
    localStorage.setItem("isLoggedIn", "true");
    navigate("/"); // redirect to home
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="w-[90%] max-w-md bg-[#121212] p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Log in to Spotify Clone
        </h1>

        <input
          type="email"
          placeholder="Email or username"
          className="w-full mb-4 p-3 rounded bg-[#242424] text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded bg-[#242424] text-white outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-[#1DB954] text-black py-3 rounded-full font-bold"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
