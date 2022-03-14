import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign In</h1>
                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />

                    <div className="mx-auto text-center">
                        <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                            Sign In
                        </button>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Don't have an account?
                    <Link to={"/signup"} class="no-underline border-b border-blue text-blue">
                        Sign up
                    </Link>.
                </div>
            </div>
        </div>
    );
}
