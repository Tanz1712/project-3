/* import logo from './logo.svg'; */
/* import './App.css'; */
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import Posts from "./components/posts/Posts";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

import ErrorPage from "./pages/errorPage/ErrorPage";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<Posts />} />
        <Route
          path="/register"
          element={
            <IsAnon>
              {" "}
              <Register />{" "}
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              {" "}
              <Login />{" "}
            </IsAnon>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <IsPrivate>
              <Single />
            </IsPrivate>
          }
        />
        <Route
          path="/write"
          element={
            <IsPrivate>
              {" "}
              <Write />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/settings"
          element={
            <IsPrivate>
              {" "}
              <Settings />{" "}
            </IsPrivate>
          }
        />
        <Route path="/contact" element={<Sidebar />} />
        <Route path="/about" element={<Sidebar />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
