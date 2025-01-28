function ComingSoon() {
  return (
    <div className="grid md:grid-cols-2 gap-4 my-8">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format"
          alt="Coming Soon"
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-white p-2 rounded">
          <h3 className="text-xl font-semibold">Women's Style</h3>
          <p>Coming Soon</p>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format"
          alt="Coming Soon"
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-white p-2 rounded">
          <h3 className="text-xl font-semibold">Hot sales and T-Shirts</h3>
          <p>Coming Soon</p>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon