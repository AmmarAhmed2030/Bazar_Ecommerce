'use client';
import { addToCart } from '@/redux/slices/cartSlice';
import { Plus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

export default function Product({ product }) {
  const dispatch = useDispatch();
  function handleAddToCart() {
    //Dispatch the reducer
    dispatch(addToCart(product));
    toast.success('item added successfully');
  }
  return (
    <div className="group relative rounded-lg border-2 border-slate-300  shadow overflow-hidden">
      <Link
        href={`/products/${product.id}`}
        className="block overflow-hidden aspect-w-16 aspect-h-9 border-b border-slate-200"
      >
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={556}
          height={556}
          className="rounded-t-lg w-full h-56 transition-all duration-200 transform group-hover:scale-110 "
        />
      </Link>
      <div className="px-4">
        <Link href={`/products/${product.id}`}>
          <h2 className="text-center py-4 mb-2 font-semibold truncate overflow-hidden whitespace-nowrap">
            {product.title}
          </h2>
        </Link>
        <div className="flex justify-between items-center  pb-3 py-6 text-slate-800 dark:text-slate-50 ">
          <p>
            EGP <span>{product.salePrice}</span>
            <del className="pl-2">{product.productPrice}</del>
          </p>
          <button
            onClick={() => handleAddToCart()}
            className="flex items-center space-x-4 dark:bg-lime-600 bg-slate-800 hover:bg-slate-700 dark:hover:bg-lime-400 transition-all duration-500 py-2 text-white px-4 rounded-md"
          >
            <ShoppingCart className="text-lime-600 dark:text-slate-50" />
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
}
