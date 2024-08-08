/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"cdn.dnaindia.com"
            }
        ]   
    }
};

export default nextConfig;
