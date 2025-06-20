// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('');
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    users: [],
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
