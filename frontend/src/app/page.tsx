'use client'
import React, { useState, useEffect } from 'react';
import Customer from '../components/Customer';
import { CustomerProps } from '../components/Customer';
import Link from 'next/link';

interface CustomerFetch {
  id: number;
  attributes: {
    name: string;
    email: string;
    cpf: string;
    telephone: string;
    status?: "" | "Ativo" | "Inativo" | "Aguardando ativação" | "Desativado";
  }
}

function App() {
  const [customers, setCustomers] = useState<CustomerProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await fetch('http://localhost:1337/api/customers');

        if (!response.ok) {
          throw new Error('Erro ao buscar os clientes');
        }

        const data = await response.json();

        setCustomers(data.data.map((el: CustomerFetch) => ({ id: el.id, ...el.attributes })));
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    }

    fetchCustomers();
  }, []);

  return (
    <>
      {
        loading ? (
          <main className="w-8/12 text-center mx-auto text-3xl" >
            Loading...
          </main>
        ) : (
          <main className='w-8/12 mx-auto my-20 space-y-10'>
            <section>
              <section className='flex space-y-4 justify-between items-center'>
                <section className='grid grid-cols-1 gap-4'>
                  <h3 className='font-medium text-xl '>Listagem de usuários</h3>
                  <p>Escolha um cliente para visualizar os detalhes</p>
                </section>
                <Link id='novoCliente' href={"/new-customer"} className='px-4 border py-2 border-amber-500 mr-10 rounded-md bg-amber-500 text-white'>Novo cliente</Link>
              </section>
              {customers.map((customer: CustomerProps) => <Customer {...customer} key={customer.id} />)}
            </section>
            <p className='font-extralight'>Exibindo {customers.length} clientes</p>
          </main>
        )
      }
    </>
  );
}

export default App;