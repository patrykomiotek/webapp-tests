import { useSelector } from 'react-redux';
import { RootState } from 'store';

export const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <div>
      <h2 className="text-2xl">Items</h2>

      <ul>
        {items.map((item) => (
          <div key={item.id}>
            <p className="font-semibold">{item.name}</p>
            <p className="font-medium">{item.price} zł</p>
            <p className="font-medium">Qty: {item.quantity}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};
