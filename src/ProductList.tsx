// src/ProductList.tsx
import React from 'react';

interface Product {
  name: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

<style>
  
</style>
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="card p-4 shadow-sm mt-4 list">
      <h2 className="text-primary mb-4">Lista de Productos</h2>
      <ul className="list-group">
        {products.map((product, index) => (
          <li key={index} className="list-group-item">
            {product.name}: ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
