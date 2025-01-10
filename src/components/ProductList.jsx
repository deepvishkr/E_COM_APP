import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions'; // Assuming you have an 'addToCart' action in redux
import '../index.css';


// Placeholder image URL for broken images
const FALLBACK_IMAGE = 'https://via.placeholder.com/230x250?text=Image+Not+Available';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch(); // Initializing the Redux dispatch function

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching products');
        setLoading(false);
      });
  }, []);

  const handleImageError = (event) => {
    event.target.src = FALLBACK_IMAGE; // Set fallback image if the image fails to load
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the addToCart action to Redux store
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-details">
            <img
              src={product.images} // Use image URL from the API
              alt={product.title} // Product title as alt text
              className="product-image"
              
              onError={handleImageError} // Trigger fallback image if error occurs
            />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
              <p>
                <strong>Rating:</strong> {product.rating}
              </p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
