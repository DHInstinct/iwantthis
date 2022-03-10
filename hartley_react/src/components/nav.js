export default function Navbar(props)
{
    return(
        <nav className="flex items-center justify-between flex-wrap bg-indigo-600 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
              <img className='object-contain h-10 w-10' src='./public/logo192.png'></img>
            <span className="font-semibold text-2xl tracking-tight pl-5">I WANT THIS</span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-xl lg:flex-grow">
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
                Products
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
                Account
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white">
                Wishlist
              </a>
            </div>
            <div>
              {/* <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a> */}
            </div>
          </div>
        </nav>

    )
}