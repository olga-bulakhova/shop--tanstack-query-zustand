import { ContentList } from '@/shared/ui/content-list';

import { CartItem } from './cart-item';
import type { ICartItem } from '../types/cart.types';

interface CardListProps {
  cartList: ICartItem[];
}

export const CartList = ({ cartList }: CardListProps) => {
  return (
    <ContentList
      data={cartList}
      renderItem={(product) => <CartItem product={product} />}
      emptyMessage={
        <div className="p-4 text-center text-gray-500">
          Your shopping card is empty
        </div>
      }
      listClassName="px-4 md:px-12 py-6 divide-y divide-solid divide-brand-border"
      rowKey={(product) => product.id}
    />
  );
};
