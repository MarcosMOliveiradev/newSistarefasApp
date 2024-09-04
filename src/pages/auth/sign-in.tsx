import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function SignIn() {
    const navigate = useNavigate()
    return (
        <>
            <h1>Olha Auth</h1>
            <Button onClick={() => navigate("/") }>dashbord</Button>
        </>
    );
}