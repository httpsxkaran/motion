// CartItem.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function CartItem({ item, onRemove, onQuantityChange, onBuyNow }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ type: 'spring', stiffness: 280, damping: 30 }}
      whileHover={{ scale: 1.03, boxShadow: "0px 20px 40px rgba(0,0,0,0.15)" }}
      className="flex flex-col md:flex-row items-center md:items-start justify-between p-6 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl transition-shadow duration-500"
    >
      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.07 }}
        className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 overflow-hidden rounded-2xl shadow-xl"
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 object-top"
        />
      </motion.div>

      {/* Product Info */}
      <div className="flex-1 md:ml-8 mt-4 md:mt-0 flex flex-col justify-between">
        <div className="space-y-1">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-900 tracking-wide">{item.name}</h3>
          {item.description && (
            <p className="text-gray-500 text-sm md:text-base">{item.description}</p>
          )}
          <p className="text-gray-400 text-sm">Color: {item.color || 'N/A'}</p>
          <p className="text-gray-400 text-sm">Size: {item.size || 'N/A'}</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 md:mt-8 gap-3">
          {/* Quantity Selector */}
          <div className="flex items-center space-x-3 bg-gray-100 px-3 py-1 rounded-full">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => onQuantityChange(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="text-gray-600 font-bold hover:text-gray-800 transition-colors"
            >
              -
            </motion.button>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.2 }}
              className="w-6 text-center font-medium"
            >
              {item.quantity}
            </motion.span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => onQuantityChange(item.id, item.quantity + 1)}
              className="text-gray-600 font-bold hover:text-gray-800 transition-colors"
            >
              +
            </motion.button>
          </div>

          {/* Price */}
          <motion.p
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.3 }}
            className="text-xl md:text-2xl font-bold text-gray-900"
          >
            ${(item.price * item.quantity).toFixed(2)}
          </motion.p>

          {/* Buy Now Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onBuyNow(item)}
            className="px-5 py-2 rounded-full border border-gray-800 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Buy Now
          </motion.button>

          {/* Remove Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onRemove(item.id)}
            className="bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-700 px-3 py-1 rounded-full font-bold text-lg transition-all"
          >
            &times;
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
