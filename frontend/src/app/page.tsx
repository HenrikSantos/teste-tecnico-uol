'use client';

import React, { useState, useEffect } from 'react';
import Customer from '../components/Customer';
import { CustomerProps } from '../components/Customer';
import Link from 'next/link';
import axios from 'axios';

function App() {
  const [customers, setCustomers] = useState<CustomerProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const { data } = await axios.get('http://localhost:3001/customers');
        setCustomers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCustomers();
  }, []);

  return (
    <main className="mx-auto my-20 w-8/12">
      {
        loading ? (
          <p className="mx-auto w-8/12 text-center text-3xl" >
            Loading...
          </p>
        ) : (
          <section className='space-y-10'>
            <section>
              <section className='flex items-center justify-between space-y-4'>
                <section className='grid grid-cols-1 gap-4'>
                  <h3 className='text-xl font-medium '>Listagem de usuários</h3>
                  <p>Escolha um cliente para visualizar os detalhes</p>
                </section>
                <Link id='novoCliente' href={'/new-customer'} className='mr-10 rounded-md border border-amber-500 bg-amber-500 px-4 py-2 text-white'>Novo cliente</Link>
              </section>
              {customers.map((customer: CustomerProps) => <Customer {...customer} key={customer.id} />)}
            </section>
            <p className='font-extralight'>Exibindo {customers.length} clientes</p>
          </section>
        )
      }
    </main>
  );
}

export default App;