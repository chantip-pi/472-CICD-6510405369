import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'standalone',
    env: {
        NEXT_PUBLIC_STUDENT_ID: process.env.NEXT_PUBLIC_STUDENT_ID,
        NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
      },
};

export default nextConfig;
