export interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

export interface ICartResponse {
  total: number;
  totalProducts: number;
  totalQuantity: number;
}
