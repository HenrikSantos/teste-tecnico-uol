import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <section className="w-full py-10 bg-zinc-800">
        <Image className="w-1/12 mx-auto" src={"/logo.webp"} alt="logo" width={1000} height={1000} />
      </section>
      <section className='w-8/12 mx-auto mt-20 mb-10 space-y-10'>
        <section className='flex justify-start items-center gap-5 '>
          <Image className="w-[3rem]" src={"/user.svg"} alt="logo" width={1000} height={1000} />
          <h1 className='font-semibold text-3xl'>Painel de Clientes</h1>
        </section>
        <hr />
      </section>
    </header>
  )
}
