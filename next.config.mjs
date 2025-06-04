import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fzuxxxhgqwm9izz9.public.blob.vercel-storage.com',
        pathname: '**',
      },
    ],
  },
}

export default withPayload(nextConfig)
