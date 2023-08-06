import React from 'react';
import CardList from './CardList';

const MyComponent = () => {
  const cardData = [
    { id: 1, title: 'Card 1', description: 'Description for card 1', image: 'image1.jpg' },
    { id: 2, title: 'Card 2', description: 'Description for card 2', image: 'image2.jpg' },
    { id: 3, title: 'Card 2', description: 'Description for card 2', image: 'image2.jpg' },
    { id: 4, title: 'Card 2', description: 'Description for card 2', image: 'image2.jpg' },
    { id: 5, title: 'Card 2', description: 'Description for card 2', image: 'image2.jpg' },
    { id: 6, title: 'Card 2', description: 'Description for card 2', image: 'image2.jpg' },
    { id: 7, title: 'Card 2', description: 'Description for card 2', image: 'image2.jpg' },
    { id: 8, title: 'Card 2', description: 'Description for card 2', image: 'image2.jpg' },
    { id: 9, title: 'Card 2', description: 'Description for card 2', image: 'image2.jpg' },
    { id: 10, title: 'Card 2', description: 'Description for card 2', image: 'image2.jpg' },
    { id: 11, title: 'Card 2', description: 'Description for card 2', image: 'image2.jpg' },
    { id: 12, title: 'Card 2', description: 'Description for card 2', image: 'image2.jpg' },
    { id: 13, title: 'Card 2', description: 'Description for card 2', image: 'image2.jpg' },
    { id: 14, title: 'Card 2', description: 'Description for card 2', image: 'image2.jpg' },
    { id: 15, title: 'Card 2', description: 'Description for card 2', image: 'image2.jpg' },
    // Add more card data objects here
  ];

  const itemsPerPage = 9; // Number of cards to display per page

  return (
    <div>
      <CardList data={cardData} itemsPerPage={itemsPerPage} />
    </div>
  );
};

export default MyComponent;
