/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http', // or 'https' depending on your setup
                hostname: '127.0.0.1',
                port: '1337', // specify the port if needed, or remove if it's served on the default port
                pathname: '/**',
            },
        ],
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        API_TOKEN_AUTH: process.env.API_TOKEN_AUTH,
    }
};

export default nextConfig;
