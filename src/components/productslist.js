/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Francis B-3 Leather Bomber Jacket',
      href: './components/hello.js',
      imageSrc: 'https://yoursleather.com/cdn/shop/products/Men_s_Francis_B-3_Black_White_Leather_Bomber_Jacket7715-4-1578568462328.jpg?v=1671898448&width=600',
      imageAlt: "Francis B-3 Leather Bomber Jacket",
      price: '$290',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Dodge Mens Cognac Cafe Racer Leather Jacket',
      href: '#',
      imageSrc: 'https://yoursleather.com/cdn/shop/products/Mens_Ruboff_biker_leather_jacket__94845_std.jpg?v=1668165536&width=600',
      imageAlt: "Dodge Mens Cognac Cafe Racer Leather Jacket",
      price: '$280',
      color: 'Brown',
    },
    {
      id: 1,
      name: 'Nintenzo Hooded Suede Bomber Jacket',
      href: '#',
      imageSrc: 'https://yoursleather.com/cdn/shop/products/Men_s_Nintenzo_Green_Hooded_Suede_Jacket_Open_Front-4-1634135070169.jpg?v=1672759216&width=600',
      imageAlt: "Nintenzo Hooded Suede Bomber Jacket",
      price: '$220',
      color: 'Green',
    },
    {
      id: 1,
      name: 'Blain Hybrid Bomber Jacket',
      href: '#',
      imageSrc: 'https://yoursleather.com/cdn/shop/products/Blain-Black-Hybrid-Bomber-Jacket-for-men_2509-1550655635502-1550760147443.jpg?v=1675235768&width=600',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$140',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Blain Hybrid Bomber Jacket',
      href: '#',
      imageSrc: 'https://yoursleather.com/cdn/shop/products/Eaton-Black-Suede-Bomber-Jacket-for-men_3-1550759396596.webp?v=1672758426&width=600',
      imageAlt: "Eaton Suede Bomber Jacket",
      price: '$200',
      color: 'Brown',
    },
    {
      id: 1,
      name: 'Armand Mocha Suede Biker Jacket',
      href: '#',
      imageSrc: 'https://yoursleather.com/cdn/shop/products/Men_s_Armand_Mocha_Suede_Biker_Jacket_Open_Front-4-1634130861034.jpg?v=1672759600&width=600',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$230',
      color: 'Brown',
    },
    {
      id: 1,
      name: 'Bomia Ma-1 Distressed Leather Bomber Jacket',
      href: '#',
      imageSrc: 'https://yoursleather.com/cdn/shop/products/Men_s_Bomia_Ma-1_Distressed_Black_Leather_Bomber_Jacket7727-5-1578998544108_0a295e8e-d311-4ddc-a27f-314163231eb3.jpg?v=1671898288&width=600',
      imageAlt: "Bomia Ma-1 Distressed Leather Bomber Jacket",
      price: '$300',
      color: 'Brown',
    },
    {
      id: 1,
      name: 'Bomia Ma-1 Leather Bomber Jacket',
      href: '#',
      imageSrc: 'https://yoursleather.com/cdn/shop/products/Men_s_Sven_Black_Leather_Bomber_Jacket8054-5-1578915622472.jpg?v=1671898259&width=600',
      imageAlt: "Bomia Ma-1 Leather Bomber Jacket",
      price: '$300',
      color: 'Black',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          
          <h2 className="text-4xl inline-block border-b-4 border-red-700 font-bold tracking-tight text-gray-900">Winter Collection</h2>

  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 ">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-lg text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-xl font-medium text-green-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  