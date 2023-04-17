import React, { useRef, useState } from "react";
import { redirect, Link } from "react-router-dom";
import Axios  from "axios";

//
function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    try {
        const response = await Axios.post(
        "https://crossover-shop-api-gr2.onrender.com/user/login",
        {
            email: emailValue,
            password: passwordValue,
        }
    );
        console.log(response);

    } catch (error) {
        console.log(error);
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
                    ref={emailRef}
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
                    ref={passwordRef}
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
