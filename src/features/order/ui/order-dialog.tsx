import { Button } from '@/shared/ui/kit/button';
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/kit/dialog';
import { OrderForm } from './order-form';

interface OrderDialogProps {
  summaryTotal: number;
}

export const OrderDialog = ({ summaryTotal }: OrderDialogProps) => {
  return (
    <Dialog>
      <form>
        {summaryTotal > 0 && (
          <DialogTrigger
            render={
              <Button variant="default" className="min-w-[140px]">
                Оформить
              </Button>
            }
          />
        )}

        <DialogContent className="pt-6 sm:max-w-sm">
          <OrderForm />
        </DialogContent>
      </form>
    </Dialog>
  );
};
