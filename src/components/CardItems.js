import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardItems({ activeCategory, items }) {
  return (
    <div className='cr'>
      {/* Render items based on the active category */}
      {items.map((item) => (
        <div key={`${item.id}-${activeCategory}`}>
          <Card style={{ width: '18rem' }} className='hei'>
            <Card.Img variant="top" src={item.imgsrc}  className='imgg'/>
            <Card.Body className='bttt'>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
              <div className="card-read">Read</div>
              <Button>{item.btn}</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
export default CardItems;
