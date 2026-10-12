import { Rating } from '@/shared/ui/rating';
import { BackButton } from '@/shared/ui/back-button';
import type { Product } from '@/features/products/types/products.types';
import { AddToCartButton } from '@/features/cart';

interface ProductDetailCardProps {
  product: Product;
}

export const ProductDetailCard = ({ product }: ProductDetailCardProps) => {
  return (
    <>
      <BackButton className="mb-4" fallbackPath="/products" />
      <h1 className="mb-7 text-3xl font-bold">{product.title}</h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex max-h-[500px] items-start justify-center overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full max-h-[500px] w-full rounded-lg object-contain"
            loading="lazy"
          />
        </div>
        <div>
          <div className="rounded-[20px] bg-[#f0f4fb] p-5">
            <div className="mb-2.5 text-3xl font-bold">€ {product.price}</div>
            <div className="mb-2.5 flex">
              <Rating value={product.rating} />
            </div>

            <div className="mb-4 leading-relaxed text-gray-700">
              {product.description}
            </div>
            <AddToCartButton product={product} size="lg" />
          </div>
        </div>
      </div>
    </>
  );
};
