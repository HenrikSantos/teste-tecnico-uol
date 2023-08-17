'use client'
import React, { useState, useEffect } from 'react';
import Customer from '../components/Customer';
import Image from 'next/image';
import { CustomerProps } from '../components/Customer';

function App() {
  const [customers, setCustomers] = useState<CustomerProps[]>([]);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await fetch('http://localhost:1337/api/customers');

        if (!response.ok) {
          throw new Error('Erro ao buscar os clientes');
        }

        const data = await response.json();
        setCustomers(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCustomers();
  }, []);

  return (
    <main className='w-8/12 mx-auto my-20 space-y-10'>
      <section>
        <section className='flex space-y-4 justify-between items-center'>
          <section className='grid grid-cols-1 gap-4'>
            <h3 className='font-medium text-xl '>Listagem de usuários</h3>
            <p>Escolha um cliente para visualizar os detalhes</p>
          </section>
          <button className='px-4 border py-2 border-amber-500 mr-10 rounded-md bg-amber-500 text-white'>Novo cliente</button>
        </section>
        {customers.map(customer => (
          <Customer {...customer} key={customer.id} />
        ))}
      </section>
      <p className='font-extralight'>Exibindo {customers.length} clientes</p>
    </main>
  );
}

export default App;