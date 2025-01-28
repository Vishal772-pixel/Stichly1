import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { removeFromCartAsync, updateQuantityAsync, selectCartItems, selectCartTotal } from "../store/cartSlice"

function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCartAsync(id))
  }

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantityAsync({ id, quantity }))
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/products" className="text-blue-600 hover:underline">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b py-4">
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-24 h-24 object-cover" />
              <div className="flex-grow">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-600 hover:text-red-800">
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-2 font-bold flex justify-between">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
          <Link to="/checkout" className="block w-full bg-black text-white text-center py-2 rounded hover:bg-gray-800">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart

