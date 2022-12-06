import React, { useState } from 'react';

function CardOfProduct(props) {

   let [showCart, setShowCart] = useState(true);
   let [number, setNumber] = useState(0);
   let [heart, setHeart] = useState(props.datacard.isLiked);
   let [number1, setNumber1] = useState(0);

   function changeCartState() {
      setShowCart(prevCart => !prevCart)
      changeNumberPlus()
   }

   let changeNumber = () => {
      setNumber(prev => prev+5)
   }

   let changeFavourite = () => {
      setHeart(prev => !prev)
   }

   let heartClass = heart ?  './assests/images/like.svg' : './assets/images/unlike.svg'
   
      let changeNumberPlus = () => {
         setNumber1(prevNumber => prevNumber + 1)
      }

      let changeNumberMinus = () => {
         setNumber1(prevNumber => {
            if (prevNumber === 1) {
               setNumber1(0);
               changeCartState()
            } 
            else{
               return prevNumber - 1
            }
         })
      }

   return(
      <div className="card">
         <img src={props.datacard.img} alt='cardimage' />
         <div className="text-block">
            <h3>{props.datacard.title}</h3>
            <div className="text-price">{props.datacard.price} €</div>
            {showCart && <div className="button-in-cart" onClick={changeCartState}>  
               Добавить в корзину
            </div>}
            
         </div>
         <div className='favourite' >
            <img className="favourite-icon" src={heartClass} alt="like" 
            onClick={changeFavourite} />
         </div>
         {!showCart && <div className="count-block">
            <div className="count-button minus" onClick={changeNumberMinus}>-</div>
            <div className="count-block-text-block">
               <div className="count-block-text1">{number1}</div>
               <p className="count-block-text2">В корзине</p>
            </div>
            <div className="count-button plus" onClick={changeNumberPlus}>+</div>
         </div> }
         
      </div>
   )
}

 export default CardOfProduct;