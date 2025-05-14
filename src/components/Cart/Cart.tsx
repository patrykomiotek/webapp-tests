import { Button } from '@atoms/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { addItemToCart, CartItem, removeItemFromCart } from 'store/cartTypes';

export const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const products: CartItem[] = [
    { id: 345, name: 'Product 1', price: 123, quantity: 1 },
    { id: 567, name: 'Product 2', price: 44, quantity: 1 },
    { id: 624, name: 'Product 3', price: 65, quantity: 1 },
    { id: 748, name: 'Product 4', price: 13, quantity: 1 },
  ];

  return (
    <div>
      <h2 className="text-2xl">Items</h2>

      {items.length === 0 && <p>Your cart is empty</p>}

      <div className="divide-y-2">
        {products.map((item) => (
          <div key={item.id} className="flex align-middle items-center space-x-4 mb-2 p-2">
            <p className="font-semibold">{item.name}</p>
            <p className="font-medium">{item.price} zł</p>
            <div>
              <Button onClick={() => dispatch(addItemToCart(item))}>+</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h3>Basket items</h3>
        <div className="divide-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex align-middle items-center space-x-4 mb-2 p-2">
              <p className="font-semibold">{item.name}</p>
              <p className="font-medium">{item.price} zł</p>
              <p className="font-medium">Qty: {item.quantity}</p>
              <div>
                <Button
                  className="bg-red-500 hover:bg-red-700"
                  onClick={() => dispatch(removeItemFromCart(item))}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
