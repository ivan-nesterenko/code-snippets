import { z } from "zod";

export const getErrorMessages = <T extends keyof unknown, K extends z.Schema>({
  errorMessages,
  schema,
}: {
  errorMessages: Record<T, string>;
  schema: K;
}) => {
  const arrayOfErrorMessages = Object.keys(errorMessages) as T[];

  const checkValue = (value: z.infer<K>) => {
    const checksState = schema.safeParse(value);

    if (checksState.success)
      return arrayOfErrorMessages.map((message) => ({ fatal: false, message: errorMessages[message as T] }));

    const errorState = checksState.error.errors;

    return arrayOfErrorMessages.map((message) => ({
      fatal: errorState.find((error) => error.message === message),
      message: errorMessages[message as T],
    }));
  };
  return { checkValue };
};
