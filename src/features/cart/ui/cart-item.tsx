import { href, Link } from "react-router-dom";
import type { ICartItem } from "../api/use-cart";
import { useCart } from "../api/use-cart";
import { ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import { TrashIcon } from "@/shared/icons/trash-icon";
import { QuantitySelector } from "./quantity-selector";

interface CartItemProps {
  product: ICartItem;
}

export const CartItem = ({ product }: CartItemProps) => {
  const { removeProduct } = useCart();

  const itemTotalPrice = product.price * product.quantity;

  return (
    <div className="flex flex-col gap-4 py-4 md:grid md:grid-cols-[1fr_4fr_2fr_2fr_1fr] md:items-center">
      <div className="flex items-center gap-4 md:contents">
        <div className="flex-shrink-0">
          <Link to={href(ROUTES.PRODUCT, { productId: String(product.id) })}>
            <img
              src={product.thumbnail}
              alt={product.title}
              width={58}
              height={58}
              className="object-cover"
              loading="lazy"
            />
          </Link>
        </div>

        <div className="flex min-w-0 flex-1 items-center md:flex-initial">
          <Link
            className="line-clamp-2 font-medium text-gray-900 hover:underline md:truncate"
            to={href(ROUTES.PRODUCT, { productId: String(product.id) })}
          >
            {product.title}
          </Link>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between gap-2 md:mt-0 md:contents">
        <div className="flex items-center">
          <QuantitySelector
            productId={product.id}
            quantity={product.quantity}
          />
        </div>

        <div className="flex items-center font-semibold text-gray-900 md:justify-start">
          € {itemTotalPrice.toFixed(2)}
        </div>

        <div className="flex items-center justify-end">
          <Button
            variant="ghost"
            onClick={() => removeProduct(product.id)}
            className="p-2 text-gray-400 transition-colors hover:text-brand-secondary"
            title="Remove item"
          >
            <TrashIcon size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};
