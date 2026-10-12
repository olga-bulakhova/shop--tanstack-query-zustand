import { useState, useEffect } from 'react';
import { createGStore } from 'create-gstore';
import type { ICartItem, ICartResponse } from '../types/cart.types';
import type { Product } from '@/features/products/types/products.types';

const CART_KEY = 'shopping-cart';

// Тип нашего стора теперь — это Map, где ключ — id товара, а значение — сам товар
type CartMap = Map<number, ICartItem>;

export const useCart = createGStore(() => {
  const [cartMap, setCartMap] = useState<CartMap>(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      // Восстанавливаем Map из сохраненного массива пар [key, value]
      return saved ? new Map(JSON.parse(saved)) : new Map();
    } catch {
      return new Map();
    }
  });

  // Сохраняем в localStorage, сериализуя Map в массив записей
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify([...cartMap.entries()]));
  }, [cartMap]);

  const addProduct = (product: Product) => {
    setCartMap((prevMap) => {
      const newMap = new Map(prevMap); // Создаем копию для иммутабельности
      const exists = newMap.get(product.id);

      if (exists) {
        // O(1) обновление существующего товара
        newMap.set(product.id, {
          ...exists,
          quantity: exists.quantity + 1,
        });
      } else {
        // O(1) добавление нового товара
        newMap.set(product.id, {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          total: product.price,
          thumbnail: product.thumbnail,
        });
      }
      return newMap;
    });
  };

  const removeProduct = (productId: number) => {
    setCartMap((prevMap) => {
      const newMap = new Map(prevMap);
      newMap.delete(productId); // O(1) мгновенное удаление без .filter()
      return newMap;
    });
  };

  const incrementQuantity = (productId: number) => {
    setCartMap((prevMap) => {
      const newMap = new Map(prevMap);
      const item = newMap.get(productId);
      if (item) {
        newMap.set(productId, { ...item, quantity: item.quantity + 1 });
      }
      return newMap;
    });
  };

  const decrementQuantity = (productId: number) => {
    setCartMap((prevMap) => {
      const newMap = new Map(prevMap);
      const item = newMap.get(productId);

      if (!item) return prevMap;

      if (item.quantity <= 1) {
        newMap.delete(productId); // Авто-удаление, если количество стало 0
      } else {
        newMap.set(productId, { ...item, quantity: item.quantity - 1 });
      }
      return newMap;
    });
  };

  const clear = () => {
    setCartMap(new Map());
  };

  const recalculateCart = (): ICartResponse => {
    // Для пересчета просто итерируемся по значениям карты через .values()
    let total = 0;
    let totalQuantity = 0;

    for (const item of cartMap.values()) {
      total += (item.price || 0) * item.quantity;
      totalQuantity += item.quantity;
    }

    return {
      total,
      totalProducts: cartMap.size, // У Map есть быстрое нативное свойство size
      totalQuantity,
    };
  };

  return {
    // Наружу отдаем массив, чтобы не ломать верстку в компонентах списка (CartList)
    cartList: [...cartMap.values()],
    addProduct,
    removeProduct,
    incrementQuantity,
    decrementQuantity,
    clear,
    recalculateCart,
  };
});
