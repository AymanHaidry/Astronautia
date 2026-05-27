"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { storeProducts } from "@/lib/data";
import { ShoppingCart, Plus, Minus, X, ArrowRight, Check } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function StorePage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const addToCart = (product: (typeof storeProducts)[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      })
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-telem uppercase mb-6 block">
              Store
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-warm-white leading-[0.95]">
              Exploration
              <br />
              <span className="italic text-accent/70">Equipment</span>
            </h1>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setCartOpen(true)}
            className="relative p-3 border border-white/10 hover:border-white/20 transition-colors"
          >
            <ShoppingCart size={20} className="text-warm-white" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-void text-[10px] font-medium flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storeProducts.map((product, i) => (
            <SectionWrapper key={product.id} delay={i * 0.1}>
              <motion.div
                className="group cursor-pointer"
                onClick={() =>
                  setSelectedProduct(
                    selectedProduct === product.id ? null : product.id
                  )
                }
              >
                <div className="aspect-square bg-surface mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(50,50,50,0.3)_0%,_transparent_70%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingCart size={40} className="text-white/5" />
                  </div>
                  <div className="absolute top-4 right-4 font-mono text-[10px] text-warm-white/60">
                    ${product.price}
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-warm-white group-hover:text-accent transition-colors duration-300 mb-1">
                  {product.name}
                </h3>
                <p className="text-accent italic text-sm mb-4">
                  {product.tagline}
                </p>

                <AnimatePresence>
                  {selectedProduct === product.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-soft-grey"
                          >
                            <Check size={12} className="text-telem" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="w-full py-3 bg-warm-white text-void text-sm font-medium tracking-wide hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Add to Cart
                  <Plus size={14} />
                </button>
              </motion.div>
            </SectionWrapper>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-void/80 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-void border-l border-white/10 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-2xl text-warm-white">
                  Your Cart
                </h2>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-2 text-soft-grey hover:text-warm-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-soft-grey text-center py-12">
                  Your cart is empty.
                </p>
              ) : (
                <>
                  <div className="space-y-4 mb-8">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-4 border border-white/5"
                      >
                        <div>
                          <p className="text-warm-white text-sm">{item.name}</p>
                          <p className="text-soft-grey text-xs">
                            ${item.price}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 text-soft-grey hover:text-warm-white"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm text-warm-white w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 text-soft-grey hover:text-warm-white"
                          >
                            <Plus size={12} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 text-soft-grey hover:text-red-400 ml-2"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-soft-grey">Total</span>
                      <span className="font-serif text-2xl text-warm-white">
                        ${total.toLocaleString()}
                      </span>
                    </div>
                    <button className="w-full py-4 bg-warm-white text-void text-sm font-medium tracking-wide hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2">
                      Checkout
                      <ArrowRight size={14} />
                    </button>
                    <p className="text-center text-[10px] text-soft-grey/50 mt-4">
                      This is a demo store. No actual purchases will be processed.
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
