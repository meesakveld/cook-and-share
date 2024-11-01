// middleware.ts

import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   console.log("Middleware function executed");
//   return NextResponse.redirect(new URL('/home', request.url))
// }

export default withAuth(
    // Default handler
    function middleware(req) {
        // You can add custom logic here if needed
        console.log("Middleware function executed");
    },
    {
        callbacks: {
            authorized: ({ req, token }) => {
                // Protect all routes under /dashboard
                if (req.nextUrl.pathname.startsWith("/recipes/add")) {
                    console.log("Checking if user is authorized to access this route");
                    if (!token) {
                        console.error("No token found, user is not authorized");
                        return false;
                    }
                    return true;
                }
                // Allow access to all other
                return true;
            },
        },
    }
);

// Specify the matcher for protected routes
export const config = {
    matcher: [
        "/recipes/add",
        "/recipes/edit",
        "/recipes/delete",
    ],
};