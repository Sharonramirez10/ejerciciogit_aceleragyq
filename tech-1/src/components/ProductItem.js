import {MdAddShoppingCart} from 'react-icons/md';
import { Container, List, Unit } from './styles';


const ProductItem =({data, addToCart}) => {
    let {id, name, price, imagen} = data;
    return (
    /*<Container>*/
        <List>
            <Unit>
               
                <nombre>{name}</nombre>
                <precio>${price}</precio>
               
                <button onClick={() => addToCart(id)}>
                    <div>
                    <MdAddShoppingCart size={16} color="#fff" />
                    </div>
                    <span>Agregar al carrito</span>
                    </button>
            </Unit>
       </List>
     /*</Container>*/
    );
};


export default ProductItem;