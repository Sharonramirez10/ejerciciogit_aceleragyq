const CartItem = ({data, delFromCart}) => {
    let {id, name, price, imagen} = data;
    return (
        <div>
            <h4>{name}</h4>
            <h5>${price}</h5>
            <button>Eliminar</button>
        </div>
    );
};


export default CartItem;