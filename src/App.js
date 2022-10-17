import commerce from './lib/commerce';
import './App.css';
import { useState, useEffect } from 'react';
// import './styles/scss/styles.scss';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  
//how to add below?
// If you want to build in a loading state while your products load, you could add loading: true to your initial state, have fetchProducts() change this to false when the promise resolves, and add something like this to your component:

// render() {
//   if (loading) {
//     return <p>Loading...</p>;
//   }
// }


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    commerce.products.list().then((products) =>{
      setProducts(products.data);
    }).catch((error) =>{
      console.log('There was an error fetching products', error)
    });
  }


  return (

    // if (loading) {
    //   return <p>Loading, please wait</p>
    // }
    <div className="App">
     
<ProductList 
  products={products}
/>
    </div>
  );
}

export default App;
