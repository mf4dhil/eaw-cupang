// deno-lint-ignore-file no-explicit-any
interface ProductInfo {
  id: number;
  jumlah: number;
}

interface OrderRequest {
  product: ProductInfo[];
  // ... tambahkan properti lainnya sesuai kebutuhan
}

function isValidOrderRequest(data: any): data is OrderRequest {
  if (typeof data === 'object' && data !== null) {
    if (Array.isArray(data) &&
        data.every((product: any) => {
          return typeof product.id === 'number' && typeof product.jumlah === 'number';
        })) {
      return true;
    }
  }
  return false
}

export default isValidOrderRequest