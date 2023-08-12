
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
const callouts = [
    {
      name: 'New Arrival',
      imageSrc: 'https://yoursleather.com/cdn/shop/collections/new-arrival-1.webp?v=1671819479&width=750',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: "Women's bomber",
      imageSrc: 'https://yoursleather.com/cdn/shop/collections/WhatsApp_Image_2022-12-23_at_6.53.28_PM.jpg?v=1671819286&width=750',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name:"Women's biker",
      imageSrc: 'https://yoursleather.com/cdn/shop/collections/WhatsApp_Image_2022-12-21_at_8.27.21_PM.jpg?v=1671636786&width=750',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    {
      name: "Men's Bomber",
  
      imageSrc: 'https://yoursleather.com/cdn/shop/collections/WhatsApp_Image_2022-12-23_at_6.07.20_PM.jpg?v=1671801033&width=750',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    {
      name: "Men's New Arrival",
      imageSrc: 'https://yoursleather.com/cdn/shop/collections/WhatsApp_Image_2023-01-31_at_2.17.04_AM_3.jpg?v=1675165218&width=750',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function Featured() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-8xl  lg:px-8">
          <div className="mx-auto max-w-3xl py-16 sm:py-24 lg:max-w-none lg:py-30">
            <h2 className="text-5xl  text-gray-900">POPULAR</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-5 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-lg text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
               
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  