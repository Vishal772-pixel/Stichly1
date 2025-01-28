import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../store/productsSlice.js"
import ProductGrid from "../components/ProductGrid"

function Products() {
  const [category, setCategory] = useState("all")
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.items)
  const status = useSelector((state) => state.products.status)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts())
    }
  }, [status, dispatch])

  const filteredProducts = category === "all" ? products : products.filter((product) => product.category === category)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">All Products</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setCategory("all")}
            className={`px-4 py-2 rounded ${category === "all" ? "bg-black text-white" : "bg-gray-200"}`}
          >
            All
          </button>
          <button
            onClick={() => setCategory("women")}
            className={`px-4 py-2 rounded ${category === "women" ? "bg-black text-white" : "bg-gray-200"}`}
          >
            Women
          </button>
          <button
            onClick={() => setCategory("men")}
            className={`px-4 py-2 rounded ${category === "men" ? "bg-black text-white" : "bg-gray-200"}`}
          >
            Men
          </button>
        </div>
      </div>
      <ProductGrid products={filteredProducts} />
    </div>
  )
}

export default Products

