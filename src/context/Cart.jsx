import { createContext, useState, useEffect} from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    // const [cartItems, setCartItems] = useState([])

    // update the initial state of cart items to the cart items we get from the browser

    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

    // A FUNCTION THAT WILL BE USED TO ADD ITEMS TO THE CART
    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); // check if the item is already in the cart
    
        if (isItemInCart) {
        setCartItems(
            cartItems.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem // otherwise, return the cart item
            )
        );
        } else {
        setCartItems([...cartItems, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
        }
    };


    // A FUNCTION THAT WILL BE USED TO REMOVE ITEMS TO THE CART

    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    
        if (isItemInCart.quantity === 1) {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
        } else {
        setCartItems(
            cartItems.map((cartItem) =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
                : cartItem
            )
        );
        }
    };

    // A FUNCTION THAT WILL BE USED TO CLEAR THE CART

    const clearCart = () => {
        setCartItems([]); // set the cart items to an empty array
    };

    // A FUNCTION TO GET THE CART TOTAL
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // calculate the total price of the items in the cart
    };

    // use the useEffect hook to persist the cart state in the browser
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // use the useEffect hook to get the cart items from the browser
    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
        setCartItems(JSON.parse(cartItems));
        }
    }, []);



    return (
        <CartContext.Provider
        value={{
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
            getCartTotal,
        }}
        >
        {children}
        </CartContext.Provider>
    );
}
