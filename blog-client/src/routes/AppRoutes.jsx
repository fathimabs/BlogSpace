import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CreatePost from "../pages/CreatePost";
import PageNotFound from "../pages/PageNotFound";
import Signup from "../pages/Signup";
import PostDetails from "../pages/PostDetails";
import MyBlog from "../pages/MyBlog";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/my-post" element={<MyBlog />} />
            <Route path="/edit-post/:id" element={<PostDetails />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default AppRoutes;