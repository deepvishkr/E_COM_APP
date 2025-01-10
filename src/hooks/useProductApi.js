
export const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products; // Array of products
  };
  
  export const fetchProductDetail = async (productId) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
  
      // Check if the response is not successful
      if (!response.ok) {
        throw new Error('Failed to fetch product details');
      }
  
      const data = await response.json();
      return data; // Returning the product data
    } catch (error) {
      console.error('Error fetching product details:', error);
      throw error; 
    }
  };
  