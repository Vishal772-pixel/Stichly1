import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../store/productsSlice"
import Banner from "../components/Banner"
import BrandLogos from "../components/BrandLogos"
import ComingSoon from "../components/ComingSoon"
import ProductGrid from "../components/ProductGrid"
import ExclusiveOffer from "../components/ExclusiveOffer"
import Testimonials from "../components/Testimonials"

function Home() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.items)
  const status = useSelector((state) => state.products.status)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts())
    }
  }, [status, dispatch])

  const womenProducts = products.filter((product) => product.category === "women")
  const menProducts = products.filter((product) => product.category === "men")

  return (
    <main className="flex-grow">
      <Banner />
      <div className="container mx-auto px-4">
        <BrandLogos />
        <ComingSoon />
        <section className="my-8">
          <h2 className="text-xl font-semibold mb-4">Women T-Shirt Product</h2>
          <ProductGrid products={womenProducts} />
        </section>
        <section className="my-8">
          <h2 className="text-xl font-semibold mb-4">Men T-Shirt Product</h2>
          <ProductGrid products={menProducts} />
        </section>
        <ExclusiveOffer />
        <Testimonials />
      </div>
    </main>
  )
}

export default Home

