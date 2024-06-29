export const timer = () => {
  const startTime = Date.now();

  return (callback: (time: number) => void) => {
    const endTime = Date.now();
    const differenceInMilliSeconds = endTime - startTime;
    callback(differenceInMilliSeconds);
  };
};
