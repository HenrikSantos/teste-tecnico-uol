'use client'
import { useState, useEffect } from "react"
import CustomerForm from "@/components/CustomerForm"
import { CustomerProps } from "@/components/Customer"
import axios from "axios"
import Link from "next/link"

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
        window.alert("Error fetching customer data:" + error);
        setLoading(false);
      }
    };

    setLoading(true);
    fetchCustomer();
  }, [params.customerId]);

  const handleSubmit = async () => {
    if (!customer.status) {
      window.alert("Altere o status")
      return;
    }
    if (Object.values(customer).some((el) => !el)) {
      window.alert("Algum campo está vazio!")
    }
    try {
      const response = await axios.put(`http://localhost:3001/customers/${params.customerId}`, {
        name: customer.name,
        email: customer.email,
        cpf: customer.cpf,
        telephone: customer.telephone,
        status: customer.status
      });

      window.alert('Cliente atualizado com sucesso!');
    } catch (error) {
      window.alert('Ocorreu um erro ao atualizar o cliente, certifique-se que os dados estão corretos e que o servidor esteja rodando');
    }
  };


  return (
    <>
      {loading ? (
        <main className="w-8/12 text-center mx-auto text-3xl">
          Loading...
        </main>
      ) : (
        <main className='w-8/12 mx-auto'>
          <h3 className='text-2xl font-semibold'>Editar usuário</h3>
          <p>Altere os campos a seguir para editar o usuário:</p>
          <CustomerForm customer={customer} setCustomer={setCustomer} />
          <section className='w-3/12 flex justify-between'>
            <button id="submitBtn" className='w-full px-8 py-2 border border-amber-500 mr-10 rounded-md bg-amber-500 text-white' type="button" onClick={handleSubmit}>Editar</button>
            <Link id="backBtn" href={"/"} className='w-full border border-amber-500 px-8 py-2 rounded-md text-amber-500 hover:bg-amber-500 hover:text-white text-center'>
              Voltar
            </Link>
          </section>
        </main>
      )}
    </>)
}