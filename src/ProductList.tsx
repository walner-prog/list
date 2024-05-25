import React from 'react';

interface Product {
  name: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="card p-4 shadow-sm mt-4">
      <h2 className="text-primary mb-4">Lista de Productos</h2>
      <ul className="list-group">
        {products.map((product, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center" data-aos="fade-up">
            <span>{product.name}</span>
            <span className="badge bg-primary rounded-pill">${product.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
