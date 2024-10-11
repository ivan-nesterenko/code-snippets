
type ModalStateProps<TSuccess = unknown, Terror = unknown, TOpen = unknown> = {
  initialValue?: boolean;
  onClose?: () => void;
  onOpen?: (T?: TOpen) => void;
  onSuccess?: (T?: TSuccess) => void;
  onDismiss?: (T?: Terror) => void;
  queryKey?: string;
};

export const useModalState = <TSuccess = unknown, Terror = unknown, TOpen = unknown>(
  arg1: string | ModalStateProps<TSuccess, Terror, TOpen> = '',
  arg2: ModalStateProps<TSuccess, Terror, TOpen> = {},
) => {
  const queryKey = typeof arg1 === 'string' ? arg1 : arg1.queryKey || '';

  const {
    initialValue = false,
    onClose,
    onDismiss,
    onOpen,
    onSuccess,
  } = typeof arg1 === 'object' ? arg1 : arg2;

  // some code
};
