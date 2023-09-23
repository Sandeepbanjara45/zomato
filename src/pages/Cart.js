import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {add,remove} from "../redux/features/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import Error from '../Error';

function Cart() {

   const Cartitems = useSelector((state)=>state.cart);

  const dispatch = useDispatch();

  const addtoCart=(item)=>{
    dispatch(add(item));
  }

  const removeFromCart=(itemId)=>{
    dispatch(remove(itemId));
  }

  return (
    <>
    
    {Cartitems.length > 0 ? (
    <div className='cr'>
      {/* Render items based on the active category */}
      {Cartitems.map((item) => (
        <div key={`${item.id}`}>
          <Card style={{ width: '18rem' }} className='hei'>
            <Card.Img variant="top" src={item.imgsrc}  className='imgg'/>
            <Card.Body className='bttt'>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
              <div className="card-read">Read {item.quantity}</div>
              <Button onClick={()=>addtoCart(item)}>{item.btn}</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button onClick={()=>removeFromCart(item.id)}>{item.btn1}</Button>
            </Card.Body>
          </Card>
        </div>
       
      ))}
    </div>
    ) : ( <><Error/></>)}
    </>
  );
}
export default Cart;
