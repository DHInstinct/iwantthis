import { Link } from "react-router-dom";
import React, { Component, useState } from 'react'
import axios from 'axios'

export default function Signup() {

    localStorage.setItem("test", "testingvalue");


    const [firstName, SetFirstName] = useState("");
    const [lastName, SetLastName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const [signup, SetSignup] = useState("");

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);

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
                if (response.data.message) {
                    console.log("login Status:", signup);
                    SetSignup(response.data.message);
                }
                else {
                    console.log(response.data.fname);
                    SetSignup("Successful Login");
                }
            })
            .catch(function (error) {
                console.log("axios error in login", error)
            });

    }

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form id="">
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            id="fullname"
                            placeholder="Full Name"
                            // value={firstName}
                            onChange={firstName => SetFirstName(firstName.target.value)} />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Last Name"
                            onChange={lastName => SetLastName(lastName.target.value)}
                        />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            // value={email}
                            onChange={email => SetEmail(email.target.value)} />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            onChange={password => SetPassword(password.target.value)} />


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
            </div>
        </div>
    );
}