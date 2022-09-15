/* import logo from './logo.svg'; */
/* import './App.css'; */
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import Posts from "./components/posts/Posts";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import ErrorPage from "./pages/errorPage/ErrorPage";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const user = false;
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<HomePage />} />
        <Route path="/register" element={user ? <HomePage /> : <Register />} />
        <Route path="/login" element={user ? <HomePage /> : <Login />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/contact" element={<Sidebar />} />
        <Route path="/about" element={<Sidebar />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
