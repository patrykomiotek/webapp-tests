// const { data, isError, isLoading } = useApi<ProductType[]>(fetchProducts);
// const { data, isError, isLoading } = useApi(fetchProducts);

import { useCallback, useEffect, useState } from 'react';

export const useApi = <T>(fetchFunction: () => Promise<T>) => {
  const [data, setData] = useState<T>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const result = await fetchFunction();
      if (result) {
        setData(result);
      }
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [fetchFunction]);

  return {
    data,
    isError,
    isLoading,
  };
};
