import db from '@/lib/db';
import { generateOrderNumber } from '@/lib/generateOrderNumber';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { checkoutFormData, orderItems } = await request.json();
    const {
      city,
      country,
      district,
      email,
      firstName,
      lastName,
      paymentMethod,
      phone,
      shippingCost,
      streetAddress,
      userId,
    } = checkoutFormData;

    // Create orderNumber function

    // Use Prisma transaction to ensure both queries are successful or rolled back
    const result = await db.$transaction(async (db) => {
      const newOrder = await db.order.create({
        data: {
          userId,
          firstName,
          lastName,
          email,
          phone,
          streetAddress,
          city,
          country,
          district,
          shippingCost: parseFloat(shippingCost),
          paymentMethod,
          orderNumber: generateOrderNumber(8),
        },
      });
      const newOrderItems = await db.orderItem.createMany({
        data: orderItems.map((item) => ({
          productId: item.id,
          vendorId: item.vendorId,
          orderId: newOrder.id,
          quantity: parseInt(item.qty),
          price: parseFloat(item.salePrice),
          imageUrl: item.imageUrl,
          title: item.title,
        })),
      });

      // Calculate total amount for each product and create a sale for each
      const sales = await Promise.all(
        orderItems.map(async (item) => {
          const totalAmount = parseFloat(item.salePrice) * parseInt(item.qty);

          const newSale = await db.sale.create({
            data: {
              orderId: newOrder.id,
              productTitle: item.title,
              productQty: parseInt(item.qty),
              productPrice: parseFloat(item.salePrice),
              productImage: item.imageUrl,
              productId: item.id,
              vendorId: item.vendorId,
              total: totalAmount,
            },
          });

          return newSale;
        }),
      );

      return { newOrder, newOrderItems, sales };
    });

    const { newOrder, newOrderItems, sales } = result;

    console.log(newOrder, newOrderItems, sales);

    return NextResponse.json(newOrder);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: 'Failed to create Order',
        error,
      },
      { status: 500 },
    );
  } finally {
    // Close the Prisma client connection
    await db.$disconnect();
  }
}

export async function GET() {
  try {
    const orders = await db.order.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        orderItems: true,
      },
    });
    return NextResponse.json(orders);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Failed to get Orders', error },
      { status: 500 },
    );
  }
}
