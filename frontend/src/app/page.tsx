'use client'
import React, { useState, useEffect } from 'react';
import Customer from '../components/Customer';
import Image from 'next/image';

interface CustomerData {
  id: number;
  attributes: {
    name: string;
    email: string;
    cpf: string;
    telephone: string;
    status: string;
  };
}

function App() {
  const [customers, setCustomers] = useState<CustomerData[]>([]);

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
      <section className='flex justify-start items-center gap-5'>
        <Image className="w-[3rem]" src={"/user.svg"} alt="logo" width={1000} height={1000} />
        <h1 className='font-semibold text-3xl'>Painel de Clientes</h1>
      </section>
      <hr />
      <section>
        <section className='flex space-y-4 justify-between items-center'>
          <section className='grid grid-cols-1 gap-4'>
            <h3 className='font-medium text-xl '>Listagem de usuários</h3>
            <p>Escolha um cliente para visualizar os detalhes</p>
          </section>
          <button className='px-4 border py-2 border-amber-500 mr-10 rounded-md bg-amber-500 text-white'>Novo cliente</button>
        </section>
        {customers.map(customer => (
          <Customer
            key={customer.id}
            id={customer.id}
            name={customer.attributes.name}
            email={customer.attributes.email}
            cpf={customer.attributes.cpf}
            telephone={customer.attributes.telephone}
            status={customer.attributes.status}
          />
        ))}
      </section>
      <p className='font-extralight'>Exibindo {customers.length} clientes</p>
    </main>
  );
}

export default App;