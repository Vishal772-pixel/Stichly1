import PropTypes from 'prop-types'

function BrandLogos() {
  const brands = [
    {
      name: "Nike",
      // logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20143846-xm5AtFUWPv5XvxjUcOBrUxzZ0cIYL0.png",
    },
    {
       name: "H&M",
      // logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20143846-xm5AtFUWPv5XvxjUcOBrUxzZ0cIYL0.png",
    },
    {
      name: "Levi's",
      // logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20143846-xm5AtFUWPv5XvxjUcOBrUxzZ0cIYL0.png",
    },
    {
      name: "Puma",
      // logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20143846-xm5AtFUWPv5XvxjUcOBrUxzZ0cIYL0.png",
    },
  ]

  return (
    <div className="py-8">
      <div className="flex justify-between items-center">
        {brands.map((brand) => (
          <div key={brand.name} className="w-24">
            <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

BrandLogos.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string,
    })
  ),
}

export default BrandLogos