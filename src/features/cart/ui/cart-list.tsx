import { ContentList } from "@/shared/ui/content-list";
import type { ICartItem } from "../api/use-cart";
import { CartItem } from "./cart-item";

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
