import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import Login from "./pages/Login"
import Register from "./pages/Register"
import SingleCar from "./pages/SingleCar"
import CarsPage from "./pages/CarsPage"
import AddCarPage from "./pages/AddCarPage"
import ProfilePage from "./pages/ProfilePage"
import EditPage from "./pages/EditPage"
import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext"


function App() {
  const { currentUser } = useContext(AuthContext)
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cars/:id" element={<SingleCar />} />
      <Route path="/allcars" element={<CarsPage />} />
      <Route path="/addcar" element={currentUser?.isDealer && <AddCarPage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
      <Route path="/editpage/:id" element={currentUser?._id ? <EditPage /> : <Navigate to={"/login"} />} />
    </Routes>
  )
}

export default App
