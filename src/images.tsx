import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 500 }} cols={2} rowHeight={180}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/enjoey.png',
    title: 'Breakfast',
  },
  {
    img: '/hayane.png',
    title: 'Burger',
  },
  {
    img: '/spreadsheet.png',
    title: 'Camera',
  },
  {
    img: '/robo.jpg',
    title: 'Coffee',
  },
];