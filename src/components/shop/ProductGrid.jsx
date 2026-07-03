import { ProductCard } from "../ui/ProductCard";

export function ProductGrid({ products }) {
  return (
    <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
