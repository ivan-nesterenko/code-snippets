import { useCallback, useState } from 'react';

import { useSearchParams } from './useSearchParams';

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

  const { deleteValue, value, setValue } = useSearchParams(queryKey);

  const [isOpen, setOpen] = useState(initialValue);

  const handleCloseModal = useCallback(() => {
    onClose?.();
    setOpen(false);
    deleteValue();
  }, [onClose]);

  const handleOpenModal = useCallback(
    (data?: TOpen) => {
      onOpen?.(data);
      setOpen(true);
    },
    [onOpen],
  );

  const handleSuccessModal = useCallback(
    (data?: TSuccess) => {
      onSuccess?.(data);
      setOpen(false);
      deleteValue();
    },
    [onSuccess],
  );

  const handleDismissModal = useCallback(
    (data?: Terror) => {
      onDismiss?.(data);
      setOpen(false);
      deleteValue();
    },
    [onDismiss],
  );

  const toggler = useCallback((state: boolean) => {
    if (!state) handleCloseModal();
    if (state) handleOpenModal();
    return setOpen(state);
  }, []);

  return {
    isOpen: !!value || isOpen,
    toggler,
    handleCloseModal,
    handleOpenModal,
    handleSuccessModal,
    handleDismissModal,
    setQueryValue: setValue,
    queryValue: value,
  };
};
