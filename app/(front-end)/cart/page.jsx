'use client';
import Breadcrumb from '@/components/frontend/Breadcrumb';
import CartItems from '@/components/frontend/CartItems';
import CartSubTotalCard from '@/components/frontend/CartSubTotalCard';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
  const cartItems = useSelector((store) => store.cart);
  const subTotal =
    cartItems
      .reduce((acc, currentItem) => {
        return acc + currentItem.salePrice * currentItem.qty;
      }, 0)
      .toFixed(2) ?? 0;

  console.log(cartItems);
  return (
    <div>
      <Breadcrumb />
      <div className="grid grid-cols-12 gap-4 lg:gap-16 px-4 lg:px-4">
        <CartItems cartItems={cartItems} />
        <CartSubTotalCard subTotal={subTotal} />
      </div>
    </div>
  );
}
