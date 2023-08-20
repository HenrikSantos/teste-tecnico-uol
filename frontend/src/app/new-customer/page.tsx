'use client';

import React, { useState } from 'react';
import CustomerForm from '@/components/CustomerForm';
import { CustomerProps } from '../../components/Customer';
import Link from 'next/link';
import axios from 'axios';

export default function NewCustomer() {
  const [customer, setCustomer] = useState<CustomerProps>({
    name: '',
    email: '',
    cpf: '',
    telephone: '',
    status: '',
  });

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3001/customers', {
        name: customer.name,
        email: customer.email,
        cpf: customer.cpf,
        telephone: customer.telephone,
        status: customer.status
      });

      window.alert('Usuário criado com sucesso!');
    } catch (error) {
      window.alert('Ocorreu um erro ao criar um novo cliente, certifique-se que os dados estão corretos e que o servidor esteja rodando');
    }
  };


  return (
    <main className='mx-auto w-8/12'>
      <h3 className='text-2xl font-semibold'>Novo usuário</h3>
      <p>Informe os campos a seguir para criar novo usuário:</p>
      <CustomerForm customer={customer} setCustomer={setCustomer} />
      <section className='flex w-3/12 justify-between'>
        <button id='submitBtn' className='mr-10 w-full rounded-md border border-amber-500 bg-amber-500 px-8 py-2 text-white' type="submit" onClick={handleSubmit}>Criar</button>
        <Link id='backBtn' href={'/'} className='w-full rounded-md border border-amber-500 px-8 py-2 text-center text-amber-500 hover:bg-amber-500 hover:text-white'>
          Voltar
        </Link>
      </section>
    </main>
  );
}
