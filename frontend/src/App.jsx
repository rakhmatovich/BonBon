import { BrowserRouter, Route, Routes } from "react-router-dom"
import Booking from "./Pages/Booking"
import Cart from "./pages/Cart"
import ConfirmOrder from "./pages/ConfirmOrders"
import Hall from "./pages/Hall"
import Home from "./Pages/Home"
import Login from "./pages/Login"
import Menu from "./Pages/Menu"
import Orders from "./pages/Orders"
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
        <Route path='/hall' element={<Hall />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} exact />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/order/:productId/:amount" element={<ConfirmOrder/>} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
