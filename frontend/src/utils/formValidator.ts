import { CustomerProps } from '@/components/Customer';

const validations = {
  cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  telephone: /^\(\d{2}\) \d{5}-\d{4}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};


export const validateForm: (formData, validations) => {
  const errors: Record<string, string> = {};

  for (const field in validations) {
    const regex = validations[field];
    if (!regex.test(formData[field])) {
      errors[field] = `O campo ${field} está inválido!`;
    }
  }

  return errors;
};
