// src/LoadingScreen.tsx
import React from 'react';
import './LoadingScreen.css'; // Asegúrate de crear un archivo CSS para los estilos

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="spinner">
        <i className="fas fa-spinner fa-spin fa-5x"></i>
      </div>
    </div>
  );
};

export default LoadingScreen;
