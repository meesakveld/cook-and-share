'use client';
import { logout } from "@/lib/loginActions";
import Button from "../common/Button";

export default function LogoutForm () {
    return (
        <form>
            <Button function="button" color="red" onClick={async (ev) => {ev.preventDefault(); await logout()}}>Logout</Button>
        </form>
    )
}