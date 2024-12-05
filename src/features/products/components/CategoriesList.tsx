import { useEffect, useState } from 'react';
import { fetchCategories, type Category } from '../services/products';

export const CategoriesList = () => {
  const [data, setData] = useState<Category[]>([]);

  const loadData = async () => {
    try {
      const result = await fetchCategories(); // data, success, isLoading, isError
      if (result) {
        setData(result);
      }
    } catch (error) {
      // if (error instanceof HttpError) {
      //   // api error
      // } else if (error instanceof ZodError) {
      // } else {
      //   console.error('');
      // }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl">Categories</h1>
      <ul>
        {data.map((elem) => (
          <li key={elem.id}>{elem.fields.name}</li>
        ))}
      </ul>
    </div>
  );
};
