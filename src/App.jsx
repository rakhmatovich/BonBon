import { BrowserRouter, Route, Routes } from "react-router-dom"
import Booking from "./Pages/Booking"
import Delivery from "./Pages/Delivery"
import Landing from "./Pages/Landing"
import Menu from "./Pages/Menu"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menu" element={<Menu />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/delivery' element={<Delivery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
