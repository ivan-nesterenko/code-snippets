import { useSearchParams as useDomSearchParams } from 'react-router-dom';

export const useSearchParams = <T = string>(key: string) => {
  const [searchParams, setSearchParams] = useDomSearchParams();

  const handleChangeValue = (value: T) => {
    if (value) setSearchParams({ [key]: JSON.stringify(value) });
  };

  const handleDeleteParam = () => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.delete(key);
    setSearchParams(updatedSearchParams);
  };

  const value = searchParams.get(key);

  return {
    value: (value ? JSON.parse<T>(value) : value) as T | null,
    setValue: handleChangeValue,
    deleteValue: handleDeleteParam,
    urlSearchParams: searchParams,
  };
};
