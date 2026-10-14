'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { cartActions } from '@/features/cart/api/use-cart-store';

const phoneRegex = /^\+?[0-9]{10,15}$/;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Имя слишком короткое' })
    .max(50, { message: 'Имя слишком длинное' }),
  address: z.string().trim().min(5, { message: 'Введите полный адрес' }),
  phone: z
    .string()
    .min(1, { message: 'Введите номер телефона' })
    .regex(phoneRegex, { message: 'Некорректный номер телефона' }),
});

type OrderFormInputs = z.infer<typeof schema>;

export const useAddOrderForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<OrderFormInputs>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      name: '',
      address: '',
      phone: '',
    },
  });

  const onSubmit: SubmitHandler<OrderFormInputs> = async (data) => {
    try {
      await Promise.resolve(data);
      cartActions.clear();
    } catch {
      setError('root', { message: 'Не удалось оформить заказ' });
    }
  };

  return {
    onSubmit,
    handleSubmit,
    errors,
    register,
    isSubmitting,
    isSubmitSuccessful,
  };
};
