import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductDetail } from '../hooks/useProductApi';
import '../index.css';

const ProductDetail = () => {
  const { id } = useParams(); // Extracting 'id' from the URL using useParams
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const productData = await fetchProductDetail(id); // Fetching product by id
        setProduct(productData);
      } catch (err) {
        setError('Failed to load product details');
      }
    };

    getProductDetails();
  }, [id]); // Re-run when 'id' changes

  if (error) return <div>{error}</div>;

  return product ? (
    <div className="product-detail">
      <div className="product-detail-card">
        <img
          src={product.images}
          alt={product.title}
          style={{ height: '250px', width: '230px' }}
        />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Rating:</strong> {product.rating} / 5</p>
          <p><strong>Stock Available:</strong> {product.stock}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          
          <button onClick={() => console.log('Add to Cart clicked')}>Add to Cart</button>
          <br></br>
          <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProductDetail;
