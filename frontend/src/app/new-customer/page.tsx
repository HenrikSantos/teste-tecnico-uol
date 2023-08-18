'use client'

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
      const response = await axios.post("http://localhost:1337/api/customers", {
        data: {
          name: customer.name,
          email: customer.email,
          cpf: customer.cpf,
          telephone: customer.telephone,
          status: customer.status
        }
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <main className='w-8/12 mx-auto'>
      <h3 className='text-2xl font-semibold'>Novo usuário</h3>
      <p>Informe os campos a seguir para criar novo usuário:</p>
      <CustomerForm customer={customer} setCustomer={setCustomer} />
      <section className='w-3/12 flex justify-between'>
        <button className='w-full px-8 py-2 border border-amber-500 mr-10 rounded-md bg-amber-500 text-white' type="button" onClick={handleSubmit}>Criar</button>
        <Link href={"/"} className='w-full border border-amber-500 px-8 py-2 rounded-md text-amber-500 hover:bg-amber-500 hover:text-white text-center'>
          Voltar
        </Link>
      </section>
    </main>
  );
}
