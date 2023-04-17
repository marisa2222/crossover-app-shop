import React, { useRef, useState } from "react";
import Axios  from "axios";


function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();


    const handleSubmit = async (e) => {
        e.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    try {
        const response = await Axios.post(
        "https://crossover-shop-api-gr2.onrender.com/user/signUp",
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
            <button className="form-button" type="submit">Sign up!</button>
        </form>
    );
}

export default SignupPage;
