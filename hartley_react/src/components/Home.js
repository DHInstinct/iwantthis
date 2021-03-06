
import { Link } from "react-router-dom"
import Navbar from "./Navigation"

export default function Home() {
    return (
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">I WANT THIS </span>
                    <span className="block text-indigo-600 xl:inline"> an online wishlist service</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Welcome to I WANT THIS, we are an online wishlist service. Please click below to either login/signup, or view our projects</p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                        <Link to={"/login"} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Login </Link>
                    </div>
                    <div className="rounded-md shadow sm:ml-3">
                        <Link to={"/signup"} className="w-full flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Sign Up </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link to={"/productlist"} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Products </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}