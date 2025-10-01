import { useState } from "react";
import api from "../app/api/api.js";
export const useAuth = () => {
    const [error, setError] = useState(null);

    const register = async (data) => {
        try {
            setError(null)

            const response = await api.post("/users/register", data);
            if (response.data.msg) router.replace("/login")
        } catch (err) {
            setError(err.response?.data?.error || err.message)
            throw err;
        }
    }

    return{register, error};
}