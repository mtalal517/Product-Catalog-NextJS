const ProductDetail = ({ product }) => {
    if (!product) return <div>Loading...</div>;
  
    return (
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    );
  };
  
  export default ProductDetail;
  