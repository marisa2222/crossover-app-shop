
import { createContext } from "react";


export const AuthContext = createContext();

function getToken() {
    return localStorage.getItem('jwt');
}
