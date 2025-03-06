import React from 'react'

const merchItems = [
  {
    id: 1,
    name: 'Techfest T-Shirt',
    price: 380,
    image: 'https://lh5.googleusercontent.com/juVUumMAkNIjzIsvmskxDYZqVZTm_nbJvt3OKzjF-U_XgfMXXVxPP1t1yJvubdNPbtIUAd7JXrKNvcNH_XuGxF9i15zy77Ru9iEKw2H9cDZBk9wuSaVOi0mXOdb7jU8m5ykr35YyyuM=w1920',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Clothing'
  }
]

const Merchandise = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-600 opacity-10 blur-3xl"></div>
        <div className="relative bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Official Techfest Merch
            </h1>
            <p className="text-xl text-gray-300">Level up your tech game with our exclusive gear</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Remove Filters Section */}
        
        {/* Products Grid - Centered single item */}
        <div className="max-w-md mx-auto">
          {merchItems.map((item) => (
            <div key={item.id} className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="h-72 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-100">{item.name}</h3>
                <p className="text-purple-400 mb-4 text-lg font-medium">₹{item.price}</p>
                <div className="flex gap-2 mb-6">
                  {item.sizes.map((size) => (
                    <button 
                      key={size}
                      className="px-4 py-2 bg-gray-700/50 rounded-lg hover:bg-purple-500/30 transition-colors text-gray-300 hover:text-white"
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <a 
                  href="https://forms.google.com/your-form-link-here" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-[1.02] text-center"
                >
                  Pre-order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Merchandise