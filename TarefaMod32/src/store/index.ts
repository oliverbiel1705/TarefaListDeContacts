import { configureStore } from '@reduxjs/toolkit';
import contatosReducer from './reducers/contatos';

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

