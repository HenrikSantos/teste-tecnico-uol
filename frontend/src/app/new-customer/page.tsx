'use client'

import React, { useState } from 'react';
import CustomerForm from '@/components/CustomerForm';
import { CustomerProps } from '../../components/Customer';

export default function Page() {
  const [customer, setCustomer] = useState<CustomerProps>({
    name: '',
    email: '',
    cpf: '',
    telephone: '',
    status: '',
  });

  return (
    <main className='w-8/12 mx-auto'>
      <h3 className='text-2xl font-semibold'>Novo usuário</h3>
      <p>Informe os campos a seguir para criar novo usuário:</p>
      <CustomerForm customer={customer} setCustomer={setCustomer} />
      <section className='w-3/12 flex justify-between'>
        <button className='w-full px-8 py-2 border border-amber-500 mr-10 rounded-md bg-amber-500 text-white' type="button">Criar</button>
        <button className='w-full border border-amber-500 px-8 py-2 rounded-md text-amber-500 hover:bg-amber-500 hover:text-white' type="button">Voltar</button>
      </section>
    </main>
  );
}
