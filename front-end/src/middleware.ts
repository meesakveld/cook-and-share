import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

// Define the protected routes
export default withAuth(
    // Default handler
    function middleware(req) {
        // console.log(` ⚑ [Middleware] (${req.method} ${req.nextUrl.pathname}) Default handler`);
    },
    {
        callbacks: {
            authorized: ({ req, token }) => {
                console.log(` ⚑ [Middleware] (${req.method} ${req.nextUrl.pathname}) AUTH: Checking for authorization`);

                // Check if the requested path is in protectedRoutes
                const isProtectedRoute = [
                    "/recipes/add",
                    "/recipes/edit",
                    "/recipes/delete",
                    "/account",
                    "/dashboard",
                ].some(route => req.nextUrl.pathname.startsWith(route));

                if (isProtectedRoute) {
                    console.log(` ⚑ [Middleware] (${req.method} ${req.nextUrl.pathname}) AUTH: Route is protected`);
                    if (!token) {
                        console.error(` ⚑ [Middleware] (${req.method} ${req.nextUrl.pathname}) AUTH: User is not authorized`);
                        return false;
                    }
                    console.log(` ⚑ [Middleware] (${req.method} ${req.nextUrl.pathname}) AUTH: User is authorized`);
                    return true;
                }
                // Allow access to all other routes
                return true;
            },
        },
    }
);

// Specify the matcher for protected routes
export const config = {
    matcher: [
        '/recipes/add',
        '/recipes/edit',
        '/recipes/delete',
        '/account',
        '/dashboard',
    ]
};