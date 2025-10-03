// Cart.jsx
import React, { useState } from 'react';
import CartItem from './CartItem';
import { AnimatePresence, motion } from 'framer-motion';

const initialCart = [
  {
    id: 1,
    name: 'Garment Bag',
    price: 5.0,
    quantity: 1,
    img: 'https://i.pinimg.com/1200x/f8/a4/1b/f8a41bfad781a856d9a6f761c4762e03.jpg',
  },
  {
    id: 2,
    name: 'Sienna Satin Dress',
    price: 189.0,
    quantity: 1,
    color: 'Desert Rose - 707',
    size: '8',
    description: 'Regular Maxi: 46 in waist to hem',
    img: 'https://i.pinimg.com/1200x/06/20/10/0620101f14732d10fea53a97dc56ab9c.jpg',
  },
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);

  const removeItem = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

  const changeQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const buyNow = (item) => {
    alert(`Buying ${item.name} for $${(item.price * item.quantity).toFixed(2)}`);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <motion.div
      className="min-h-screen bg-gray-50 p-6 md:p-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 tracking-wide"
      >
        Your Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Product List */}
        <motion.div
          className="flex-1 space-y-6"
          initial="hidden"
          animate="show"
          exit="exit"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
            exit: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
          }}
        >
          <AnimatePresence>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeItem}
                onQuantityChange={changeQuantity}
                onBuyNow={buyNow}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 80 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="w-full lg:w-96 bg-white p-8 rounded-3xl shadow-2xl flex flex-col space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 tracking-wide">Order Summary</h2>

          <motion.div
            key={subtotal}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.3 }}
            className="flex justify-between text-lg md:text-xl font-semibold text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-2xl"
          >
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </motion.div>

          <div className="flex flex-col gap-3">
            <motion.input
              whileFocus={{ scale: 1.01, borderColor: "#111" }}
              type="text"
              placeholder="Enter coupon code"
              className="border border-gray-300 p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gray-900 text-white p-3 rounded-2xl hover:bg-black font-semibold transition-all"
            >
              Apply Coupon
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-black text-white p-3 rounded-2xl text-lg font-bold hover:bg-gray-900 transition-all"
          >
            Proceed to Checkout
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
