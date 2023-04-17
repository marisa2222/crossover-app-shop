import React, { useState } from "react";
import { redirect, Link } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = async (e) => {
        setEmailError("");
        setPasswordError("");
        e.preventDefault();
        if(!email ||!password) setPasswordError('please fill in all fields')
        if(password.length < 6) setPasswordError('password must be at least 6 characters')

        const response = await fetch("/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("token", data.token);
            // Redirect to main app page
            redirect('/')
        } else {
            const error = await response.text();
            console.error(error);
            // Display error message
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <label className="login-lable">
                Email:
                <input
                    className="login-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <div class="form-error">{emailError}</div>
            <label className="login-lable">
                Password:
                <input
                    className="login-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <div class="form-error">{passwordError}</div>
            <button className="form-button" type="submit">Log In!</button>
            <div className="form-redirect"><h3>New to us? <Link className="form-link" to='/signup'>Sign Up!</Link></h3></div>
        </form>
    );
}

export default LoginPage;
