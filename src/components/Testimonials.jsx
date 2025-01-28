function Testimonials() {
  const testimonials = [
    {
      id: 1,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format",
      name: "Sarah",
      text: "Great quality products and fast shipping!",
    },
    {
      id: 2,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format",
      name: "James",
      text: "Amazing customer service and beautiful designs.",
    },
    {
      id: 3,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format",
      name: "Emma",
      text: "The best online shopping experience ever!",
    },
  ]

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-8 text-center">What People Are Saying</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="text-center">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 mb-2">{testimonial.text}</p>
            <p className="font-medium">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials