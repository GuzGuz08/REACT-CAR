import React, { useReducer } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { cartReducer } from './hooks/CartReducer';
import './App.css';

function App() {
  const initialState = [];
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  
  const products = [
    { 
      id: 1, 
      name: 'Carne', 
      price: 18,
      imageUrl: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/3A14/production/_106486841_gettyimages-535786572.jpg.webp'
    },
    { 
      id: 2, 
      name: 'Pollo', 
      price: 20,
      imageUrl: 'https://www.elespectador.com/resizer/qnmcZB28733ovmkLlBjlcnCiLPc=/arc-anglerfish-arc2-prod-elespectador/public/BF5ZMLR24NHKJHJJ3L23WDFF7Q.jpg'
    },
    { 
      id: 3, 
      name: 'Pescado', 
      price: 30,
      imageUrl: 'https://www.hola.com/horizon/square/15999c33bb55-pescado-plancha-t.jpg' 
    },
    
    { 
      id: 4, 
      name: 'Baby  Beef', 
      price: 40,
      imageUrl: 'https://www.lacarnicerie.com/wp-content/uploads/2021/01/Baby-Beef-a-las-Finas-Hiervas.jpg' 
    },
    { 
      id: 5, 
      name: 'Chicharron', 
      price: 15,
      imageUrl: 'https://www.elespectador.com/resizer/v2/EQYWEZRLDFFIPOAJFSAJBZKG7M.png?auth=8869c97987aa722d9c0565eb8661266eaa2cea8b982ac67d76b8a58b815b00be&width=1110&height=739&smart=true&quality=60' 
    },
    { 
      id: 6, 
      name: 'Morcilla', 
      price: 8,
      imageUrl: 'https://elpais.com/especiales-branded/la-despensa/2020/ingredientes-de-la-morcilla-sin-sangre/img/1589360875_961507_1589361487_noticia_normal.jpg' 
    },
  ];

    
    const addToCart = (product) => {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    };
  
    const removeFromCart = (productId) => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } });
    };
  
    const updateQuantity = (productId, quantity) => {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    };
  
    return (
      <div className="App">
        <h1>Carrito de Compras</h1>
        <ProductList products={products} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
      </div>
    );
  }
  
  export default App;