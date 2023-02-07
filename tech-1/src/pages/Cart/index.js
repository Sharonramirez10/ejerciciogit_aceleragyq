import React, { useContext,  useReducer } from 'react';
import {MdDelete} from 'react-icons/md';
import {Container, ContainerList,  TravelItem, Info, Quantity, Subtotal, Total} from './styles'; 
import imagen from '../../assets/imagen.svg';
import CartContext from '../../context/cart';


import CartItem from '../../components/CartItem';

function Cart(){
    const { state, setState} = useContext(CartContext);
   let  total=0;
   state.cart.map((el) => {
    total+=el.quantity * el.price;
   });
    
    return (
             <Container>
                <ContainerList>
                {state.cart.map((el)=>(
                    <TravelItem>
                    <img src={el.photo} alt={el.title} />
                                              
                    <Info>
                       <p>{el.title}</p>
                       <strong>${el.price}</strong>
                   </Info>
                   <Quantity readOnly type="number" value={el.quantity}/>
                      <Subtotal>
                           <p>${el.quantity * el.price}</p>
                        <button type="button" >
                       <MdDelete size={24} color="#0676d9" />
                       </button>
                     </Subtotal>
                   </TravelItem>
                ))}
                <Total>
                    <div>
                        <p>Total: $ {parseFloat(total).toFixed(2)}</p>
                    </div>
                </Total>
                                
                </ContainerList>     
            </Container>
        );
                                                
                        
}
export default Cart;