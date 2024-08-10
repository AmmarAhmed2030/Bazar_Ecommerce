'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
export default function CategoryCarousel({ products, isMarket }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: isMarket ? 4 : 5,
      slidesToSlide: isMarket ? 4 : 5, // optional, default to 1.
    },
    xl: {
      breakpoint: { max: 2000, min: 1024 },
      items: isMarket ? 4 : 4,
      slidesToSlide: isMarket ? 4 : 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 735 },
      items: isMarket ? 3 : 3,
      slidesToSlide: isMarket ? 3 : 3, // optional, default to 1.
    },
    md: {
      breakpoint: { max: 735, min: 510 },
      items: isMarket ? 2 : 2,
      slidesToSlide: isMarket ? 2 : 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 510, min: 0 },
      items: isMarket ? 1 : 1,
      slidesToSlide: isMarket ? 1 : 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      //deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="px-2 mb-6 rounded-lg"
    >
      {products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </Carousel>
  );
}
