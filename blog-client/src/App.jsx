import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import AppRoutes from "./routes/AppRoutes"
import { Toaster } from "react-hot-toast"


function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen px-4 py-8 max-w-7xl mx-auto">
        
        <AppRoutes />

      </div>
      <Footer />

      <Toaster position="top" reverseOrder={false} />
    </>
  )
}


export default App
