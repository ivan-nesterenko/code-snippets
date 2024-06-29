import {
  useState,
  type FC,
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  memo,
} from "react";
import {
  type ModalVariantProps,
  ModalWrapper,
  type ModalWrapperProps,
} from "./modal-wrapper";

type ModalProviderProps = {
  children: ReactNode;
};

type ModalParamsProps = {
  showCascadingModels?: boolean;
} & Partial<ModalVariantProps>;

type ModalProperties = {
  content: ReactNode;
  params?: ModalParamsProps;
};

type ModalContextProperties = {
  modals: ModalProperties[];
  openModalWithHistory: (content: ReactNode, params?: ModalParamsProps) => void;
  openModalWithoutHistory: (
    content: ReactNode,
    params?: ModalParamsProps,
  ) => void;
  closeModal: () => void;
  closeAllModals: () => void;
  ModalWrapper: FC<ModalWrapperProps>;
  isOpenModal: boolean;
};

const modalContext = createContext<ModalContextProperties>({
  modals: [{ content: <></>, params: { showCascadingModels: false } }],
  openModalWithHistory: () => "",
  openModalWithoutHistory: () => "",
  closeModal: () => "",
  closeAllModals: () => "",
  ModalWrapper,
  isOpenModal: false,
});

type ModalListProps = {
  modalsData: ModalProperties[];
  cascadeRender: boolean;
};

const ModalList: FC<ModalListProps> = memo(({ modalsData, cascadeRender }) =>
  cascadeRender ? (
    modalsData?.map(({ content }, i) => (
      <div key={`${i}_${new Date().getUTCDate()}`}>{content}</div>
    ))
  ) : (
    <div>{modalsData[modalsData?.length - 1]?.content}</div>
  ),
);

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [modals, setModals] = useState<ModalProperties[]>([]);

  const openModalWithHistory = useCallback(
    (content: ReactNode, params?: Partial<ModalVariantProps>) =>
      setModals((prevProps) => [...prevProps, { content: content, ...params }]),
    [],
  );

  const openModalWithoutHistory = useCallback(
    (content: ReactNode, params?: Partial<ModalVariantProps>) =>
      setModals(() => [{ content: content, ...params }]),
    [],
  );

  const closeModal = useCallback(
    () => setModals((prevProps) => prevProps.slice(0, prevProps.length - 1)),
    [],
  );

  const closeAllModals = useCallback(() => setModals([]), []);

  const currentModal = useMemo(() => modals[modals.length - 1], [modals]);

  const modalContextValue: ModalContextProperties = useMemo(
    () => ({
      openModalWithHistory,
      closeModal,
      closeAllModals,
      openModalWithoutHistory,
      modals,
      ModalWrapper,
      isOpenModal: modals.length > 0,
    }),
    [
      closeAllModals,
      closeModal,
      modals,
      openModalWithHistory,
      openModalWithoutHistory,
    ],
  );

  return (
    <modalContext.Provider value={modalContextValue}>
      {modals.length > 0 && (
        <ModalList
          modalsData={modals}
          cascadeRender={!!currentModal?.params?.showCascadingModels}
        />
      )}

      {children}
    </modalContext.Provider>
  );
};

export const useOverlay = () => useContext(modalContext);
