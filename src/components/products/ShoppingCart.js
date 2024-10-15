
import { useReducer, useState, useEffect } from 'react';
import { shoppingReducer } from '@/reducer/ShoppingReducer';
import Product from './Product';
import CartItem from './CartItem';
import ShoppingModal from '../ShoppingModal'; 
import { TYPES } from '@/actions/actions';
import Navbar from '@/components/Navbar';  
import axios from 'axios';

const { ADD_TO_CART, REMOVE_ONE_ITEM, REMOVE_ALL_ITEMS, CART_CLEAR } = TYPES;

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, { products: [], cart: [] });
  const { products, cart } = state;
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [modalAction, setModalAction] = useState(null); 
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
      const response = await axios.get('http://localhost:5000/products');
        dispatch({ type: 'SET_PRODUCTS', payload: response.data });
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };
    fetchProducts();
  }, []);

  const openModal = (action, productId = null) => {
    setModalAction(action);
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const addToCart = (id) => {
    openModal('add', id);
  };

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: REMOVE_ALL_ITEMS, payload: id });
    } else {
      dispatch({ type: REMOVE_ONE_ITEM, payload: id });
    }
  };

  const clearCart = () => dispatch({ type: CART_CLEAR });

  const confirmAction = async () => {
    setIsModalOpen(false);

    if (modalAction === 'add' && selectedProductId) {
      dispatch({ type: ADD_TO_CART, payload: selectedProductId });
    } else if (modalAction === 'purchase') {
      try {
        const response = await axios.post('/api/confirm-purchase', { cart });
        if (response.status === 200) {
          alert('Compra confirmada');
          clearCart();
        }
      } catch (error) {
        console.error('Error confirmando la compra:', error);
      }
    }
  };

  const totalProducts = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={totalProducts} /> 
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div className="box grid-responsive">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
  
      <h3>Carrito</h3>
      <div className="box">
        {cart.map((item, i) => (
          <CartItem key={i} item={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
  
      <button onClick={() => openModal('purchase')}>Comprar</button>
      <button onClick={clearCart}>Limpiar Carrito</button>
  
      <ShoppingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmAction}
      />
    </>
  );
}

export default ShoppingCart;
