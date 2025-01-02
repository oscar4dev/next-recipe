/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
     remotePatterns: [
       {
         protocol: "http",
         hostname: "forkify-api.herokuapp.com",
         port: "",
         pathname: "/images/**",
       },
     ],
   },
 };
 
 export default nextConfig;