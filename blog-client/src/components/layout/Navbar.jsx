import { Link, useNavigate } from "react-router-dom"
import Button from "../common/Button"
import { FiLogOut } from 'react-icons/fi'
import { logout } from "../../redux/authSlice"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react"

function Navbar() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [showMenu, setShowMenu] = useState(false)

    const { user } = useSelector((state) => state.auth || {})

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
        setShowMenu(false)
    }


    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}

                    <Link
                        to="/"
                        className="text-2xl  font-bold text-blue-600 tracking-wide"
                    >
                        BlogSpace
                    </Link>

                    {/*Desktop Menu item */}

                    <div className="hidden md:flex items-center space-x-8">

                        <Link to="/" className="hover:text-blue-600 transition">
                            Home
                        </Link>
                        <Link to="/create-post" className="hover:text-blue-600 transition">
                            Posts
                        </Link>
                        <Link to="/my-post" className="hover:text-blue-600 transition">
                            My-Blogs
                        </Link>
                        <Link to="/login" className="hover:text-blue-600 transition">
                            Login
                        </Link>
                        <Link to="/signup">

                            <Button>SignUp</Button>

                        </Link>
                        <button
                            onClick={handleLogout}
                            className="hover:text-red-600 transition flex items-center space-x-1"
                        >
                            <FiLogOut size={20} />

                        </button>

                    </div>

                    {/* Hamburger Menu */}


                     <div
                        className="md:hidden flex flex-col space-y-1 cursor-pointer"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <span className={`block w-6 h-0.5 bg-black transition-transform ${showMenu ? "rotate-45 translate-y-1.5" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-opacity ${showMenu ? "opacity-0" : "opacity-100"}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-transform ${showMenu ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                    </div>
                </div>

                {/* Mobile Menu Links */}
                {showMenu && (
                    <div className="md:hidden mt-2 flex flex-col space-y-2">
                        <Link to="/" onClick={() => setShowMenu(false)} className="hover:text-blue-600 transition">Home</Link>
                        <Link to="/create-post" onClick={() => setShowMenu(false)} className="hover:text-blue-600 transition">Posts</Link>
                        <Link to="/my-post" onClick={() => setShowMenu(false)} className="hover:text-blue-600 transition">My-Blogs</Link>

                       
                            
                                <Link to="/login" onClick={() => setShowMenu(false)} className="hover:text-blue-600 transition">Login</Link>
                                <Link to="/signup" onClick={() => setShowMenu(false)}><Button>SignUp</Button></Link>
                          

                        
                            <button
                                onClick={handleLogout}
                                className="hover:text-red-600 transition flex items-center space-x-1"
                            >
                                <FiLogOut size={20} />
                            </button>
                      
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
