import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthRequest } from "../RequestMethods";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const navigate = useNavigate()

    const login = async (inputs) => {
        try {
            AuthRequest("/auth/login", "post", inputs).then((res) => {
                if (res) {
                    toast.success("Login Success")
                    navigate("/")
                    setCurrentUser(res)
                }
            })
        } catch (error) {
            toast.error(error.response.data)
            return error
        }
    };
    const loginDealer = async (inputs) => {
        try {
            AuthRequest("/dealer/login", "post", inputs).then((res) => {
                if (res) {
                    toast.success("Login Success")
                    navigate("/")
                    setCurrentUser(res)
                }
            })
        } catch (error) {
            toast.error(error.response.data)
            return error
        }
    };

    const logout = async () => {
        localStorage.clear()
        setCurrentUser("")
        toast.success("Logged Out")
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout, loginDealer }}>
            {children}
        </AuthContext.Provider>
    );
};
