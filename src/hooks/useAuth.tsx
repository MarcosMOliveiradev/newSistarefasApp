import { useContext } from "react";
import { AuthContext } from "@/api/authContext";

export function useAuth() {
    const context = useContext(AuthContext);

    return context
}