import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart} from 'react-icons/fa';
import CartContext from '../../context/cart';
import logo from '../../assets/logo.svg';
import { Container, HeaderContainer, Cart } from "./styles";


function Header() {
    const { setState, state } = useContext(CartContext);

    const totalQuantify = state.cart.reduce(
        (acc, travel) => acc + travel.quantify,
        0,
    );
    return (
        <Container>
            <HeaderContainer>
                <Link to= "/">
                     <img src={logo} alt= "Logo" />
                </Link>
                <Link to="/cart">
                     <Cart>
                        <div>
                         <span>{totalQuantify}</span>
                        </div>
                        <FaShoppingCart size={36} color= "#fff" />
                    </Cart>
                </Link>
            </HeaderContainer>
        </Container>
    );
}

export default Header;