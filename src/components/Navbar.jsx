import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCartItemsCount } from "../store/cartSlice"

function Navbar() {
  const cartCount = useSelector(selectCartItemsCount)

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
        Stichly
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <Link to="/trending" className="text-gray-600 hover:text-gray-900">
             Trending
            </Link>
            <Link to="/brands" className="text-gray-600 hover:text-gray-900">
            Try Brands
            </Link>
          </div>
          <Link to="/cart" className="flex items-center">
            <div className="relative">
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

