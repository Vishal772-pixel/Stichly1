import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { addToCartAsync } from "../store/cartSlice"

function ProductGrid({ products }) {
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCartAsync(product))
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="group cursor-pointer">
          <div className="relative overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 translate-y-full group-hover:translate-y-0 transition-transform">
              <button onClick={() => handleAddToCart(product)} className="w-full text-center">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="mt-2">
            <h3 className="font-medium">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default ProductGrid