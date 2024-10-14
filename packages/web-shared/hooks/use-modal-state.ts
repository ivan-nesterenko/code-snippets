import { useCallback, useState } from 'react';

import { useSearchParams } from './use-search-params';

type ModalStateProps = {
  initialValue?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  onSuccess?: () => void;
  onDismiss?: () => void;
  paramKey?: string;
};

export const useModalState = <
  ParamValue = string,
  TSuccess = unknown,
  Terror = unknown,
  TOpen = unknown,
>(
  arg1: string | ModalStateProps = '',
  arg2: Except<ModalStateProps, 'paramKey'> = {},
) => {
  const paramKey = typeof arg1 === 'string' ? arg1 : arg1.paramKey || '';
  const {
    initialValue = false,
    onClose,
    onDismiss,
    onOpen,
    onSuccess,
  } = typeof arg1 === 'object' ? arg1 : arg2;

  const { deleteValue, value, setValue } = useSearchParams<ParamValue>(paramKey);

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
    setParamValue: setValue,
    paramsValue: value,
  };
};
