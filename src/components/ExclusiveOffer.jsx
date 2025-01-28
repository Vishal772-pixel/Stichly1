function ExclusiveOffer() {
  return (
    <div className="bg-yellow-50 p-8 my-8 rounded-lg flex flex-col md:flex-row justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold mb-4">Exclusive offer</h2>
        <p className="text-gray-600 mb-4">Get special discount and exclusive offers on your first purchase</p>
        <div className="flex space-x-2">
          <div className="bg-white p-2 rounded">
            <span className="text-xl font-bold">02</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="bg-white p-2 rounded">
            <span className="text-xl font-bold">12</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="bg-white p-2 rounded">
            <span className="text-xl font-bold">45</span>
            <span className="text-sm">Minutes</span>
          </div>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&auto=format"
        alt="Exclusive offer"
        className="max-h-48 mt-4 md:mt-0 rounded-lg"
      />
    </div>
  )
}

export default ExclusiveOffer