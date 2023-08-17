import React from 'react';

export interface CustomerProps {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  telephone: string;
  status?: "" | "Ativo" | "Inativo" | "Aguardando ativação" | "Desativado";
}

const Customer: React.FC<CustomerProps> = ({
  id,
  name,
  email,
  cpf,
  telephone,
  status
}) => {
  const statusColor = () => {
    switch (status) {
      case 'Ativo':
        return 'bg-green-500';
      case 'Aguardando ativação':
        return 'bg-yellow-500';
      case 'Inativo':
        return 'bg-red-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="border my-6 py-4 px-6 flex items-center justify-between rounded-sm text-zinc-500">
      <div className="w-3/12">
        <p className='text-black'>{name}</p>
        <p>Email: {email}</p>
      </div>
      <div className='w-3/12'>
        <p>CPF: {cpf}</p>
        <p>Telefone: {telephone}</p>
      </div>
      <div className='w-3/12 flex items-center gap-2'>
        <div className={`rounded-full w-4 h-4 ${statusColor()}`} />
        <p>{status}</p>
      </div>
      <button
        className="
          border border-amber-500 border-x-2 px-8 py-2 rounded text-amber-500 text-sm
          hover:bg-amber-500 hover:text-white
        "
        type="button"
      >
        Editar
      </button>
    </div>
  );
};

export default Customer;
