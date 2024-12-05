import { useEffect, useState } from 'react';
import { fetchProducts, type ProductType } from '../services/products';
import { useApi } from '@hooks/useApi';

export const ProductsList = () => {
  // const { data, isError, isLoading } = useApi<ProductType[] | undefined>(fetchProducts);
  const { data, isError, isLoading } = useApi(fetchProducts);

  // const [data, setData] = useState<ProductType[]>([]);

  // const loadData = async () => {
  //   try {
  //     const result = await fetchProducts(); // data, success, isLoading, isError
  //     if (result) {
  //       setData(result);
  //     }
  //   } catch (error) {
  //     // if (error instanceof HttpError) {
  //     //   // api error
  //     // } else if (error instanceof ZodError) {
  //     // } else {
  //     //   console.error('');
  //     // }
  //   }
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (isError) {
    return <p>Error!</p>;
  }

  return (
    <div>
      <h1 className="text-2xl">Products</h1>
      <ul>
        {data?.map((elem) => (
          <li key={elem.id}>
            {elem.fields.name}, ${elem.fields.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
