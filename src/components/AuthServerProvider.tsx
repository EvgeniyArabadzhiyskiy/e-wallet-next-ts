import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

export default async function AuthServerProvider() {
    const session = await getServerSession(authOptions);

    return <></>
    
}