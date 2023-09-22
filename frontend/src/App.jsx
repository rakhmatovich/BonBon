import { BrowserRouter, Route, Routes } from "react-router-dom"
import Booking from "./Pages/Booking"
import Cart from "./pages/Cart"
import Delivery from "./Pages/Delivery"
import Hall from "./pages/Hall"
import Home from "./Pages/Home"
import Login from "./pages/Login"
import Menu from "./Pages/Menu"
import ProductDetail from "./pages/ProductDetail"
import Register from "./pages/Register"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/hall' element={<Hall />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
