import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);
const API_URL = process.env.REACT_APP_API_URL;

const AuthStateContext = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginUser, setLoginUser] = useState(null);


    useEffect(() => {
        if(!isAuthenticated){
            const getUser = async () => {
                try {
                    setLoading(true)
                    const data = await getUserData();
                    setLoginUser(data);
                    setIsAuthenticated(true)
                    setLoading(false)
                } catch (error) {
                    setToken(null)
                    localStorage.removeItem("token");
                    setLoading(false)
                }
            }
    
            token && getUser()
        }
        
    }, [token, isAuthenticated])

    const signInUser = async (email, password) => {
        try {
            setLoading(true);

            const { data: token } = await axios.post(`${API_URL}/jwt/signin`, {
                email: email,
                password: password,
            })

            setError(null)
            localStorage.setItem('token', token);
            setToken(token);
            setIsAuthenticated(true)
            navigate("/me", {replace: true})
        } catch (e) {
            console.error(e)
            setError(e.response.data.error)
        }
        setLoading(false);
    }

    const signUpUser = async ( email, password) => {
        try {
            setLoading(true);

            const { data: token } = await axios.post(`${API_URL}/jwt/signup`, {
                email: email,
                password: password,
            })

            setError(null)
            localStorage.setItem('token', token);
            setToken(token);
            setIsAuthenticated(true)
            navigate("/me", {replace: true})

        } catch (e) {

            console.error(e)
            setError(e.response.data.error)
        }
        setLoading(false);
    }

    const logout = () => {
        console.log("login out")
        localStorage.removeItem("token");
        setToken(null)
        setIsAuthenticated(false)
        navigate("/")
    }

    const getUserData = async () => {
        const { data } = await axios.get(`${API_URL}/jwt/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data;
    }

    return <AuthContext.Provider value={
        { token, error, loading, isAuthenticated, signInUser, signUpUser, logout, getUserData, loginUser }
    }>{children}</AuthContext.Provider>
}

export default AuthStateContext;