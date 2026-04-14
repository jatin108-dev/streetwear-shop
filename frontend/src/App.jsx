import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<h1 className="text-white bg-black h-screen flex items-center justify-center">Products Page</h1>} />
        <Route path="/admin" element={<h1 className="text-white bg-black h-screen flex items-center justify-center">Admin Panel</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
