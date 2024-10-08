/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.puma.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "static.nike.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "www.adidas.co.id",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
