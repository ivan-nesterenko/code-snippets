export const timer = () => {
  const startTime = Date.now();

  return (callback: (time: number) => void) => {
    const endTime = Date.now();
    const differenceInSeconds = endTime - startTime;
    callback(differenceInSeconds);
  };
};
