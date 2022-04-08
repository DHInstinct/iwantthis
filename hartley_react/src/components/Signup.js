import { Link } from "react-router-dom";
import React, { Component, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Signup({ SetName }) {

    let navigate = useNavigate();

    const [firstName, SetFirstName] = useState("");
    const [lastName, SetLastName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const [signup, SetSignup] = useState("");

    function HandleSubmit(e) {

        e.preventDefault();
        const signupObj = {
            'firstname': firstName,
            'lastname': lastName,
            'email': email,
            'password': password
        }

        axios
            .post("http://localhost:80/signup.php", signupObj)
            .then(response => {
                if (response.data == true) {
                    //setting local storage
                    localStorage.setItem("userName", firstName);
                    //setting state
                    SetName(localStorage.getItem("userName"));
                    SetSignup(firstName);
                    //timeout for navigate
                    setTimeout(() => {
                        navigate("/productlist");
                    }, 1000);
                }
                else {
                    SetSignup("Please try again");
                }
            })
            .catch(function (error) {
                console.log("axios error in signup", error)
            });
    }

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form id="" onSubmit={(e) => HandleSubmit(e)}>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            id="fullname"
                            placeholder="Full Name"
                            onChange={firstName => SetFirstName(firstName.target.value)}
                            required
                        />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Last Name"
                            onChange={lastName => SetLastName(lastName.target.value)}
                            required
                        />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            onChange={email => SetEmail(email.target.value)}
                            required />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            onChange={password => SetPassword(password.target.value)}
                            required />

                        <div className="mx-auto text-center">
                            <button type='submit' className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                                Sign up
                            </button>
                        </div>
                    </form>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account?
                    <Link to={"/login"} className="no-underline border-b border-blue text-blue">
                        Log in
                    </Link>.
                </div>
                <div>{signup ? <h1 className="text-5xl">Welcome, {signup}</h1> : ""}</div>
            </div>
        </div>
    );
}