import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/Home"
import CreatePost from "../pages/CreatePost"
import PageNotFound from "../pages/PageNotFound"
import Signup from "../pages/Signup"



function AppRoutes() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="*" element={<PageNotFound />} />

            </Routes>
        </>
    )
}

export default AppRoutes