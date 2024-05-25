import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css'; // Importar los estilos de AOS
import Aos from 'aos'; // Importar la funcionalidad de AOS
import ProductForm from './ProductForm';
import ProductList from './ProductList';

interface Product {
  name: string;
  price: number;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    Aos.init({
      duration: 1000, // Duración de 1 segundo
      once: true,     // Animar solo una vez
    });
  }, []);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-white">Lista de Pagos de Productos</h1>
      <div className="row justify-content-center">
        <div className="col-md-6" data-aos="fade-up">
          <ProductForm addProduct={addProduct} total={total} />
        </div>
      </div>
      <div data-aos="fade-up">
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default App;
