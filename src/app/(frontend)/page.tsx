import React from 'react'
import './globals.css'
import SubscriberForm from './components/SubscriberForm'
import Image from 'next/image'

/**
 *
 * @returns Home page component for / endpoint
 */
export default async function HomePage() {
  return (
    <div className="home">
      <div className="content">
        <Image
          src="https://fzuxxxhgqwm9izz9.public.blob.vercel-storage.com/astoria_horror_club_logo_COMPRESSED-MLhBXHfP0iqlcMqxilZo5opRscHZRd.png"
          alt="astoria horror club logo"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
