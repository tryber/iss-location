import { createContext } from 'react';

const DEFAULT_CONTEXT_VALUE = {
  error: null,
  isFetching: false,
  latitude: -23.5688619,
  longitude: -46.6486371,
};

const ISSContext = createContext(DEFAULT_CONTEXT_VALUE);

export default ISSContext;
