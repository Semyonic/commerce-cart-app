import { Product } from './Product';

export interface Cart {
  quantity: number;
  total: number;
  product: Product[];
}
