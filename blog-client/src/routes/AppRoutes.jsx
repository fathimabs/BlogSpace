import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Register from "../pages/Register"
import CreatePost from "../pages/CreatePost"
import PageNotFound from "../pages/PageNotFound"



function AppRoutes() {

    return (
        <>
         <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="*" element={<PageNotFound />} />

    </Routes>
        </>
    )
}

export default AppRoutes