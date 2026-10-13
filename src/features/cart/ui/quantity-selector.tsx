// 🟢 ИСПРАВЛЕНО: Импортируем атомарные экшены инкремента и декремента из Zustand-стора
import { incrementCartItem, decrementCartItem } from '../api/use-cart-store';

interface QuantitySelectorProps {
  productId: number;
  quantity: number;
}

const BTN_CLASS =
  'px-3 py-1.5 text-gray-500 hover:bg-gray-50 active:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-lg font-medium cursor-pointer';

/**
 * 🛸 UI КОМПОНЕНТ: Селектор управления количеством единиц товара в корзине
 */
export const QuantitySelector = ({
  productId,
  quantity,
}: QuantitySelectorProps) => {
  // 🟢 ИСПРАВЛЕНО: Извлекаем экшены как стабильные ссылки (0 лишних ререндеров при кликах!)
  const increment = incrementCartItem();
  const decrement = decrementCartItem();

  return (
    <div className="flex w-max items-center overflow-hidden rounded-full border border-solid border-brand-border bg-white select-none">
      <button
        type="button"
        onClick={() => decrement(productId)}
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
        onClick={() => increment(productId)}
        className={BTN_CLASS}
      >
        +
      </button>
    </div>
  );
};
