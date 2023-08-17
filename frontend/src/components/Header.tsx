import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="w-full py-10 bg-zinc-800">
      <Image className="w-1/12 mx-auto" src={"/logo.webp"} alt="logo" width={1000} height={1000}/>
    </div>
  )
}
