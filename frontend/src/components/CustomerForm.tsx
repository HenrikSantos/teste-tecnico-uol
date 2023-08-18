import React from 'react';
import { CustomerProps } from './Customer';
import InputMask from 'react-input-mask';

interface CustomerFormProps {
  customer: CustomerProps;
  setCustomer: React.Dispatch<React.SetStateAction<CustomerProps>>;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ customer, setCustomer }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };


  return (
    <form className='w-3/12'>
      <input
        className='w-full mx-auto p-3 border-2 border-zinc-300 rounded m-3'
        required
        type="text"
        name="name"
        value={customer.name}
        onChange={handleChange}
        placeholder="Nome"
      />

      <input
        className='w-full mx-auto p-3 border-2 border-zinc-300 rounded m-3'
        required
        type="email"
        name="email"
        value={customer.email}
        onChange={handleChange}
        placeholder="E-mail"
      />

      <InputMask
        className='w-full mx-auto p-3 border-2 border-zinc-300 rounded m-3'
        required
        mask="999.999.999-99"
        type="text"
        name="cpf"
        value={customer.cpf}
        onChange={handleChange}
        placeholder="CPF"
      />

      <InputMask
        className='w-full mx-auto p-3 border-2 border-zinc-300 rounded m-3'
        required
        mask="(99) 99999-9999"
        type="text"
        name="telephone"
        value={customer.telephone}
        onChange={handleChange}
        placeholder="Telefone"
      />

      <select
        className='w-full mx-auto p-3 border-2 border-zinc-300 rounded m-3 hover:cursor-pointer font-extralight'
        required
        name="status"
        value={customer.status}
        onChange={handleChange}
      >
        <option disabled selected value="">Status</option>
        <option value="Ativo">Ativo</option>
        <option value="Inativo">Inativo</option>
        <option value="Aguardando ativação">Aguardando ativação</option>
        <option value="Desativado">Desativado</option>
      </select>
    </form>
  );
}

export default CustomerForm;
