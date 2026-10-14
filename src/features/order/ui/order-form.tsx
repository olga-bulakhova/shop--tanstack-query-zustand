import { motion, AnimatePresence } from 'motion/react';
import { FormInput } from '@/shared/ui/form-input';
import { useAddOrderForm } from '../model/use-order-form';
import { Button } from '@/shared/ui/kit/button';

export const OrderForm = () => {
  const { onSubmit, handleSubmit, isSubmitSuccessful, ...form } =
    useAddOrderForm();

  return (
    <AnimatePresence mode="wait">
      {isSubmitSuccessful ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex flex-col items-center gap-2 py-6 text-center"
        >
          <h2 className="text-lg font-semibold">Спасибо за заказ!</h2>
          <p className="text-muted-foreground">
            Мы приняли вашу заявку и скоро свяжемся с вами.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-1"
        >
          <FormInput
            id="name"
            label="Имя"
            placeholder="Введите имя"
            error={form.errors.name?.message}
            {...form.register('name')}
          />

          <FormInput
            id="address"
            label="Адрес"
            placeholder="Введите адрес"
            error={form.errors.address?.message}
            {...form.register('address')}
          />

          <FormInput
            id="phone"
            label="Телефон"
            type="tel"
            placeholder="Введите телефон"
            error={form.errors.phone?.message}
            {...form.register('phone')}
          />

          <Button
            type="submit"
            variant="default"
            className="mt-2 w-full"
            disabled={form.isSubmitting}
          >
            {form.isSubmitting ? 'Отправка...' : 'Оформить'}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
};
