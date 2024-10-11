import { useSearchParams as useDomSearchParams } from 'react-router-dom';

export const useSearchParams = (key: string) => {
  const [searchParams, setSearchParams] = useDomSearchParams();

  const handleChangeValue = (value: string | number | boolean) => {
    if (value) setSearchParams({ [key]: value.toString() });
  };

  const handleDeleteParam = () => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.delete(key);
    setSearchParams(updatedSearchParams);
  };

  return {
    value: searchParams.get(key),
    setValue: handleChangeValue,
    deleteValue: handleDeleteParam,
    urlSearchParams: searchParams,
  };
};
