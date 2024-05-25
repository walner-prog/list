// src/App.tsx
import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import LoadingScreen from './LoadingScreen';

interface Product {
  name: string;
  price: number;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Simula un retraso en la carga de la página
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Cambia este valor al tiempo que necesites
  }, []);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="container mt-5">
          <div className=" text-white text-center py-4 mb-4 rounded">
            <h1 className="display-4">Lista de Pagos de Productos</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6" data-aos="fade-up">
              <ProductForm addProduct={addProduct} total={total} />
            </div>
          </div>
          <div data-aos="fade-up">
            <ProductList products={products} />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
