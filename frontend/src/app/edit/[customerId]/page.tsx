'use client';
import { useState, useEffect } from 'react';
import CustomerForm from '@/components/CustomerForm';
import { CustomerProps } from '@/components/Customer';
import axios from 'axios';
import Link from 'next/link';

interface PageInterface {
  params: {
    customerId: string
  }
}

export default function Page({ params }: PageInterface) {
  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState<CustomerProps>({
    name: '',
    email: '',
    cpf: '',
    telephone: '',
    status: '',
  });

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/customers/${params.customerId}`);
        setCustomer(data);
        setLoading(false);
      } catch (error) {
        window.alert('Error fetching customer data: ' + error);
        setLoading(false);
      }
    };

    setLoading(true);
    fetchCustomer();
  }, [params.customerId]);

  const handleSubmit = async () => {
    for (const [key, value] of Object.entries(customer)) {
      if (!value) {
        window.alert(`Erro: o campo ${key} está vazio!`);
        return;
      }
      if (key === 'cpf') {
        const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!regex.test(value)) {
          window.alert('Erro: o cpf está inválido!');
          return;
        }
      }
      if (key === 'telephone') {
        const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
        if (!regex.test(value)) {
          window.alert('Erro: o telefone está inválido!');
          return;
        }
      }
      if (key === 'email') {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(value)) {
          window.alert('Erro: o email está inválido!');
          return;
        }
      }
    }
    try {
      await axios.put(`http://localhost:3001/customers/${params.customerId}`, {
        name: customer.name,
        email: customer.email,
        cpf: customer.cpf,
        telephone: customer.telephone,
        status: customer.status
      });
      window.alert('Cliente atualizado com sucesso!');
    } catch (error) {
      window.alert('Ocorreu um erro ao atualizar o cliente, certifique-se que os dados estão corretos e que o servidor esteja rodando' + error);
    }
  };


  return (
    <>
      {loading ? (
        <main className="mx-auto w-8/12 text-center text-3xl">
          Loading...
        </main>
      ) : (
        <main className='mx-auto w-8/12'>
          <h3 className='text-2xl font-semibold'>Editar usuário</h3>
          <p>Altere os campos a seguir para editar o usuário:</p>
          <section className='xl:w-3/12'>
            <CustomerForm customer={customer} setCustomer={setCustomer} />
            <section className='flex justify-between'>
              <button id="submitBtn" className='mr-10 w-full rounded-md border border-amber-500 bg-amber-500 px-8 py-2 text-white' type="button" onClick={handleSubmit}>Editar</button>
              <Link id="backBtn" href={'/'} className='w-full rounded-md border border-amber-500 px-8 py-2 text-center text-amber-500 hover:bg-amber-500 hover:text-white'>
                Voltar
              </Link>
            </section>
          </section>
        </main>
      )}
    </>);
}