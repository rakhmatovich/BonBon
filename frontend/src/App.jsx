import { BrowserRouter, Route, Routes } from "react-router-dom"
import Booking from "./Pages/Booking"
import Delivery from "./Pages/Delivery"
import Hall from "./pages/Hall"
import Home from "./Pages/Home"
import Menu from "./Pages/Menu"
import ProductDetail from "./pages/ProductDetail"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/hall' element={<Hall />} />
        <Route path="/product/:id" element={<ProductDetail />} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
