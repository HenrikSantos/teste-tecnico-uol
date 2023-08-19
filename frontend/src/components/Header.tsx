import React from 'react';
import Image from 'next/image';

export default function Header() {
	return (
		<header>
			<section className="w-full bg-zinc-800 py-10">
				<Image className="mx-auto w-1/12" src={'/logo.webp'} alt="logo" width={1000} height={1000} />
			</section>
			<section className='mx-auto mb-10 mt-20 w-8/12 space-y-10'>
				<section className='flex items-center justify-start gap-5 '>
					<Image className="w-[3rem]" src={'/user.svg'} alt="logo" width={1000} height={1000} />
					<h1 className='text-3xl font-semibold'>Painel de Clientes</h1>
				</section>
				<hr />
			</section>
		</header>
	);
}
