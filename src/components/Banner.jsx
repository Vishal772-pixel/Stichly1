function Banner() {
  return (
    <div className="bg-sky-400 py-12">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white">
          <h1 className="text-6xl font-bold mb-4">SUMMER</h1>
          <p className="text-2xl mb-6">BIG FESTIVE SALE</p>
          <div className="inline-block bg-white text-sky-400 px-4 py-2 rounded">50% off</div>
        </div>
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format"
            alt="Summer sale"
            className="max-h-64 rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner