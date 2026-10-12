import { useCart } from "../api/use-cart";

interface QuantitySelectorProps {
  productId: number;
  quantity: number;
}

const BTN_CLASS =
  "px-3 py-1.5 text-gray-500 hover:bg-gray-50 active:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-lg font-medium cursor-pointer";

export const QuantitySelector = ({
  productId,
  quantity,
}: QuantitySelectorProps) => {
  const { incrementQuantity, decrementQuantity } = useCart();

  return (
    <div className="flex w-max items-center overflow-hidden rounded-full border border-solid border-brand-border bg-white select-none">
      <button
        type="button"
        onClick={() => decrementQuantity(productId)}
        disabled={quantity <= 1}
        className={BTN_CLASS}
      >
        −
      </button>

      <span className="min-w-[36px] px-2 text-center text-sm font-semibold text-gray-800">
        {quantity}
      </span>

      <button
        type="button"
        onClick={() => incrementQuantity(productId)}
        className={BTN_CLASS}
      >
        +
      </button>
    </div>
  );
};
