import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Products from "./Pages/Products.jsx"
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout"
import Footer from "./components/Footer"
import VirtualTryOn from "./components/VirtualTryOn"
  import Brands from "./Pages/Brands"
import TrendingItems from "./Pages/TrendingItems"
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="trending"elememt={<TrendingItems/>}/>
            Route
          </Routes>
          <VirtualTryOn />
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App