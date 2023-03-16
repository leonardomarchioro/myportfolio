import {createContext, useContext, useState, FC, Dispatch, SetStateAction, ReactNode} from 'react';
import Loading from "../components/Loading";

type context = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>
}

interface Props {
  children: ReactNode
}

const LoadingContext = createContext({ loading: false } as context)

export const LoadingProvider: FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return <LoadingContext.Provider value={{ loading, setLoading }}>
    {children}
    {loading && <Loading/>}
    </LoadingContext.Provider>;
}

export const useLoading = () => useContext(LoadingContext);