import { useCallback } from 'react';
import { useSearchParams as useDomSearchParams } from 'react-router-dom';

export const useSearchParams = (key: string) => {
  const [searchParams, setSearchParams] = useDomSearchParams();

  const handleChangeValue = (value: string) => {
    if (value) setSearchParams({ [key]: value });
  };

  const handleDeleteParam = useCallback(() => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.delete(key);
    setSearchParams(updatedSearchParams);
  }, [key, searchParams, setSearchParams]);

  const value = searchParams.get(key);

  return {
    value,
    setValue: handleChangeValue,
    deleteValue: handleDeleteParam,
    urlSearchParams: searchParams,
  };
};
