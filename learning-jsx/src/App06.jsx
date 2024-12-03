/** 컴포넌트의 props 03 - 함수 전달 예시 **/
import './App.css';
import ProductCard from './ProductCard';

const App06 = () => {
  const product = {
    name: 'Laptop',
    price: 123.4567,
  };

  return (
    <>
      <ProductCard
        name={product.name}
        price={product.price}
        formatPrice={(p) => `$${p.toFixed(2)}`}
      />
      <br />
      {/* 위와 동일 */}
      <ProductCard {...product} formatPrice={(p) => `$${p.toFixed(2)}`} />
    </>
  );
};

export default App06;
