'use client';
import PayPalButton from '@/components/PayPalButton';
import { getData } from '@/lib/getData';
import React, { createContext } from 'react';
export default async function page({ params: { id } }) {
  const order = await getData(`orders/${id}`);
  const { orderItems } = order;
  const subTotal = orderItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  return <PayPalButton amount={subTotal} />;
}
