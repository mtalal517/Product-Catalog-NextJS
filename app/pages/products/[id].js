import Layout from './../../components/Layout'
import ProductDetail from '../../components/ProductDetail'

export async function getStaticPaths() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  const paths = data.products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await response.json();

  return { props: { product } };
}

const ProductPage = ({ product }) => (
  <Layout>
    <ProductDetail product={product} />
  </Layout>
);

export default ProductPage;
