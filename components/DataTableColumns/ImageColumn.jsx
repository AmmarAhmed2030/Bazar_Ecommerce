import Image from 'next/image';
import React from 'react';

export default function ImageColumn({ row, imageTitle }) {
  const imageUrl = row.getValue(`${imageTitle}`);

  return (
    <Image
      src={imageUrl}
      alt="image"
      width={249}
      height={249}
      className="rounded-full w-14 h-14"
    />
  );
}
