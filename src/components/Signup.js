import React, { useState } from "react";

function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/login", {
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
            <label className="login-lable">
                Password:
                <input
                    className="login-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button className="form-button" type="submit">Sign up!</button>
        </form>
    );
}

export default SignupPage;
