import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import contato from '../../models/contato';

export const cadastrarContato = createAsyncThunk(
  'contatos/cadastrarContato',
  async (novoContato: contato, { getState, rejectWithValue }) => {
    const state = getState() as { contatos: { itens: contato[] } };
    const contatoJaExiste = state.contatos.itens.find(
      (contato) =>
        contato.nome.toLowerCase() === novoContato.nome.toLowerCase() ||
        contato.email.toLowerCase() === novoContato.email.toLowerCase() ||
        contato.tel === novoContato.tel
    );

    if (!novoContato.nome || !novoContato.email || !novoContato.tel) {
      alert('Precisa adicionar os dados do contato.');
      return rejectWithValue('Campos vazios');
    }

    if (contatoJaExiste) {
      alert('Já existe um contato com este nome, email ou telefone na sua lista de contatos. Por favor, corrija o contato repetido.');
      return rejectWithValue('Contato duplicado');
    }

    return { contato: novoContato };
  }
);

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: {
    itens: [] as contato[]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload);
    },
    editar: (state, action: PayloadAction<contato>) => {
      const indexDoContato = state.itens.findIndex((c) => c.id === action.payload.id);
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cadastrarContato.fulfilled, (state, action) => {
      state.itens.push(action.payload.contato);
      alert('Contato adicionado com sucesso!');
    });
    builder.addCase(cadastrarContato.rejected, () => {

    });
  },
});

export const { remover, editar } = contatosSlice.actions;
export default contatosSlice.reducer;
