'use client'
import React, { useState, useEffect } from 'react';
import Customer from '../components/Customer';

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
    <main className='w-8/12 mx-auto my-20'>
      <section className='my-3'>
        <h1 className='font-bold text-2xl'>Painel de Clientes</h1>
      </section>
      <hr />
      <section className='my-3'>
        <h3 className='font-medium text-xl my-3'>Listagem de usuários</h3>
        <p className='my-3'>Escolha um cliente para visualizar os detalhes</p>
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

    </main>
  );
}

export default App;