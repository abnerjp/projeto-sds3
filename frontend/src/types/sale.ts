import { Seller } from "./seller";

export interface Sale {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: Seller;
}

export interface SalePage {
  content?: Sale[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size?: number;
  number: number;
  first: boolean;
  numberOfElements?: number;
  empty?: false;
}

export interface SaleSum {
  sellerName: string;
  sum: number;
}

export interface SaleSuccess {
  sellerName: string;
  visited: number;
  deals: number;
}
