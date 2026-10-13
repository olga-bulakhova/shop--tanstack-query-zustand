import type { ICartResponse } from '../types/cart.types';

interface CartHeaderProps {
  summary: ICartResponse;
}

export const CartHeader = ({ summary }: CartHeaderProps) => {
  return (
    <div className="relative -top-[1px] -left-[1px] flex w-[calc(100%+2px)] items-center justify-between rounded-[20px] border border-solid border-brand-border px-12 py-6">
      <div className="flex items-center gap-2">
        Total:{' '}
        <span className="text-[20px] font-bold">
          € {summary.total.toFixed(2)}
        </span>
      </div>
    </div>
  );
};
