import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CreatePost from "../pages/CreatePost";
import MyBlog from "../pages/MyBlog";
import PostDetails from "../pages/PostDetails";
import PageNotFound from "../pages/PageNotFound";


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