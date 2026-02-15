import { Link } from "react-router-dom"
import Button from "../common/Button"



function Navbar() {

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

                     {/* Menu item */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="hover:text-blue-600 transition">
                            Home
                        </Link>
                        <Link to="/create-post" className="hover:text-blue-600 transition">
                            Posts
                        </Link>
                        <Link to="/login" className="hover:text-blue-600 transition">
                            Login
                        </Link>
                        <Link
                            to="/signup"
                        >
                        <Button>SignUp</Button>
                           
                        </Link>
                    </div>

                    {/* Hamburger Menu */}
                    <div className="md:hidden flex flex-col space-y-1 cursor-pointer">
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                    </div>

                </div>
            </div>
        </nav>
    )
}



export default Navbar