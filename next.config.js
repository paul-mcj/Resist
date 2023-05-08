/** @type {import('next').NextConfig} */
const nextConfig = {
     reactStrictMode: true,
     images: {
          remotePatterns: [
               {
                    protocol: "https",
                    hostname: "hips.hearstapps.com",
               },
               {
                    protocol: "https",
                    hostname: "www.wdc.govt.nz",
               },
          ],
     },
     //  images: { domains: ["hips.hearstapps.com", "www.wdc.govt.nz"] },
};

module.exports = nextConfig;

// If users are constantly uploading new images to the site and you want to dynamically update the allowed domains for the `next/image` component, you can update the `images` property in your `next.config.js` file programmatically by reading the allowed domains from a database or configuration file.

// One approach could be to create an API endpoint that returns the list of allowed domains, and then use a server-side function in your `next.config.js` file to fetch the allowed domains from this endpoint and update the `images` property accordingly.

// Here's an example of how you could do this:

// 1. Create an API endpoint that returns the list of allowed domains:

// ```javascript
// // pages/api/allowed-domains.js

// export default async function handler(req, res) {
//   // Fetch the list of allowed domains from the database or configuration file
//   const allowedDomains = ['example.com', 'example.net'];

//   res.status(200).json({ allowedDomains });
// }
// ```

// 2. In your `next.config.js` file, define a server-side function that fetches the allowed domains from the API endpoint and updates the `images` property:

// ```javascript
// // next.config.js

// const fetch = require('node-fetch');

// async function getAllowedDomains() {
//   const res = await fetch('http://localhost:3000/api/allowed-domains');
//   const data = await res.json();
//   return data.allowedDomains;
// }

// module.exports = {
//   images: {
//     domains: getAllowedDomains(),
//   },
// };
// ```

// This will fetch the list of allowed domains from the API endpoint and use it to configure the `next/image` component. When new domains are added or removed, the API endpoint can be updated to reflect these changes, and the `next.config.js` file will automatically pick up the new list of allowed domains on the next build.
