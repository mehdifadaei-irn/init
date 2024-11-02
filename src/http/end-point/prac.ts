import { httpService } from "../httpService";
import type { product } from "../types/product.types";

export const DataServicePath = "/api/v1/data";

export async function getListAllAddresses(params: any, signal?: AbortSignal) {
  return httpService.get<product[]>(`/products`, {
    signal,
  });
}
