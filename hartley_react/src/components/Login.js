import { Link } from "react-router-dom";
import React, { Component, useState } from 'react'
import axios from 'axios'


export default function Login() {

    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign In</h1>
                    <form id="login" onSubmit={(e) => HandleSubmit(e, username, password)}>

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            id="email"
                            placeholder="Email"
                            onChange={username => SetUsername(username.target.value)}
                            value={username} />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            id="password"
                            placeholder="Password"
                            onChange={password => SetPassword(password.target.value)}
                            value={password} />

                        <div className="mx-auto text-center">
                            <input
                                type='submit'
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                            />
                        </div>
                    </form>
                </div>

                <div className="text-grey-dark mt-6">
                    Don't have an account?
                    <Link to={"/signup"} className="no-underline border-b border-blue text-blue">
                        Sign up
                    </Link>.
                </div>
            </div>
        </div >
    );
}

function HandleSubmit(e, username, password) {

    e.preventDefault();
    const loginObj = {
        'username': username,
        'password': password
    }

    console.log(loginObj);

    axios
        .post("http://localhost:80/login.php", loginObj)
        .then(response => {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error)
        });

    // let name = { "Name": 'Daniel' };
    // console.log(name)

}
