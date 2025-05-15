import { Helmet } from 'react-helmet-async';

import { Cart } from '@components/Cart';
import { Route } from '../routes';

export const CartPage = () => {
  return (
    <>
      <Helmet>
        <title>{Route.CART.title}</title>
      </Helmet>
      <div>
        <h1>Cart Page</h1>
        <Cart />
      </div>
    </>
  );
};
