'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { IoClose, IoPrintOutline, IoCheckmarkCircle, IoWalletOutline, IoCashOutline } from "react-icons/io5";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type PaymentMethod = 'COD' | 'JazzCash' | 'EasyPaisa';

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartCount, clearCart } = useCart();
  const [orderStatus, setOrderStatus] = useState<'cart' | 'payment' | 'processing' | 'receipt'>('cart');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('COD');
  const [orderId] = useState(() => Math.floor(100000 + Math.random() * 900000));
  const [orderDate] = useState(() => new Date().toLocaleString());

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    setOrderStatus('payment');
  };

  const handleConfirmOrder = () => {
    setOrderStatus('processing');
    setTimeout(() => {
      setOrderStatus('receipt');
    }, 2000);
  };

  const handleClose = () => {
    if (orderStatus === 'receipt') {
      clearCart();
      setOrderStatus('cart');
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={handleClose}></div>
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-6 py-4 bg-red-900 text-white flex items-center justify-between shadow-lg">
            <h2 className="text-xl font-black uppercase tracking-tight">
              {orderStatus === 'receipt' ? 'Order Receipt' : 
               orderStatus === 'payment' ? 'Select Payment' :
               `Your Pizza Cart (${cartCount})`}
            </h2>
            <button onClick={handleClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <IoClose size={24} />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6">
            {orderStatus === 'processing' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-24 h-24 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                <h3 className="text-2xl font-black text-gray-900 uppercase">Processing Order...</h3>
                <p className="text-gray-500">Securing your payment via {paymentMethod}</p>
              </div>
            ) : orderStatus === 'payment' ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="text-center space-y-2">
                   <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                     <IoWalletOutline />
                   </div>
                   <h3 className="text-2xl font-black text-gray-900 uppercase">Payment Method</h3>
                   <p className="text-sm text-gray-500">Choose how you&apos;d like to pay for your delicious pizza.</p>
                </div>

                <div className="space-y-4">
                  {/* COD */}
                  <button 
                    onClick={() => setPaymentMethod('COD')}
                    className={`w-full p-5 rounded-2xl border-2 transition-all flex items-center justify-between ${paymentMethod === 'COD' ? 'border-orange-500 bg-orange-50' : 'border-gray-100 bg-gray-50'}`}
                  >
                    <div className="flex items-center gap-4 text-left">
                      <IoCashOutline className={`text-2xl ${paymentMethod === 'COD' ? 'text-orange-600' : 'text-gray-400'}`} />
                      <div>
                        <p className="font-bold text-gray-900">Cash On Delivery</p>
                        <p className="text-xs text-gray-500">Pay when your pizza arrives</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'COD' ? 'border-orange-500' : 'border-gray-300'}`}>
                      {paymentMethod === 'COD' && <div className="w-3 h-3 bg-orange-500 rounded-full"></div>}
                    </div>
                  </button>

                  {/* JazzCash */}
                  <button 
                    onClick={() => setPaymentMethod('JazzCash')}
                    className={`w-full p-5 rounded-2xl border-2 transition-all flex items-center justify-between ${paymentMethod === 'JazzCash' ? 'border-red-600 bg-red-50' : 'border-gray-100 bg-gray-50'}`}
                  >
                    <div className="flex items-center gap-4 text-left">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-xs ${paymentMethod === 'JazzCash' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
                        JAZZ
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">JazzCash</p>
                        <p className="text-xs text-gray-500">Instant mobile payment</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'JazzCash' ? 'border-red-600' : 'border-gray-300'}`}>
                      {paymentMethod === 'JazzCash' && <div className="w-3 h-3 bg-red-600 rounded-full"></div>}
                    </div>
                  </button>

                  {/* EasyPaisa */}
                  <button 
                    onClick={() => setPaymentMethod('EasyPaisa')}
                    className={`w-full p-5 rounded-2xl border-2 transition-all flex items-center justify-between ${paymentMethod === 'EasyPaisa' ? 'border-green-600 bg-green-50' : 'border-gray-100 bg-gray-50'}`}
                  >
                    <div className="flex items-center gap-4 text-left">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-xs ${paymentMethod === 'EasyPaisa' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
                        EASY
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">EasyPaisa</p>
                        <p className="text-xs text-gray-500">Secure digital wallet</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'EasyPaisa' ? 'border-green-600' : 'border-gray-300'}`}>
                      {paymentMethod === 'EasyPaisa' && <div className="w-3 h-3 bg-green-600 rounded-full"></div>}
                    </div>
                  </button>
                </div>

                <div className="pt-4 space-y-4">
                   <button 
                    onClick={handleConfirmOrder}
                    className="w-full py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-orange-600 shadow-xl shadow-orange-200 transition-all active:scale-95"
                  >
                    Confirm & Pay PKR {totalPrice}
                  </button>
                  <button 
                    onClick={() => setOrderStatus('cart')}
                    className="w-full py-2 text-gray-500 font-bold hover:text-gray-900 transition-colors"
                  >
                    Back to Cart
                  </button>
                </div>
              </div>
            ) : orderStatus === 'receipt' ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center space-y-2">
                  <IoCheckmarkCircle className="w-16 h-16 text-green-500 mx-auto" />
                  <h3 className="text-2xl font-black text-gray-900 uppercase">Order Confirmed!</h3>
                  <p className="text-sm text-gray-500 font-bold">Paid via: <span className="text-orange-600">{paymentMethod}</span></p>
                  <p className="text-sm text-gray-500">Order ID: #{orderId}</p>
                  <p className="text-xs text-gray-400">{orderDate}</p>
                </div>

                <div className="border-t-2 border-dashed border-gray-200 pt-6 space-y-4">
                  <h4 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Order Summary</h4>
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-gray-600">{item.title} <span className="font-bold text-gray-400">x{item.quantity}</span></span>
                        <span className="font-bold text-gray-900">PKR {item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="font-bold text-gray-900">PKR {totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Delivery Fee</span>
                      <span className="font-bold text-green-600">FREE</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Payment Status</span>
                      <span className="font-black text-green-600">{paymentMethod === 'COD' ? 'PENDING' : 'PAID'}</span>
                    </div>
                    <div className="flex justify-between text-xl font-black pt-2 border-t border-gray-200">
                      <span className="text-gray-900 uppercase">Total</span>
                      <span className="text-orange-600">PKR {totalPrice}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 text-center">
                  <p className="text-orange-800 text-sm font-medium">
                    🍕 Your pizza will arrive in approximately <span className="font-bold">30 minutes</span>.
                  </p>
                </div>

                <button 
                  onClick={() => window.print()} 
                  className="w-full py-4 border-2 border-gray-200 rounded-xl font-bold text-gray-600 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                  <IoPrintOutline size={20} />
                  Print Receipt
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                <div className="text-8xl">🛒</div>
                <p className="text-xl font-black uppercase tracking-tighter">Your cart is empty</p>
                <button onClick={onClose} className="text-orange-600 font-bold hover:underline">Start Shopping</button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 group transition-all hover:shadow-md">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm">
                      <Image src={item.image} alt={item.title} layout="fill" className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-black text-gray-900 truncate">{item.title}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <IoClose size={18} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">{item.category}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="font-black text-orange-600 text-sm">PKR {item.price}</span>
                        
                        <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-3 py-1 hover:bg-gray-100 text-gray-600 font-bold transition-colors border-r border-gray-200"
                          >
                            -
                          </button>
                          <span className="px-4 py-1 text-sm font-black text-gray-900">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-3 py-1 hover:bg-gray-100 text-gray-600 font-bold transition-colors border-l border-gray-200"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer for Cart State */}
          {orderStatus === 'cart' && cart.length > 0 && (
            <div className="p-6 bg-gray-50 border-t border-gray-200 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-bold uppercase tracking-widest text-xs">Total Amount</span>
                <span className="text-3xl font-black text-gray-900">PKR {totalPrice}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={clearCart}
                  className="py-4 border-2 border-gray-200 rounded-2xl font-bold text-gray-500 hover:bg-white hover:border-red-200 hover:text-red-500 transition-all"
                >
                  Clear All
                </button>
                <button 
                  onClick={handleCheckout}
                  className="py-4 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-orange-600 shadow-xl shadow-orange-200 transition-all active:scale-95"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Footer for Receipt State */}
          {orderStatus === 'receipt' && (
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <button 
                onClick={handleClose}
                className="w-full py-4 bg-red-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-red-800 shadow-xl shadow-red-200 transition-all"
              >
                Order More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
