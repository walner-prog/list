import React, { useState } from 'react';

interface ProductFormProps {
  addProduct: (product: { name: string; price: number }) => void;
  total: number;
}

const ProductForm: React.FC<ProductFormProps> = ({ addProduct, total }) => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const priceNumber = parseFloat(price);
    if (name && !isNaN(priceNumber) && priceNumber > 0) {
      addProduct({ name, price: priceNumber });
      setName('');
      setPrice('');
      setError('');
    } else {
      setError('El precio ingresado no es válido');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 mb-4 shadow-sm">
      <h3 className="text-primary mb-4">Total: ${total.toFixed(2)}</h3>
      <div className="mb-3">
        <label className="form-label fw-bold" data-aos="fade-right">Nombre del Producto</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label fw-bold" data-aos="fade-right">Precio</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-control" required 
        />
        {error && <small className="text-danger">{error}</small>}
      </div>
      <button type="submit" className="btn btn-success" data-aos="fade-up">
        Guardar Producto
      </button>
    </form>
  );
};

export default ProductForm;
